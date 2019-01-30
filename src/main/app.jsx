import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Footer from '../components/template/footer/footer';
import Routes from './routes';

import '../assets/styles/main.scss';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>