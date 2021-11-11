import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from "./components/Header";
import Home from './pages/Home'
import About from './pages/About'
import CustomNavLink from "./components/ CustomNavLink";

export default class App extends Component {


    render() {
        return (
            <div>

                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <CustomNavLink to="/home" className="list-group-item">Home</CustomNavLink>
                            <CustomNavLink to="/about" className="list-group-item">About</CustomNavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/about" component={About} />
                                    <Redirect to="/home" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
