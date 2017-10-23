import React from 'react'
import OrderList from 'components/Order'

import orders from './order'

export default class Order extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <OrderList orders={orders}/>
            </div>
        )
    }
}