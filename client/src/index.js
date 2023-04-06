import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import { store } from './reducers';
import App from './components/App';

// const store = createStore(reducers, {}, applyMiddleware());

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
