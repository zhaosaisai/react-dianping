import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import { hashHistory } from 'react-router'
import LoginHeader from 'components/CityHeader'
import LoginPage from 'components/Login'
import * as actions from '__redux/actions'

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchActions: bindActionCreators(actions, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            checking: true
        }
    }

    doCheck() {
        const { username } = this.props.userInfo
        if (username) {
            // go to user page
            hashHistory.push('/user')
        } else {
            this.setState({
                checking: false
            })
        }
    }

    handleLogin(username) {
        const { userInfoUpdate } = this.props.dispatchActions
        userInfoUpdate({
            username
        })

        // push router
        if(this.props.params.toWhere) {
            hashHistory.push(this.props.params.toWhere)
        }else{
            hashHistory.push('/user')
        }
    }

    componentDidMount() {
        this.doCheck()
    }

    render() {
        return (
            <div>
                <LoginHeader title="登录" />
                {
                    this.state.checking ?
                    <div>checking</div> :
                    <LoginPage onLogin={this.handleLogin.bind(this)}/>
                }
            </div>
        )
    }
}