import React, { Component } from 'react'
import Axios from 'axios'

//发送请求需要启动本地响应服务器，响应服务器再请求 github 内容返回

export default class Header extends Component {
    search = () => {
        const { keyWordElement: { value: keyWord } } = this;
        console.log(keyWord);
        Axios.get(`/search/users2?q=${keyWord}`)
            .then(function (response) {
                // 处理成功情况
                console.log(response);
            })
            .catch(function (error) {
                // 处理错误情况
                console.log(error);
            })
            .then(function () {
                // 总是会执行
            });

    }
    render() {


        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={current => this.keyWordElement = current} type="text" placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
