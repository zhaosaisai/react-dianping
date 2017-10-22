import React from 'react'
import './style.scss'

const CITY_LIST = [
    '北京',
    '上海',
    '杭州',
    '广州',
    '苏州',
    '深圳',
    '南京',
    '天津',
    '重庆',
    '厦门',
    '西安',
    '武汉'
]

export default class CityList extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    onCityChange(city) {
        this.props.cityChange && this.props.cityChange(city)
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    {
                        CITY_LIST.map((city) => {
                            return (
                                <li key={city}>
                                    <span onClick={this.onCityChange.bind(this, city)}>{city}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}