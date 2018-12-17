import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Добавляем эл-ы из BS для  react из документации ES6
//Добавляем контейнер, ряд, и колонки
import Grid from 'react-bootstrap/lib/Grid';
//импортируем именно таким способом для усорения скорости загрузки и 
//экономии память, тк таким способом импортируется только те элементы
//и ничего лишнего
//другой способ import { Grid } from 'react-bootstrap'; - более обширный
import styled from 'styled-components'

import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Main />
      </div>
      

    );
  }
}


export default App;
