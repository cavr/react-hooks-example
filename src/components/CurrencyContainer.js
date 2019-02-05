import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchCurrencies } from "../services/CurrencyService";


const CurrencyContainer = props => { 
  const [currenciesState, setCurrencies] = useState({
    BTC: null,
    ETH: null,
    LTC: null
  });

  const [render, setRender] = useState(<strong>Loading</strong>);

  const giveMeColorForCurrency = (oldCurrencyPrice, newCurrencyPrice) => {
    if (!oldCurrencyPrice || !newCurrencyPrice) {
      return "yellow";
    }

    oldCurrencyPrice = oldCurrencyPrice.price_usd;
    newCurrencyPrice = newCurrencyPrice.price_usd;

    return oldCurrencyPrice === newCurrencyPrice
      ? "white"
      : newCurrencyPrice < oldCurrencyPrice
      ? "red"
      : "green";
  };

  const updateCurrencies = currencies => {
    const symbols = Object.keys(currenciesState);

    const render = symbols.map(symbol => {
      const color = currenciesState[symbol]
        ? giveMeColorForCurrency(currenciesState[symbol], currencies[symbol])
        : "white";
      return (
        <div id={symbol} key={symbol} style={{ ...styles.box, color }}>
          <label>
            <strong>{symbol}:</strong>
            <span style={{ paddingLeft: "16px" }}>
              {currencies[symbol].price_usd}
            </span>
          </label>
        </div>
      );
    });

    setCurrencies({ ...currencies });
    setRender(render);
  };

  const showError = () => {
    setRender(<strong>Error</strong>);
  };

  const getCurrencies = async () => {
    try {
      updateCurrencies(await fetchCurrencies());
    } catch (e) {
      showError();
    }
  };

  useEffect(() => {
    getCurrencies();
    const currencyInterval = setInterval(() => {
      getCurrencies();
    }, props.interval);
    return () => {
      clearInterval(currencyInterval);
    };
  }, []);

  return (
    <div style={styles.container}>
      {render}   
    </div>
  );
};

const styles = {
  box: {
    border: "5px solid gray",
    backgroundColor: "black"
  },
  container: {
    display: "flex",
    justifyContent: "center"
  }
};

CurrencyContainer.defaultProps = {
  interval: 2000
};

CurrencyContainer.propTypes = {
  interval: PropTypes.number
};

export default CurrencyContainer;
