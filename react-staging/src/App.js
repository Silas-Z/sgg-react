import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {
    GithubOutlined,GlobalOutlined
} from '@ant-design/icons';
import '../node_modules/antd/dist/antd.css'

export default class App extends Component {


    render() {
        return (
            <div>
                App...
                <button>html button</button>
                <Button type="primary">Primary Button</Button>&nbsp;
                <Button type="ghost">Primary Button</Button>&nbsp;
                <Button>Default Button</Button>
                <GithubOutlined />
                <GlobalOutlined />
                <Button type="primary" shape="circle">
                
      Silas
    </Button>
    <DatePicker  />
            </div >
        )
    }
}
