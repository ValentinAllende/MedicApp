import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";

console.log("URL Backend: ", axios.defaults.baseURL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
