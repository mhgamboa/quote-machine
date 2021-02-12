import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import './App.css';

import quotesArray from './quotesArray.js';

//Functions for Redux
let createNewQuoteNumber = () => Math.floor(Math.random() * (quotesArray.length - 1));
let createNewColor = () => {
  let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let newColor = '#';
  
  for (let i = 0; i < 6; i++) {
    let hex = hexArray[Math.floor(Math.random() * hexArray.length)]
    newColor += hex;
  }
  return newColor;
}

/* START REDUX */
const NEWQUOTE = 'NEWQUOTE';

let initialState = {
  color: 'orange',
  quoteNumber: 1
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case NEWQUOTE:
      console.log(action)
      return {
  color: action.color,
  quoteNumber: action.quoteNumber
};
    default:
        return state;
  }
}
let NEWQUOTEAction = () => ({
  type: NEWQUOTE,
  color: createNewColor(),
  quoteNumber: createNewQuoteNumber()
})

const store = createStore(reducer);
/* END REDUX */

/* START REACT */
class App extends React.Component {
  render() {
    return (
    <div className="App" style={{backgroundColor: this.props.color}}>
      <div id="quote-box">
        <h1 id="text" style={{color: this.props.color}}>{quotesArray[this.props.quoteNumber].quote}</h1>
        <p id="author" style={{color: this.props.color}}>- {quotesArray[this.props.quoteNumber].author}</p>
        <div className="buttons-container">
          <a href="http://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote"><button style={{backgroundColor: this.props.color}}>Tweet Quote</button></a>
          <button id="new-quote" style={{backgroundColor: this.props.color}}  onClick={() => this.props.createNewQuote()}>New Quote</button>
        </div>
      </div>
    </div>
  );
  }
}

/* END REACT */

/* CONNECT REDUX TO REACT */
let mapDispatchToProps = (dispatch) => ({
  createNewQuote: () => dispatch(NEWQUOTEAction())
})

let mapStateToProps = (state) => ({
  color: state.color,
  quoteNumber: state.quoteNumber
})

let CApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}><CApp /></Provider>,
  document.getElementById('root')
);