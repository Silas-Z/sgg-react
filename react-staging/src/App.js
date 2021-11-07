import React, { Component } from 'react'

import Header from './components/header/header'
import List from './components/list/list'




export default class App extends Component {



  render() {
    return (
      <div className="container">
        <Header />
        <List />
      </div>
    )
  }
}
