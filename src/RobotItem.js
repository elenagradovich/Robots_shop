import React, { Component } from 'react';

class RobotItem extends Component {
  render() {
    return (
      <div className="robot-item">
        <img className="robot-item__img" alt="robo" src={this.props.image}/>
        <div className="robot-item__wrapper">
          <h2 className="robot-item__name">{this.props.name}</h2>
          <span className="robot-item__price">Цена: {this.props.price} $</span>
          <button className="robot-item__btn">Купить</button>
        </div>
      </div>
    );
  }
}

export default RobotItem;
