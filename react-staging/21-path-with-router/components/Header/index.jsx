import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                        <button className="btn" onClick={() => {this.props.history.goBack()}}>Back</button> &nbsp;
                         <button className="btn btn-primary" onClick={() => {this.props.history.goForward()}}>Forward</button>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
