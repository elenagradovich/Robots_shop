import React, { Component } from 'react';
import './styles/index.css';
import RobotItem from './RobotItem.js';
import Menu from './Menu.js';
import Basket from './Basket.js';
import Search from './Search.js';
import Contacts from './Contacts.js';
import data from './robots.json';

var logoSvg = "img/sprite.svg#logo";
var basketSvg = "img/sprite.svg#basket-img";

function RobotItemList(props) {
  const listItems = props.items.map((item) =>
    <RobotItem image={item.image} name={item.name} price={item.price} />
  );
  return (
    [listItems]
  );
}

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <svg className="header__logo">
            <use xlinkHref={logoSvg}/>
          </svg>
          <Search />
          <Basket xlinkHref={basketSvg}/>
        </div>
        <Menu />
      </header>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <main className="content">
        <div className="content__wrapper">
          <h1 className="content-title">Роботы для дома:</h1>
          <section className="robots">
            <RobotItemList items={data.robots} />
          </section>
        </div>
      </main>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <Contacts />
        </div>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
