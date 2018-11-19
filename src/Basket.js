import React, { Component } from 'react';

class Basket extends Component {
  render() {
    return (
      <div className="basket">
        <a className="basket__link" href="#">
          <div className="basket__block">
            <svg className="basket__img">
              <use xlinkHref={this.props.xlinkHref}/>
            </svg>
            <span className="basket__wrapper">
              <span className="basket__name">Корзина</span>
              <span className="basket__price"></span>
            </span>
            <span className="basket__count">0</span>
          </div>
        </a>
      </div>
    );
  }
}

export default Basket;

