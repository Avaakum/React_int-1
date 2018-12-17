import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



function Hello() {
  let phrase = "World"
  return (
    <h1> Hello {phrase+5}!</h1>
    //Да-да в фигурные скобки можно писать что угодно и он поймет
    )
}


//Обычно структура именно такая  и в этом файле ничего кроме рендера нетуу
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Hello />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
