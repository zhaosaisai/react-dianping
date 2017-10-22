import React from 'react'
import { Link } from 'react-router'
import './style.scss'

const Item = (props) => {
    const { item } = props
    return (
        <div className="list clear-fix">
            <Link to={`/detail/${item.id}`}>
                <div className="item-img-container float-left">
                    <img src={require(`./images/${item.name}.png`)} alt={item.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="float-left">{item.title}</h3>
                        <span className="float-right">{item.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {item.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{item.price}</span>
                        <span className="mumber float-right">已售{item.mumber}</span>
                    </div>
                </div>
            </Link>
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
            <div className="list-container list-item">
                {
                    result.map((item, index) => <Item key={index} item={item}/>)
                }
            </div>
        )
    }
}