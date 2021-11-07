import React, { Component } from 'react'
import PubSub from 'pubsub-js'


import './list.css'


export default class List extends Component {

    state = {
        userData: [
            {
                login: "yyx990803",
                html_url: "https://github.com/yyx990803",
                avatar_url:
                    "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
                id: 1,
            },
            {
                login: "ruanyf",
                html_url: "https://github.com/ruanyf",
                avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
                id: 2,
            },
            {
                login: "yyx9908032",
                html_url: "https://github.com/yyx990803",
                avatar_url:
                    "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
                id: 3,
            },
            {
                login: "ruanyf2",
                html_url: "https://github.com/ruanyf",
                avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
                id: 4,
            },
            {
                login: "yyx9908033",
                html_url: "https://github.com/yyx990803",
                avatar_url:
                    "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
                id: 5,
            },
            {
                login: "ruanyf3",
                html_url: "https://github.com/ruanyf",
                avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
                id: 6,
            }
        ],
        isFirst: true,
        isLoading: false,
        hadError: ''
    }


    componentDidMount() {

        var mySubscriber = (msg, data) => {
            console.log('searched-data', data);
            this.setState(data)
        };

        PubSub.subscribe('Searched', mySubscriber);

    }
    render() {
        const { userData, isFirst, isLoading, hadError } = this.state
        return (
            isFirst ? <h1>Welcome, you can search github users</h1> :
                isLoading ? <p>Loading...</p> :
                    hadError ? <p>had some problem! you can try it later {hadError}</p> :
                        <div className="row" >
                            {userData.map((item) => {
                                return (<div className="card" key={item.id}>
                                    <a href={item.html_url} rel="noreferrer" target="_blank">
                                        <img alt="avatar" src={item.avatar_url} style={{ width: "100px" }} />
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>)})
                            }
                        </div>
        )
    }
}
