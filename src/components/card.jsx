import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { from, to, text } = this.props;
    return (
      <div className="card-namastop">
        <div className="card-namastop__side card-namastop__side--front card-namastop__side--front-1">
          <div className="card-namastop__box">
            <span className='heading-secundary' style={{flex:1}}>
              <span className="heading-secundary--min">De: {from}</span>
            </span>
            <i className="card-namastop__box--icon fa fa-heart"></i>
          </div>
          <span className='heading-secundary' style={{flex:1}}>
              <span className="heading-secundary--min u-text-right">para: {to}</span>
            </span>
        </div>
        <div className="card-namastop__side card-namastop__side--back card-namastop__side--back-1">
          <div className="card-namastop__box">
            <p className='card-namastop__box--text'>{text}</p>
          </div>
        </div>
      </div>
    )
  }
}
