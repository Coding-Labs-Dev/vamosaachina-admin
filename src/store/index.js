import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '~/ReactotronConfig';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
        rootReducer(),
        compose(
          applyMiddleware(...middlewares),
          Reactotron.createEnhancer()
        )
      )
    : createStore(rootReducer(), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
