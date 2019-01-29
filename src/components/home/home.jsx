import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/main';
import { INITIAL_STATE, BASE_URL } from '../../config/consts'
import Card from '../card';
import './home.css';



export default class extends Component {
    state = { ...INITIAL_STATE }

    componentDidMount() {
        axios.get(`${BASE_URL}`).then(res => {
            console.log(res);
            this.setState({ list: res.data })
        })
    }

    renderCards() {
        const list = this.state.list;
        return (
            <div className="cards">
            {list.map(card => (
                <Card
                    key={card._id}
                    date={card.createdAt}
                    from={card.user_name}
                    to={this.getName(card.text)}
                    text={this.getText(card.text)}
                />
            ))}
            </div>
        )
    }

    getName(text) {
        const start = text.indexOf('@')+1;
        const end = text.indexOf(' ',start) > 0 ? text.indexOf(' ',start): text.length;
        const username = text.substring(start, end);
        console.log(username)
        return username;
    }

    getText(text) {
        const end = text.indexOf('@');
        const textMessage = text.substring(0, end);

        return textMessage;
    }


    render() {
        return (
            <Main title="Namastop"
                subtitle="Projeto Novatics">                
                    {this.renderCards()}
            </Main>
        )
    }
}