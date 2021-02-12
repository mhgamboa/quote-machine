import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import './App.css';

//Functions for Redux
const quotesArray = [
    {quote: "Do or do not, there is no try.", author: 'Yoda'},
    {quote: "Git 'R Done!", author: "Larry the Cable Guy"},
    {quote: "No.", author: "My Wife"},
    {quote: "Live Long and Prosper 🖖", author: "Spock"},
    {quote: "I have a dream...", author: "Martin Luther King Jr."},
    {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln"},
    {quote: "Do not let making a living prevent you from making a life.", author: "John Wooden"},
    {quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
    {quote: '"Hello World!"', author: "Anyone who's ever coded"},
    {quote: "", author: ""},
]

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
  quoteNumber: 0
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

const rootReducer = combineReducers({reducer: reducer})

let NEWQUOTEAction = () => ({
  type: NEWQUOTE,
  color: createNewColor(),
  quoteNumber: createNewQuoteNumber()
})

const store = createStore(rootReducer);
/* END REDUX */

/* START REACT */
class App extends React.Component {
  render() {
    console.log(this.props)
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
let mapDispatchToProps = (dispatch) => bindActionCreators({createNewQuote: NEWQUOTEAction}, dispatch);

let mapStateToProps = (state) => ({
  color: state.reducer.color,
  quoteNumber: state.reducer.quoteNumber
})

let CApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}><CApp /></Provider>,
  document.getElementById('root')
);