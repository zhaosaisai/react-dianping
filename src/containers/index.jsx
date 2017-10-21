import React from 'react'
import { render } from 'react-router'
import LocalStorage from 'util/localStorage'
import { CITY_NAME } from 'config/localStorageKeys'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import actions
import * as actions from '__redux/actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    dispatchActions: bindActionCreators(actions, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        let cityName = LocalStorage.getItem(CITY_NAME) || '北京'
        this.props.dispatchActions.userInfoUpdate({
            cityName
        })
        // init done
        this.setState({
            initDone: true
        })
    }

    render() {
        const { initDone } = this.state
        return (
            <div>
               {
                   initDone ? 
                   this.props.children :
                   <h3>Loading....</h3>
               }
            </div>
        )
    }
}