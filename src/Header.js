import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
               
                <Link className="link" to="/">Home Page</Link>
                
             
                <Link className="link" to="/lacroixs">List Page</Link>
                
                <Link className="link" to="/categories">Create Page</Link>
                
        
            </div>
        )
    }
}
