import React, { Component } from 'react'
import { NavLink, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

export default class App extends Component {


    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                <NavLink to="/home" className="list-group-item">Home</NavLink>
                                <NavLink to="/about" className="list-group-item">About</NavLink>
                                {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    
                                        <Route path="/home" component={Home} />
                                        <Route path="/about" component={About} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
