import React, { Component } from 'react'
import ListPage from './ListPage.js';
import {
    BrowserRouter as Router, 
    Route, 
} from 'react-router-dom';

export default class App extends Component {
    render() {
        
        return (
            <div>
                
                   <Router>
                        
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                    </Router>
            </div>
        )
    }
}