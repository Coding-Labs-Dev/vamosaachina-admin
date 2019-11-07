import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import theme from '~/theme';
import 'react-toastify/dist/ReactToastify.min.css';

import App from '~/App';

import store from '~/store';
import Routes from '~/routes';

import '~/reset.css';
import '~/index.css';

ReactDOM.render(
  <ThemeProvider theme={theme.default}>
    <Provider store={store}>
      <ToastContainer hideProgressBar newestOnTop />
      <App>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </App>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
