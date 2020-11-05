import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
               <h2><Link to="/">Home Page</Link>
                <Link to="/lacroixs">List Page</Link>
                <Link to="/categories">Create Page</Link></h2>
            </div>
        )
    }
}
