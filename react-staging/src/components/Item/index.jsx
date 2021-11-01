import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    state = {
        mouseState: false
    }

    handleMouse = (mouseState) => {
        return (e) => {
            this.setState({
                mouseState: mouseState
            })
            //console.log('return log', e.target);

        }

    }

    handleCheck = (id) => {

        return (event) => {
            console.log('handleCheck log target', event.target.checked);
            this.props.changeTask(id, event.target.checked)

        }
    }

    handleDelete = (id) => {
        this.props.deleteTask(id)
    }

    render() {
        const { id, name, done } = this.props.item;
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: this.state.mouseState ? '#eee' : "#fff" }}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.mouseState ? 'block' : "none" }} onClick={() => { this.handleDelete(id) }}>删除</button>
            </li>

        )
    }


}
