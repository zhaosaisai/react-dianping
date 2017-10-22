import React from 'react'
import Input from 'components/SearchInput'

import './style.scss'

export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            phone: ''
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <Input 
                        type="telephone"
                        placeholder="输入手机号" 
                        onChange={(e) => {
                            this.setState({
                                phone: e.target.value.trim()
                            })
                        }}
                        value={this.state.phone}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={() => {
                    const phone = this.state.phone
                    if(phone === '') return false;
                    this.props.onLogin(phone)
                }}>登录</button>
            </div>
        )
    }
}