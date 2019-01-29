import React from 'react'

import './main.css'
import Header from './header/header'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3" style={{flex:1,flexWrap:'wrap'}}>
                {props.children}
            </div>
        </main>
    </React.Fragment>