import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import quotesArray from './quotesArray.js';

/* START REDUX */
const NEWCOLOR = 'NEWCOLOR';

const reducer = (state = 'yellow', action) => {
  switch(action.type) {
    case NEWCOLOR:
      return action.color;
    default:
        return state;
  }
}
let newColorAction = () => ({
  type: NEWCOLOR,
  color: 'orange'
})

const store = createStore(reducer);

store.dispatch(newColorAction())

console.log(store.getState())

/* END REDUX */

class App extends React.Component {
  render() {
    return (
    <div className="App" style={{backgroundColor: 'blue'}}>
      <div id="quote-box">
        <h1 id="text" style={{color: 'green'}}>{quotesArray[0].quote}</h1>
        <p id="author" style={{color: 'green'}}>- {quotesArray[0].author}</p>
        <div className="buttons-container">
          <a href="http://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote"><button style={{backgroundColor: 'green'}}>Tweet Quote</button></a>
          <button id="new-quote" style={{backgroundColor: 'green'}}>New Quote</button>
        </div>
      </div>
    </div>
  );
  }
}

ReactDOM.render(
  <Provider><App /></Provider>,
  document.getElementById('root')
);