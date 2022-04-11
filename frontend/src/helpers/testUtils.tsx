import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../store/reducer";

const render = (
  viewElement,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(viewElement, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
