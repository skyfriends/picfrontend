import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../../reducer';
import thunk from '../redux-thunk';
import reporter from '../redux-reporter';

export default () =>
  createStore(reducer, compose(applyMiddleware(thunk, reporter)));
