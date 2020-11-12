import React, { Component } from 'react'
import Header from './Header.js';
import {getAllLacroixs, updateLacroix, deleteLacroix, getAllCategories} from './Utils.js';

const userFromLocalStorage = { userId: 1}


export default class DetailPage extends Component {
        state = {
            categories:[],
            name: '',
            cool_factor: 0,
            categoryId: 1,
            crisp: true

        }

        componentDidMount = async () => {
            const categories = await getAllCategories();
            const lacroix = await getAllLacroixs(this.props.match.params.id);
            const lacroixNameAsString = lacroix.category;

            const matchCategory = categories.find((category) => {
                return category.name === lacroixNameAsString
            })

            this.setState({
                categories: categories,
                name: lacroix.name,
                categoryId: matchCategory.id,
                coolFactor: lacroix.cool_factor,
                crisp: lacroix.crisp
            })
        }

handleSubmit = async (e) => {
    e.preventDefault();

    await updateLacroix(
        this.props.match.params.id,
        {
    
            name: this.state.name,
            cool_factor: this.state.coolFactor,
            categoryId: 1,
            owner_id: userFromLocalStorage.userId,
            crisp: this.state.crisp
        })
        this.props.history.push('/lacroixs');
}

handleChange = (e) => {
    this.setState({ categoryId: e.target.value });
}

handleDelete = async (e) => {
    await deleteLacroix(this.props.match.params.id);
    this.props.history.push('/lacroixs');
}


    render() {
        return (
            <main>
                <Header/>
                <center><div>
                <h2 className="form-header">Update a Lacroix</h2>
                    <form onSubmit={this.handleSubmit} className="the-form">
                        <label>
                            Lacroix Name
                            <input value={this.state.lacroixName} onChange={e => this.setState({ lacroixName: e.target.value})} type="text" />
                        </label>
                        <label>
                            Cool Factor:
                            <input value={this.state.cool_factor} onChange={e => this.setState({ cool_factor: e.target.value})} type="number" />
                        </label>
                        <br/>
                        <label>
                            Is it crisp?
                            <input 
                            checked={this.state.category} 
                            onChange={e => this.setState({category: e.target.checked})} type="checkbox" name="booger" />
                        </label>
                        <br/>
                        <label>
                            Category:
                                         <select onChange={this.handleChange}>
                            {
                                this.state.categories.map(category => <option
                                selected={this.state.categoryId === category.id}
                                key={category.id}
                                value={category.id}
                                >
                                    {category.name}
                                </option>)
                            }
                        </select>
                            <br/>
                        </label>
                        <p>
                        <button>Update</button>
                        <button onClick={this.handleDelete} className="delete-button">Delete Drink</button>
                        </p>
                        
                     
                        
                    </form>
            </div></center>
            </main>
        )
    }
}
