import './App.css';
import React, { Component } from 'react';
import quotesArray from './quotesArray.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteNumber: 3
    }
  }
  render() {
    return (
    <div className="App">
      <div className="quote-box">
        <h1 className="quote">{quotesArray[this.state.quoteNumber].quote}</h1>
        <p className="quote-author">- {quotesArray[this.state.quoteNumber].author}</p>
      </div>
      <div className="buttons-container"></div>
    </div>
  );
  }
}

export default App;
