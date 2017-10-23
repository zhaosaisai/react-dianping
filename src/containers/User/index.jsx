import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
// import actions
import * as actions from '__redux/actions'

import UserHeader from 'components/CityHeader'
import UserInfo from 'components/UserInfo'
import Order from './pages/Order'

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    dispatchActions: bindActionCreators(actions, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export default class User extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        console.log(this.props)
        if(!this.props.userInfo.username) {
            hashHistory.push('/login')
        }
    }

    render() {
        return (
            <div>
                <UserHeader title="用户中心" router="/"/>
                <UserInfo {...this.props.userInfo}/>
                <Order />
            </div>
        )
    }
}