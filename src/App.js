import React, { Component } from "react";

import CurrencyContainer from './components/CurrencyContainer';


class App extends Component {  
  render() {
    if(document.location.search.split('=')[1]){
      window.close();
      window.opener.callBack(document.location.search.split('=')[1]);
    } 
    return (    
      <CurrencyContainer />    
    );
  }
}

export default App;
