import React, { Component } from 'react'
import Header from './Header.js';
import {getAllLacroixs, getSingleLacroix, createLacroix, updateLacroix, deleteLacroix, getAllCategories} from './Utils.js';

const theOnlyUser = {
    userId: 1
};

export default class DetailPage extends Component {
        state = {
            categories:[],
            lacroixData:{},
            matchCategory:
            {name: '',
        category_id: 1 },
        lacroixName: '',
        cool_factor: 0,
        crisp: true

        }

        componentDidMount = async () => {
            const categories = await getAllCategories();
            const lacroix = await getAllLacroixs(this.props.match.params.id);

            const matchCategory = categories.find((category) => {
                return category.id === lacroix.category_id
            })

            this.setState({
                lacroixData: lacroix,
                categories: categories,
                matchCategory:matchCategory,
                lacroixName: lacroix.name,
                lacroixCategory:lacroix.category
            })
        }

handleSubmit = async (e) => {
    e.preventDefault();

    await updateLacroix(
        this.props.match.params.id,
        {
            lacroixs_id: this.state.lacroixs.id,
            lacroixs_name: this.state.lacroixsName,
            cool_factor: this.state.coolFactor,
            lacroixs_category: this.state.lacroixsCategory,
            owner_id: this.state.ownerId
        })
        this.props.history.push('/');
}

handleDelete = async (e) => {
    await deleteLacroix(this.props.match.params.id);
    this.props.history.push('/');
}


    render() {
        return (
            <main>
                <Header/>
                <div>
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
                        <label>
                            Is it crisp?
                            <input 
                            checked={this.state.category} 
                            onChange={e => this.setState({category: e.target.checked})} type="checkbox" name="booger" />
                        </label>
                        <button>Update</button>
                        <button onClick={this.handleDelete} className="delete-button">Delete Artist</button>
                        
                    </form>
            </div>
            </main>
        )
    }
}
