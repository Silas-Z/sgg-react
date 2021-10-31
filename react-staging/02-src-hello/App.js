import React, {Component} from "react";

import Hello from "./components/Hello";
import Hi from "./components/Hi";

export default class App extends Component {
    render(){
        return(
            <div>
                <Hello />
                <Hi />
            </div>
        )
    }
}