import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Detail from './Detail'

const newsList = [
    { id: "01", title: "News title 01" },
    { id: "02", title: "News title 02" },
    { id: "03", title: "News title 03" }
]

export default class News extends Component {
    render() {
        return (
            <div>
                <ul>
                    {newsList.map((item) => {
                        return (<li key={item.id} ><Link to={`/home/news/detail/${item.id}/${item.title}`}>{item.title}</Link></li>)

                    })}


                </ul>
                <Route path="/home/news/detail/:id/:title" component={Detail}></Route>
            </div>
        )
    }
}
