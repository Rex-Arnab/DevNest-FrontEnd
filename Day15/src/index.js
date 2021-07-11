import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ClassApp from "./ClassApp";

ReactDOM.render(
  <StrictMode>
    <App />
    <ClassApp />
  </StrictMode>,
  document.getElementById("root")
);
