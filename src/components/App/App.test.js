import React from "react";
import ReactDOM from "react-dom";
import App from "../App/App";
import { BrowserRouter } from "react-router-dom";
import { SmoothieProvider } from "../../contexts/SmoothieContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SmoothieProvider>
        <App />
      </SmoothieProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
