import React, { Component } from 'react'

import './cardContainer.css'

export default props => (
    <div className='card-container'>
        {props.children}
    </div>
)
