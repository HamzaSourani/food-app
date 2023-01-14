import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Route from "./route";

const Wrapper = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default Wrapper;
