import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import classesReducer from '../reducers/classes'
import studentsReducer from '../reducers/students'
import teachersReducer from '../reducers/teachers'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      classes: classesReducer,
      students: studentsReducer,
      teachers: teachersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};