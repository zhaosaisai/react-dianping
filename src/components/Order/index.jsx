import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

class OrderItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            /**
             * 0: none comment
             * 1: commenting
             * 2: commented
             */
            commentState: 2
        }
    }

    componentDidMount() {
        const { commentState } = this.props.order
        this.setState({
            commentState
        })
    }

    onComment() {
        this.setState({
            commentState: 1
        })
    }

    onCommentSubmit() {
        this.setState({
            commentState: 2
        })
    }

    onCommentCancel() {
        this.setState({
            commentState: 0
        })
    }

    render() {
        let { order } = this.props
        let { commentState } = this.state
        return (
            <div className="order-item-container clear-fix">
                <div className="order-item-img float-left">
                    <img src={require(`./images/${order.name}.png`)}/>
                </div>
                <div className="order-item-comment float-right">
                    {
                        commentState === 0 ?
                        <button onClick={this.onComment.bind(this)}>评价</button> :
                        commentState === 1 ?
                        '' :
                        <button className="btn commented">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{order.title}</span>
                    <span>数量：{order.count}</span>
                    <span>价格：￥{order.price}</span>
                </div>
                {
                    commentState === 1 ?
                    <div className="comment-text-container">
                        <textarea className="comment-text"></textarea>
                        <button onClick={this.onCommentSubmit.bind(this)}>提交</button>
                        <button onClick={this.onCommentCancel.bind(this)} className="commented">取消</button>
                    </div> : null
                }
            </div>
        )
    }
}

export default class NotFound extends React.Component {
    static propTypes = {
        orders: PropTypes.array
    }

    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { orders } = this.props
        return (
            <div>
                {
                    orders.map((order, index) => <OrderItem order={order} key={index}/>)
                }
            </div>
        )
    }
}