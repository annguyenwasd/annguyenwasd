import { createStore } from 'redux';
import reducers from './reducers';

export default preloadedState => {
  return createStore(reducers, preloadedState);
};
