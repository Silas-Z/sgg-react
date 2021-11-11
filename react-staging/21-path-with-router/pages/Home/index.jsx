import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Message from './Message'
import News from './News'

import CustomNavLink from '../../components/ CustomNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <CustomNavLink to="/home/news" className="list-group-item" >News</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/home/message" className="list-group-item" >Message</CustomNavLink>

            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
              <Redirect to="home/message" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
