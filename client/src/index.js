import 'materialize-css/dist/css/materialize.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
import { store } from './reducers';
import App from './components/App';

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
