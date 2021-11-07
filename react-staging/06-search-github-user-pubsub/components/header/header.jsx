import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'


//发送请求需要启动本地响应服务器，响应服务器再请求 github 内容返回

export default class Header extends Component {


    search = () => {
        PubSub.publish('Searched', { isFirst: false ,isLoading:true });

        //this.props.setAppState({ isFirst: false ,isLoading:true });
        const { keyWordElement: { value: keyWord } } = this;
        console.log(keyWord);
        axios.get(`/search/users?q=${keyWord}`)
            .then((response) => {
                // 处理成功情况
                PubSub.publish('Searched', { userData: response.data.items, isLoading: false });
                console.log('response',{ userData: response.data.items, isLoading: false });
                //this.props.setAppState({ userData: response.data.items, isLoading: false })

            }, (error) => {
                // 处理错误情况
                console.log('error:', error);
                PubSub.publish('Searched', { isLoading: false, hadError: error.message });
                //this.props.setAppState({ isLoading: false, hadError: error.message });
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
