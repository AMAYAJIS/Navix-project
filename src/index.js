import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import "./index.css";
// import App2 from "./App2";
import App from "./App";
import Voyage from "./Voyage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
  <Voyage />
  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
