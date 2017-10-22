import React from 'react'
import { Link, hashHistory } from 'react-router'
import SearchHeader from 'components/SearchInput'

import './style.scss'

export default class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            keywords: ''
        }
    }

    onChange(e) {
        const value = e.target.value.trim()
        this.setState({
            keywords: value
        })
    }

    onKeyDown(e) {
        if(e.keyCode == 13) {
            hashHistory.push(`/search/all/${e.target.value}`)
        }
    }

    render() {
        return (
            <div className="header-container clear-fix">
                <div className="header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="header-right float-right">
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchHeader 
                            placeholder="请输入关键字"
                            className="search"
                            onKeyDown={this.onKeyDown.bind(this)}
                            />
                    </div>
                </div>
            </div>
        )
    }
}