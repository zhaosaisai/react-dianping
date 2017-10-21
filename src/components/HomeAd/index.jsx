import React from 'react'
import './style.scss'

export default class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div className="home-ad list-item">
                <h2 className="title">超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.result.map((item, index) => {
                        return (
                            <div key={index} className="ad-item float-left">
                                <a href={item.link} target="_blank">
                                    <img src={require(`./images/${item.name}.png`)} alt={item.title}/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}