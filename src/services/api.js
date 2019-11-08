/* eslint-disable no-param-reassign */
const axios = require('axios');

const { hostname } = window.location;
class API {
  constructor() {
    this.updateConfig();
    this.api = () => {
      const base = {
        baseURL: process.env.REACT_APP_API,
        timeout: 30000,
      };
      const api = axios.create(base);

      // Inject Access Token
      api.interceptors.request.use(config => {
        if (this.verificationToken) {
          config.headers.Authorization = `Bearer ${this.verificationToken}`;
        }
        return config;
      });
      api.interceptors.response.use(
        res => {
          return res.data;
        },
        // Token Expired?
        error => {
          const originalRequest = error.config;
          // No error response ?
          if (!error.response) {
            const err = { code: 0, message: error.message };
            throw err;
          }

          // Did the error came from refreshing the token?
          if (
            error.response.status === 401 &&
            originalRequest.url ===
              `${process.env.REACT_APP_API}/session/refresh`
          ) {
            // Invalid Refresh token
            this.signOut();
            const err = { code: 401, message: 'Sessão expirada' };
            return Promise.reject(err);
          }

          // Unauthorized: Get New Access Token and Try Again
          if (error.response.status === 401 && !originalRequest.retry) {
            // Refresh Session
            originalRequest.retry = true;
            return api
              .get('/session/refresh', {
                withCredentials: true,
              })
              .then(response => {
                const saveSession = !!localStorage.getItem(
                  `@${hostname}:verificationToken`
                );
                const { verificationToken } = response;
                if (saveSession) {
                  localStorage.setItem(
                    `@${hostname}:verificationToken`,
                    verificationToken
                  );
                } else {
                  sessionStorage.setItem(
                    `@${hostname}:verificationToken`,
                    verificationToken
                  );
                }
                this.updateConfig();
                api.defaults.headers.common.Authorization = `Bearer ${this.verificationToken}`;
                return api(originalRequest);
              });
          }
          const err = { code: error.response.status, message: error.message };
          return Promise.reject(err);
        }
      );
      return api;
    };
  }

  updateConfig() {
    this.verificationToken =
      sessionStorage.getItem(`@${hostname}:verificationToken`) ||
      localStorage.getItem(`@${hostname}:verificationToken`) ||
      null;
  }

  // ! Public Settings

  async verifySession() {
    const response = this.api().get('/session/verify', {
      withCredentials: true,
    });
    return response;
  }

  // ! Auth
  // Sign In
  async signIn({ username, password, saveSession = false }) {
    const result = await this.api().post(
      '/session/signin',
      {
        username,
        password,
        saveSession,
      },
      { withCredentials: true }
    );

    const { verificationToken } = result;
    if (saveSession) {
      localStorage.setItem(`@${hostname}:verificationToken`, verificationToken);
    } else {
      sessionStorage.setItem(
        `@${hostname}:verificationToken`,
        verificationToken
      );
    }
    this.updateConfig();
    return result;
  }

  // // Sign Out
  signOut() {
    // TODO
    document.cookie = 'accessToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  }

  // ! Transactions
  async getTransactions(id) {
    const endpoint = `/admin/transactions${id ? `/${id}` : ''}`;
    const response = this.api().get(endpoint, {
      withCredentials: true,
    });
    return response;
  }

  // ! Clients
  async getClients(id) {
    const endpoint = `/admin/clients${id ? `/${id}` : ''}`;
    const response = this.api().get(endpoint, {
      withCredentials: true,
    });
    return response;
  }
}

const api = new API();
export default api;
