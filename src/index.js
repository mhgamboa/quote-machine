import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import quotesArray from './quotesArray.js';

/* REDUX STUFF */
const COLOR = 'COLOR'
const hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//ACTION
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

//REDUCER
const initialState = {
  color: 'blue',
  quoteNumber: 0,
  word: 'word'
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case COLOR:
      return newQuote();
    default:
      return state;
  }
}

//STORE
const store = createStore(reducer);
console.log(store.getState());

store.dispatch(newQuote())

/* END REDUX */

class App extends Component {
  render() {
    console.log(this.props)
    return (
    <div className="App" style={{backgroundColor: this.props.color}}>
      <div id="quote-box">
        <h1 id="text" style={{color: this.props.color}}>{quotesArray[0].quote}</h1>
        <p id="author" style={{color: this.props.color}}>- {quotesArray[0].author}</p>
        <div className="buttons-container">
          <a href="http://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote"><button style={{backgroundColor: this.props.color}}>Tweet Quote</button></a>
          <button id="new-quote" onClick={this.newQuote} style={{backgroundColor: this.props.color}}>New Quote</button>
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

const mapStateToProps = (state) => {
  return {
    color: state.color,
    number: state.quoteNumber,
    word: state.word
  }
}
connect(mapStateToProps)(App);

reportWebVitals();