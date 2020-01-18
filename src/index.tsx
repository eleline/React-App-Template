import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import * as serviceWorker from "./serviceWorker";

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
