
import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';

export default class PokeHome extends Component {
    render() {
        return (
            
            <main>
            <Header/>
            <div className="home">
                <h3>
                    <u>Hello and welcome to the Lacroix home page !!!</u>
               <p></p>
                <iframe src="https://giphy.com/embed/ulmF6LOjYmV82QOgBS" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </h3>
                <body> </body>
            </div>
            </main>
        )}
};