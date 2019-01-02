import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import Input from "./componants/input";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Counter sides={Input.state.value} />, document.getElementById(""));
ReactDOM.render(<Input />, document.getElementById("intro"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
