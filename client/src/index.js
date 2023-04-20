import "materialize-css/dist/css/materialize.min.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./reducers";
import App from "./components/App";
import axios from "axios";
window.axios = axios;

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
