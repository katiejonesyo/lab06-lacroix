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
    await this.fetchCategories();

  };

fetchCategories = async () => {
  const response = await fetch.get(`https://cheese-man.herokuapp.com/categories`);
  
  await sleep(2000)
  this.setState({ data: response.body});
}

  render() {
    console.log(this.state.data)
    return (
      <>
      <Header/>
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

//   render() {
//     return (
//       <>
//       <Header/>
//           <main>
      
//             <div>
//                 <form id='add-form' className="column" onSubmit={this.handleSubmit}>
//                       <label>id: <input type="test" id="id"  name="id" defaultValue="" onChange={this.handleChange}/></label>
//                       <label>Name: <input type="test" id="name" name="name" defaultValue="" onChange={this.handleChange}/></label>
//                       <label>Category: <input type="test" id="id" name="category" defaultValue="" onChange={this.handleChange}/></label>
//                       <input type="submit" value="submit"/>
//                 </form>
//             </div>  
//           </main>
//         </>
      
//     )
//   }
// }