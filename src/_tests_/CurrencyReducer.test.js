import CurrencyReducer from '../reducers/CurrencyReducer';
import {
    SET_CURRENCIES
} from '../actions/types'


describe("CurrencyReducer", () => {
    it("Should get color white when state is null", () => {
        const action = {
            type: SET_CURRENCIES,
            payload: {
                BTC: {
                    price_usd: 1,
                    name: "Bitcoin",
                    symbol: "BTC",
                    color: "white"
                }
            }
        }
        expect(CurrencyReducer(null, action)['BTC'].color).toBe("white")

    });
    it("Should get color red when state is higher than new state", () => {
        const currencies = {
            BTC: {
                price_usd: 2,
                name: "Bitcoin",
                symbol: "BTC",
                color: "white"
            }
        };
        const action = {
            type: SET_CURRENCIES,
            payload: {
                BTC: {
                    price_usd: 1,
                    name: "Bitcoin",
                    symbol: "BTC",
                    color: "white"
                }
            }
        }
        expect(CurrencyReducer(currencies, action)['BTC'].color).toBe("red")

    });
    it("Should get color Green when state is lower than new state", () => {
        const currencies = {
            BTC: {
                price_usd: 2,
                name: "Bitcoin",
                symbol: "BTC",
                color: "white"
            }
        };
        const action = {
            type: SET_CURRENCIES,
            payload: {
                BTC: {
                    price_usd: 3,
                    name: "Bitcoin",
                    symbol: "BTC",
                    color: "white"
                }
            }
        }
        expect(CurrencyReducer(currencies, action)['BTC'].color).toBe("green")

    });
    it("Should get color White when new state and old state are equal ", () => {
        const currencies = {
            BTC: {
                price_usd: 2,
                name: "Bitcoin",
                symbol: "BTC",
                color: "white"
            }
        };
        const action = {
            type: SET_CURRENCIES,
            payload: {
                BTC: {
                    price_usd: 2,
                    name: "Bitcoin",
                    symbol: "BTC",
                    color: "white"
                }
            }
        }
        expect(CurrencyReducer(currencies, action)['BTC'].color).toBe("white")

    });
});