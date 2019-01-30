import React from 'react'

import './header.css'
import icon from '../../../assets/images/logo.png';

export default props =>
    <header className="header">
        <img src={icon} alt='logo' height='60' />
        <h1 className="title-logo">
            <span className='title-image'>{props.title}</span>
            <p className='subtitle-image'>{props.subtitle}</p>
        </h1>
    </header>