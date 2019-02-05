const api = 'api/currencies';


export const fetchCurrencies = async ( callback, error ) => {
    try {
        const response = await fetch( api );
        const currencies = await response.json();
        return Promise.resolve(currencies);
    } catch ( e ) {
       return Promise.reject(null);
    }
}