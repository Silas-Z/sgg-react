import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css';

export default class Header extends Component {

    static propTypes = {
        addTask: PropTypes.func.isRequired
    }
    handleAddTask = (event) => {
        // const {keyCode,}
        if(event.keyCode !== 13)return;
        if(event.target.value === "") {
            alert('You must type in something')
            return;
        }
        const taskObj = {id:nanoid(), name:event.target.value, done: false}
        console.log('headerInputValue=',event.target.value,'headerKeyCode',event.keyCode,'taskObj',taskObj);
        this.props.addTask(taskObj);
        event.target.value = "";

    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleAddTask}/>
            </div>
        )
    }
}
