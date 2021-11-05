import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Item from '../Item'

import './index.css';
// test git push
export default class List extends Component {
    static propTypes = {
        todo: PropTypes.array.isRequired,
        changeTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired

    }
    render() {
        const { todo, changeTask, deleteTask } = this.props
        //console.log("log todo = ",todo);
        return (
            <ul className="todo-main">
                {
                    todo.map((item) => {
                        return (
                            <Item key={item.id} item={item} changeTask={changeTask} deleteTask={deleteTask}/>
                        )

                    })
                }
            </ul>
        )
    }
}


