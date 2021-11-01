import React, { Component } from 'react'
import './index.css';
export default class Footer extends Component {

    handleCheckAll = (event) => {
        //console.log('event.target.checked',event.target.checked);
        this.props.checkAll(event.target.checked)

    }
    handleCleanDone = () => {
        this.props.cleanDone()
        
    }

    render() {
        const { todo } = this.props;
        const todoTotal = todo.length;
        const doneCount = todo.reduce((pre, cur) => { return pre + (cur.done ? 1 : 0) }, 0)
        // console.log('doneCount', doneCount);
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === todoTotal && todoTotal !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todoTotal}
                </span>
                <button className="btn btn-danger" onClick={this.handleCleanDone}>清除已完成任务</button>
            </div>
        )
    }
}
