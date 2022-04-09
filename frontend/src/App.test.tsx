import * as React from "react";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "./App";

const mockStore = configureStore([]);

test("should renders the App component", () => {
    const store = mockStore({
      search: {
        term: "",
        type: "ALL"
      },
      mediaCollection: []
    });

    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  expect(component.toJSON()).toMatchSnapshot();
});
