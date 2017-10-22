import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import BuyAndStore from 'components/BuyAndStore'
import * as actionTypes from '__redux/actions'

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        store: state.store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeActions: bindActionCreators(actionTypes, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Buy extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            hasStored: false
        }
    }

    onBuy() {
        // event for buy
        if(!this.hasLogined()) return

        // for buy

        // goto user page
        hashHistory.push('/user')
    }

    onStore() {
        // event for store
        if(!this.hasLogined()) return
        const { id, storeActions } = this.props
        if(this.state.hasStored) {
            storeActions.rmStore({
                id
            })
        } else{
            storeActions.addStore({
                id
            })
        }

        this.setState(prevState => {
            return {
                hasStored: !prevState.hasStored
            }
        })
    }

    hasLogined() {
        // check for login
        const { id, userInfo } = this.props
        if(!userInfo.username) {
            hashHistory.push(`/login/detail/${id}`)
            return false
        }
        return true
    }

    hasStored() {
        const { id, store } = this.props
        store.some(item => {
            if(item.id === id) {
                this.setState({
                    hasStored: true
                })
                return true
            }
        })
    }

    componentDidMount() {
        this.hasStored()
    }

    render() {
        return (
            <div>
                <BuyAndStore 
                    hasStored={this.props.hasStored}
                    onBuy={this.onBuy.bind(this)}
                    onStore={this.onStore.bind(this)}
                />
            </div>
        )
    }
}