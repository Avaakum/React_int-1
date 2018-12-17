import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Добавляем эл-ы из BS для  react из документации ES6
//Добавляем контейнер, ряд, и колонки
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//импортируем именно таким способом для усорения скорости загрузки и 
//экономии память, тк таким способом импортируется только те элементы
//и ничего лишнего
//другой способ import { Grid } from 'react-bootstrap'; - более обширный


import styled from 'styled-components'


class App extends Component {
  render() {
    return (
      //ВНимание класс пишется в формате camelCase
      <div className="wrapper">
        <SayFullName name="Nik" surname="Chops" link="ya.ru" />
        <SayFullName name="Pop" surname="Tuk" link="vk.su" />
        <SayFullName name="Ted" surname="Rol" link="sp.du" />
      </div>
    );
  }
}




function SayFullName (props) {
  return (
      <div>
      <h1> Мое имя {props.name}, фамилия - {props.surname} </h1>
      <a href={props.link}> Ссылка на мой профиль </a>
      </div>
    )
}



//Создаем ф-юю для использования одного и того же компонента с разными атрибутами
// function MeetAll() {
//   return (
      
//     )
// }
//Переместили всё из этой функции внутрь App



//Переместили функцию в константу, что-бы сократить длину функции рендеринга и
//лишний раз разбить на части
// const element = <SayFullName name="Nik" surname="Chops" link="ya.ru" />



export default App;
