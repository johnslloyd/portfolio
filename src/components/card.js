import React, { Component } from 'react';

class Card extends Component{
  render(){
    return (
        <a className="cardwrapper" href={this.props.link}>
        <div className="card">
          <div className="cardBody">
            <img src={this.props.imagePath} alt={this.props.imageAlt} />
          </div>
          <div className="cardfooter">
            <h4>{this.props.cardName}</h4>
            <span>{this.props.description}</span>
          </div>
        </div>
        </a>

    )
  }
}

export default Card;
