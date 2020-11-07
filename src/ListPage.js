import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import { getAllLacroixs } from './Utils.js'
import Render from './Render.js';

export default class App extends Component {
  state = {
    data: []
  }
  componentDidMount = async () => {
    const data = await getAllLacroixs();

    this.setState({data});

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

              : this.state.data.map((lacroixs) => {
                  return (
                    <Render
                    lacroixs-name={lacroixs.lacroixs_name}
                    cool-factor={lacroixs.cool_factor}
                    lacroixs-category={lacroixs.lacroixs_category}
                    lacroixs-crisp={lacroixs.lacroixs_crisp}
                    owner-id={lacroixs.owner_id} />

                    )

                  })
              }
              </div>
             </section>
            </main>
        </>
      
    )
  }
}