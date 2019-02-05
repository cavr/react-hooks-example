import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Currency from "../components/Currency";

configure({ adapter: new Adapter() });

describe("Currency", () => {
    const currencies = {
      BTC: {
        price_usd: 3672.7423235,
        name: "Bitcoin",
        symbol: "BTC",
        color: "white"
      },
      ETH: {
        price_usd: 97.7744376529,
        name: "Ethereum",
        symbol: "ETH",
        color: "white"
      },
      LTC: {
        price_usd: 28.1124404631,
        name: "Litecoin",
        symbol: "LTC",
        color: "white"
      }
    };
  it("Should not print any SPAN inside with empty currencies", () => {
    expect(mount(<Currency />).find("span").length).toBe(0);
  });
  it("Should  print  SPANS inside with currencies", () => {
    expect(
      mount(<Currency currencies={currencies} />).find("span").length
    ).toBe(6);
  });
  it("Should  have  SPANS  with color white", () => {
    expect(
      mount(<Currency currencies={currencies} />).find("#BTC").prop('style')).toHaveProperty('color', 'white');
  });
});
