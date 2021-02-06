import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/* REDUX STUFF */
const COLOR = 'COLOR'

const colorAction = () => ({
  type: COLOR
})

const reducer = (state, action) => {
  switch(action.type) {
    case COLOR:
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(colorAction())

/* END REDUX */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
