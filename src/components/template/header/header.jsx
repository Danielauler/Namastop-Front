import React from 'react'

import './header.css'
import icon from '../../../assets/images/logo.png';

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3 center">
            <img src={icon} alt='logo' height='40' align='middle'/> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>