import React, { Component } from 'react'
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import HomePage from './HomePage.js';
import DetailPage from './DetailPage.js';
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
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        
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
                         <Route 
                            path="/details" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Router>
            </div>
        )
    }
}