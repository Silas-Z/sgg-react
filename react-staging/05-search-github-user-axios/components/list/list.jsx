import React, { Component } from 'react'
import './list.css'
export default class List extends Component {
    render() {
        const { userData, isFirst, isLoading, hadError } = this.props.appState
        //console.log(userData);
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
                    </div>)



                })
                }
            </div>
        )
    }
}
