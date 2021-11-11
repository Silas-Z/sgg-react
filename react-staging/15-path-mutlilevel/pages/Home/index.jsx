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
          <ul class="nav nav-tabs">
            <li>
              {/* <a class="list-group-item" href="./home-news.html">News</a> */}
              <CustomNavLink to="/home/news" className="list-group-item" >News</CustomNavLink>
            </li>
            <li>
              {/* <a class="list-group-item" href="./home-message.html">Message</a> */}
              <CustomNavLink to="/home/message" className="list-group-item" >Message</CustomNavLink>

            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={Message} />
              <Route path="/home/message" component={News} />
              <Redirect to="home/message" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
