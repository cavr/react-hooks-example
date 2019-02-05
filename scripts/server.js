
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../config/webpack.config.dev');
const axios = require('axios');

app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.use(express.static(__dirname + '/public'));


app.get('/api/currencies', function(req, res){
    const currencies = ['BTC', 'ETH', 'LTC'];
    axios.get('https://api.coinmarketcap.com/v1/ticker/').then((currencyJSON) =>{
        const currencyMap = {};
        currencyJSON.data.forEach(currency => {
            currencies.indexOf(currency.symbol) >= 0 &&
                (currencyMap[currency.symbol] = {
                    price_usd: parseFloat(currency.price_usd),
                    name: currency.name,
                    symbol: currency.symbol
                })
        });
        res.json(currencyMap);
    }).catch(error =>{
        console.log(error);
        res.send(error).status(500)
    })
});



app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
});