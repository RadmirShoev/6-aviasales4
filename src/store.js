import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import filtersReducer from './reducers/filtersReducer';
import sortReducer from './reducers/sortReducer';
import ticketsReducer from './reducers/ticketReducer';

const mainReduser = combineReducers({
  filters: filtersReducer,
  sorts: sortReducer,
  tickets: ticketsReducer,
});

// Мидлвар отчет по ошибкам
const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};
//Redux DevTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(mainReduser, composeEnhancers(applyMiddleware(thunk, crashReporter)));

export default store;
