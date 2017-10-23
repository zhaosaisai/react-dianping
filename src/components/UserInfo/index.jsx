import React from 'react'
import './style.scss'

export default class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    <span>{this.props.cityName}</span>
                </p>
            </div>
        )
    }
}