import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import request from 'superagent';


export default class App extends Component {
  state = {
    data: [],
    loading: true
  }
  componentDidMount = async () => {
    const response = await request.get(`https://cheese-man.herokuapp.com/lacroixs`);

    this.setState({ data: response.body, loading: false });

  }



  render() {
    return (
      
      <>
      <Header/>
      <main>
        <section>
        <div className="listpage">
            {
              this.state.data.length === 0
              ? 'loading'

              : this.state.data.map(lacroixs => 

                <div key={lacroixs.lacroixs} className='fetched-details-div'>
                  <p>
                    <p>Name: {lacroixs.name}</p>
                    <p>Cool Factor: {lacroixs.cool_factor}</p>
                    <p>Category {lacroixs.category}</p>
                    
                  </p>
                </div>

                )
              }
              </div>
             </section>
            </main>
        </>
      
    )
  }
}