import React, { Component } from 'react'
import axios from 'axios'

//发送请求需要启动本地响应服务器，响应服务器再请求 github 内容返回

export default class Header extends Component {


    search = () => {
        this.props.setAppState({ isFirst: false ,isLoading:true });
        const { keyWordElement: { value: keyWord } } = this;
        console.log(keyWord);
        axios.get(`/search/users3?q=${keyWord}`)
            .then((response) => {
                // 处理成功情况
                this.props.setAppState({ userData: response.data.items, isLoading: false })

            }, (error) => {
                // 处理错误情况
                console.log('error:', error);
                this.props.setAppState({ isLoading: false, hadError: error.message });
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
