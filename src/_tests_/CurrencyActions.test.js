import {
    getCurrencies
} from "../actions/CurrencyActions";


describe("CurrencyActions getCurrencies()", () => {
    it("Should getCurrencies from API", async () => {
        const getCurrenciesFetch = getCurrencies()
        const result = await new Promise((resolve) => {
            getCurrenciesFetch((currencies) => {
                resolve(currencies)
            })
        });
        expect(result.type).toBe('set_currencies')
    });
});
