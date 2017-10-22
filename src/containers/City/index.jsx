import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory} from 'react-router'
import * as actions from '__redux/actions'
import LocalStorage from 'util/localStorage'
import { CITY_NAME } from 'config/localStorageKeys'

import CityHeader from 'components/CityHeader'
import CurrentCity from 'components/CurrentCity'
import CityList from 'components/CityList'

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        dispatchActions: bindActionCreators(actions, dispatch)
    }
}

@connect(mapStateToProps, mapPropsToDispatch)
export default class City extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <CityHeader title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList cityChange={(city) => {
                    if(!city) {
                        return
                    }
                    // update city name in redux
                    this.props.dispatchActions.userInfoUpdate({
                        cityName: city
                    })
                    // update city name in localstorage
                    LocalStorage.setItem(CITY_NAME, city)
                    // go to home page
                    hashHistory.push('/')
                }}/>
            </div>
        )
    }
}