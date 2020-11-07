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
            const lacroixs = await getAllLacroixs(this.props.match.params.id);

            const matchCategory = categories.find((category) => {
                return category.id === lacroix.category_id
            })

            this.setState({
                lacroixData: lacroix,
                categories: categories,
                matchCategory:matchCategory,
                lacroixName: lacroix.name,
                cool_factor:cool_factor,
                lacroixCategory:lacroix.category
            })
        }



    render() {
        return (
            <main>
                <Header/>
                <div>
                
                </div>
            </main>
        )
    }
}
