import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <a href="#">Главная</a>
        </li>
        <li className="menu__item">
          <a href="#">Каталог</a>
        </li>
        <li className="menu__item">
          <a href="#">O нас</a>
        </li>
        <li className="menu__item">
          <a href="#">Доставка</a>
        </li>
        <li className="menu__item">
          <a href="#">Оплата</a>
        </li>
        <li className="menu__item">
          <a href="#">Контакты</a>
        </li>
        <li className="menu__item">
          <a href="#">Новости</a>
        </li>
      </ul>
    );
  }
}

export default Menu;
