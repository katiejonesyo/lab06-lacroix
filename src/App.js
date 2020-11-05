import React, { Component } from 'react'
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
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
                            path="/lacroixs" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                         <Route 
                            path="/categories" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                    </Router>
            </div>
        )
    }
}