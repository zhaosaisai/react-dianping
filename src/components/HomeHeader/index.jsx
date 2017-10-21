import React from 'react'
import { render } from 'react-router'

import './style.scss'

export default class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className="header-container clear-fix">
                <div className="header-left float-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}