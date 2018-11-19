import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
      <ul className="contacts">
        <li className="contacts__item">
          <span className="contacts__title">Звоните:</span>
          <a className="contacts__info" href="tel:+326 (56) 52632">+326 56 52632</a>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">Пишите:</span>
          <a className="contacts__info"  href="mailto:mail@ddd-shop.ru">mail@ddd-shop.ru</a>
        </li>
        <li className="contacts__item">
          <span className="contacts__title">Приезжайте:</span>
          <span className="contacts__info">ул. Правая, 20</span>
        </li>
      </ul>
    );
  }
}

export default Contacts;
