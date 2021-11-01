import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

export default class App extends Component {
  state = {
    todo: [
      { id: "001", name: "work", done: true },
      { id: "002", name: "eat", done: false },
      { id: "003", name: "sleep", done: true },
      { id: "004", name: "repeat", done: false },
    ],
  };

  addTask = (taskObj) => {
    const { todo } = this.state;
    const newTodo = [taskObj, ...todo];
    this.setState({ todo: newTodo });
  };

  changeTask = (id, done) => {
    const { todo } = this.state;
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      } else {
        return item;
      }
    });

    this.setState({ todo: newTodo });
  };

  deleteTask = (id) => {
    const { todo } = this.state;
    const newTodo = todo.filter((item) => {
      return item.id !== id;
    });
    if (window.confirm("Are you sure?")) {
      this.setState({ todo: newTodo });
    }
  };

  checkAll = (done) => {
    const { todo } = this.state;
    const newTodo = todo.map((item) => ({ ...item, done }));
    this.setState({ todo: newTodo });
  };

  cleanDone = (params) => {
    const { todo } = this.state;
    const newTodo = todo.filter((item) => !item.done);
    this.setState({ todo: newTodo });
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTask={this.addTask} />
          <List
            todo={todo}
            changeTask={this.changeTask}
            deleteTask={this.deleteTask}
          />
          <Footer todo={todo} checkAll={this.checkAll} cleanDone={this.cleanDone}/>
        </div>
      </div>
    );
  }
}
