import './App.css';
import React, { Component } from 'react';
import quotesArray from './quotesArray.js'
import { connect } from 'react-redux';

let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteNumber: 0,
      color: ''
    }
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote = () => {
    let newQuoteNumber = Math.floor(Math.random() * (quotesArray.length - 1));
    let newColor = '#';

    for (let i = 0; i < 6; i++) {
      let hex = hexArray[Math.floor(Math.random() * hexArray.length)]
      newColor += hex;
    }
    console.log(newColor)
    this.setState({
      quoteNumber: newQuoteNumber,
      color: newColor
    })
  }
  componentDidMount() {
    setTimeout(this.newQuote,1)
  }
  render() {
    return (
    <div className="App" style={{backgroundColor: this.state.color}}>
      <div id="quote-box">
        <h1 id="text" style={{color: this.state.color}}>{quotesArray[this.state.quoteNumber].quote}</h1>
        <p id="author" style={{color: this.state.color}}>- {quotesArray[this.state.quoteNumber].author}</p>
        <div className="buttons-container">
          <a href="http://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote"><button style={{backgroundColor: this.state.color}}>Tweet Quote</button></a>
          <button id="new-quote" onClick={this.newQuote} style={{backgroundColor: this.state.color}}>New Quote</button>
        </div>
      </div>
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  color: state.color,
})
export default connect()(App);
