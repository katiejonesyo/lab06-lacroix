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
                </h3>
                <img src="https://media.giphy.com/media/ulmF6LOjYmV82QOgBS/giphy.gif" alt="lacroix"/>
                
            </div>
            </main>
        )}
};