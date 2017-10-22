import React from 'react'
import Star from 'components/Star'

import './style.scss'

export default class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { info } = this.props
        return (
            <div className="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={require('./placeholder.png')}/>
                    </div>
                    <div className="info-content">
                        <h1>{info.title}</h1>
                        <div className="star-container">
                            <Star star={info.star}/>
                            <span className="price">￥{info.price}</span>
                        </div>
                        <p className="sub-title">{info.subTitle}</p>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{__html: info.desc}} className="info-desc"></p>
            </div>
        )
    }
}