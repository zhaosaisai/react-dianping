import React from 'react'
import './style.scss'

export default class CityHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className="common-header">
                <span className="back-icon" onClick={() => {
                    window.history.back()
                }}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}