import React, { Component } from 'react';
import './App.css';
import fetch from 'superagent';
import Header from './Header.js';

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});

export default class App extends Component {
  state = {
    data: []
  }
  componentDidMount = async () => {
    await this.fetchLacroixs();

  }

fetchLacroixs = async () => {
  const response = await fetch.get(`https://cheese-man.herokuapp.com/lacroixs`);
  
  await sleep(2000)
  this.setState({ data: response.body});
}

  render() {
    return (
      <>
      <Header/>
      <main>
        <section>
        
            {
              this.state.data.length === 0
              ? 'loading'

              : this.state.data.map((lacroixs) => {
                  return (
                    <h1>
                    id={lacroixs.id},
                    <br/>
                    name={lacroixs.name},
                    <br/>
                    cool_factor={lacroixs.cool_factor},
                    <br/>
                    category={lacroixs.category},
                    <br/>
                    crisp={lacroixs.crisp},
                    </h1>
                    )

                  })
              }
             </section>
            </main>
        </>
      
    )
  }
}