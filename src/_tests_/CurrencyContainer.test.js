import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import CurrencyContainer from "../components/CurrencyContainer";

const store = createStore(reducers, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe("CurrencyContainer", () => {
  it("Should display CurrencyContainer with currencies", () => {
    expect(
      mount(
        <Provider store={store}>
          <CurrencyContainer />
        </Provider>
      ).find("Currency").length
    ).toBe(1);
  });
});
