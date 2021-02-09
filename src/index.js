import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import quotesArray from './quotesArray.js';

/* REDUX STUFF */
const COLOR = 'COLOR'
const hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


const newQuote = () => {
  let quoteNumber = Math.floor(Math.random() * (quotesArray.length - 1));
  let newColor = '#';

  for (let i = 0; i < 6; i++) {
    let hex = hexArray[Math.floor(Math.random() * hexArray.length)]
    newColor += hex;
  }
    
  return {
    type: COLOR,
    // quoteNumber,
    newColor
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case COLOR:
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(newQuote())

/* END REDUX */

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
          <button id="new-quote" onClick={this.newQuote} style={{backgroundColor: this.state.color}}>sNew Quote</button>
        </div>
      </div>
    </div>
  );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

const mapStateToProps = (state) => ({
  color: state.color,
})
connect()(App);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
