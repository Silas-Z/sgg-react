import React, { Component } from 'react'
import Item from '../Item'

import './index.css';

export default class List extends Component {
    render() {
        const {todo,changeTask} = this.props
        //console.log("log todo = ",todo);
        return (
            <ul className="todo-main">
                {
                    todo.map((item) => {
                        return(
                            <Item key={item.id} item={item} changeTask={changeTask}/>
                        )
                        
                    })
                }
            </ul>
        )
    }
}
