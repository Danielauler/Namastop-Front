import React, { Component } from 'react'
import axios from 'axios'

import { INITIAL_STATE, BASE_URL } from '../../config/consts'
import Card from '../card';
import Header from '../template/header/header';
import CardContainer from '../cardContainer/cardContainer';
import './home.css';

export default class Home extends Component {
    state = { 
        ...INITIAL_STATE,
    }

    componentDidMount() {
        this.loadCards();
    }

    renderCards() {
        const cards = this.state.cards;
        return cards.map(card => (
            <Card
                key={card._id}
                date={card.createdAt}
                from={card.user_name}
                to={this.getName(card.text)}
                text={this.getText(card.text)}
            />
        ))
    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;
        const pageNumber = page -1;

        this.loadCards(pageNumber);
    }

    nextPage = () => {
        const { page, cardInfo } = this.state;

        if (page === cardInfo.pages) return;

        const pageNumber = page + 1;
        this.loadCards(pageNumber);
    }

    loadCards = async (page = 1) => {
        const response = await axios.get(`${BASE_URL}?page=${page}`)

        const { docs, ...cardInfo } = response.data;

        this.setState({cards: docs, cardInfo, page})
    }


    getName(text) {
        const start = text.indexOf('@') + 1;
        const end = text.indexOf(' ', start) > 0 ? text.indexOf(' ', start) : text.length;
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
        const { page, cardInfo } = this.state;
        return (
            <div className='cards-list' style={{height: '100%', position: 'relative'}}>
                <Header title="Namastop"
                    subtitle="Projeto Novatics" />
                <main className="content container-fluid">
                    <CardContainer>
                    {this.renderCards()}
                    </CardContainer>
                </main>
                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===cardInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}
