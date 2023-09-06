import { useState } from "react";
import "./App.css";
import React from "react";
import Router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
