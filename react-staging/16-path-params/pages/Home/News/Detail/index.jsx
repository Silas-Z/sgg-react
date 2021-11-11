import React, { Component } from 'react'

const DATA = [
    { id: '01', content: '不要在你家里放一件你不知其用，或你认为不美的东西' },
    { id: '02', content: '记忆点源于与众不同，专业感源于整齐划一' },
    { id: '03', content: '在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试' }
]

export default class Detail extends Component {

    render() {
        console.log(this.props.match.params);
        const { id, title } = this.props.match.params
        const resultData = DATA.find((item) => {
            return item.id === id
        })
        return (
            <ul>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>content: {resultData.content}</li>
            </ul>
        )
    }
}
