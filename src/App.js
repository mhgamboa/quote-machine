import './App.css';
import React, { Component } from 'react';
import quotesArray from './quotesArray.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteNumber: 0
    }
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote = () => {
    console.log(quotesArray.length)

    let newQuoteNumber = Math.floor(Math.random() * (quotesArray.length - 1));
    this.setState({
      quoteNumber: newQuoteNumber
    })
  }
  render() {
    return (
    <div className="App">
      <div id="quote-box">
        <h1 id="removeText">{quotesArray[this.state.quoteNumber].quote}</h1>
        <p id="author">- {quotesArray[this.state.quoteNumber].author}</p>
        <div className="buttons-container">
          <a href="http://twitter.com/intent/tweet" target="_blank" id="tweet-quote"><button>Tweet Quote</button></a>
          <button id="new-quote" onClick={this.newQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
