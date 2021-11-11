import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class CustomNavLink extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home" className="list-group-item" {...this.props}/>
            </div>
        )
    }
}
