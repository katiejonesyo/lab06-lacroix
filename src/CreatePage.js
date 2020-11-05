import React, { Component } from 'react';
import './App.css';
import fetch from 'superagent';

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
    await this.fetchCategories();

  };

fetchCategories = async () => {
  const response = await fetch.get(`https://cheese-man.herokuapp.com/categories`);
  
  await sleep(2000)
  this.setState({ data: response.body});
}

  render() {
    return (
      <>
      
      <main>
            {
              this.state.data.length === 0
              ? 'loading'

              : this.state.data.map((categories) => {
                  return (
                    <h1>
                    id={categories.id},
                    name={categories.names},
                    
                    </h1>
                    )

                  })
              }
             
            </main>
        </>
      
    )
  }
}