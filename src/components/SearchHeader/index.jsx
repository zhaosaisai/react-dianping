import React from 'react'
import { hashHistory } from 'react-router'
import SearchInput from 'components/SearchInput'
import './style.scss'

export default class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    onKeyDown(e) {
        if(e.keyCode == 13) {
            hashHistory.push(`/search/all/${e.target.value}`)
        }
    }

    render() {
        return (
            <div className="search-header clear-fix">
                <span className="back-icon float-left" onClick={() => {
                    window.history.back()
                }}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput 
                        value={this.props.keyword} 
                        onKeyDown={this.onKeyDown.bind(this)}
                    />
                </div>
            </div>
        )
    }
}