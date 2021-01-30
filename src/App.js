import './App.css';
import React, { Component } from 'react';
import quotesArray from './quotesArray.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }
  render() {
    return (
    <div className="App">
      <div className="quote-box">
        <h1 className="quote">{quotesArray[0].quote}</h1>
        <p className="quote-author">- {quotesArray[0].author}</p>
      </div> 
    </div>
  );
  }
}

export default App;
