import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export default class BuyAndStore extends React.Component {
    static propTypes = {
        onStore: PropTypes.func.isRequired,
        onBuy: PropTypes.func.isRequired
    }

    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { hasStored, onStore, onBuy } = this.props
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                {
                    hasStored
                    ? <button className="selected" onClick={() => {
                        onStore()
                    }}>已收藏</button>
                    : <button onClick={() => {
                        onStore()
                    }}>收藏</button>
                }
                </div>
                <div className="item-container float-right">
                    <button onClick={() => {
                        onBuy()
                    }}>购买</button>
                </div>
            </div>
        )
    }
}