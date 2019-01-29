import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import logo from '../assets/images/logo.png';

export default class extends Component {
    render() {
        const { to, from, text } = this.props;
        return (
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '300px', padding: 10, }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: '#43C6AC', padding: 20, justifyContent: 'center' }} >
                    <p>de <strong>{from}</strong></p>
                    <span role='img' aria-label='gratitude' style={{paddingLeft: 50}}>🙏</span>
                    <p style={{ alignItems: 'flex-end' }}>para {'\n'} <strong>{to}</strong></p>
                </FrontSide>
                <BackSide
                    style={{ backgroundColor: '#34e89e' }}>
                    <p style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>{text}</p>
                </BackSide>
            </Flippy>
        )
    }
}
