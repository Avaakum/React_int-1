import React, { Component } from 'react';
// import logo from './logo.svg';
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

const url = process.env.PUBLIC_URL + '/img/bg.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`

const MainWrapper = styled.main`
  height: 562px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`


class App extends Component {
  render() {
    return (
      <div className="App">

        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>

        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>

        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>

      </div>
      

    );
  }
}


export default App;
