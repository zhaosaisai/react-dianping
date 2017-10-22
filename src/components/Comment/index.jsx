import React from 'react'
import { Link } from 'react-router'
import Star from 'components/Star'
import './style.scss'

const Item = (props) => {
    const { item } = props
    return (
        <div className="comment-item">
            <h3>
                <i className="icon-user"></i>
                &nbsp;
                {item.username}
            </h3>
            <Star star={item.star}/>
            <p>{item.comment}</p>
        </div>
    )
}

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const result = this.props.result
        return (
            <div className="comment-list list-item">
                {
                    result.map((item, index) => <Item key={index} item={item}/>)
                }
            </div>
        )
    }
}