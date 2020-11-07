import React, { Component } from 'react';
import './App.css';
import fetch from 'superagent';
import Header from './Header.js';
import { createLacroix, getAllCategories } from './Utils';
import request from 'superagent';


const theOnlyUser = {
    userId: 1
}


export default class App extends Component {
  state = {
    data: []
  }
  componentDidMount = async () => {
    const categories = await getAllCategories();

    this.setState({ categories: categories});

  }

handleSubmit = async (e) => {
  e.preventDefault();

  await createLacroix({
    lacroixs_id: this.state.lacroixs.id,
    lacroixs_name: this.state.lacroixsName,
    cool_factor: this.state.coolFactor,
    lacroixs_category: this.state.lacroixsCategory,
    owner_id: this.state.ownerId
  })

  this.props.history.push('/');
}

handleSubmitCategories = async (e) => {
    e.preventDefault();

    const newCategories = {
  name: this.state.categoriesName,
    };

      await request
      .post(`https://cheese-man.herokuapp.com/categories`)
      .send(newCategories);

      this.getAllCategories()
      this.setState({ categoriesName: ''});

}

handleChange = (e) => {
  console.log(e.target.value);
  this.setState({ categoryId: e.target.value});
}

  render() {
    console.log(this.state.data)
    return (
      <>
      <Header/>
          <main>
              <section>
                <h2 className="form-header">Add A Lacroix</h2>
                <form onSubmit={this.handleSubmit} className="the-form">
                  <label>
                    Lacroix name: 
                    <input onChange={e => this.setState({ lacroixsName: e.target.value})} type="text" />
                  </label>
                  <p>
                  <label>
                    Cool Factor: 
                    <input onChange={e => this.setState({ cool_factor: e.target.value})} type="number" />
                  </label>
                  </p>
                  {/* <label>
                    Select Category:
                    <select onChange={this.handleChange}>
                      {
                        this.state.categories.map(category =>
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>)
                      }
                    </select>
                  </label> */}
               <label>
                 Is it Crissssssp?
                  <select>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
                  </label>
                  <button> Submit </button>
                  
                </form>
                <br/>
                <br/>
                <br/>
                    <div>
                      <h2 className="form-header"> Add a Category Name</h2>
                      <form onSubmit={this.handleSubmitCategories} className="the-form">
                       <p> <label>
                          Category Type:
                          <input onChange={e => this.setState({ categoriesName: e.target.value})} type="text" value={this.state.categoriesName} />
                        </label>
                        <button>Submit</button>
                        </p>
                      </form>
                    </div>
                </section>
          </main>
        </>
      
    )
  }
}

