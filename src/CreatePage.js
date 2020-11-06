import React, { Component } from 'react';
import './App.css';
import fetch from 'superagent';
import Header from './Header.js';


export default class App extends Component {
  state = {
    data: []
  }
  componentDidMount = async () => {
    await this.fetchCategories();

  };

fetchCategories = async () => {
  const response = await fetch.get(`https://cheese-man.herokuapp.com/categories`);
  
  this.setState({ data: response.body});
}

  render() {
    console.log(this.state.data)
    return (
      <>
      <Header/>
          <main>
              <section>
                <h4>Create Your Lacroix</h4>
                <form>
                  <select>
                    <option value='lacroix'>Lacroix</option>
                  </select>
                  <button> Create </button>
                </form>

                </section>
          </main>
        </>
      
    )
  }
}

