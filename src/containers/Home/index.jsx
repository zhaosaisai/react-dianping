import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-router'
import { connect } from 'react-redux'
import Header from 'components/HomeHeader'
import Category from 'components/Category'

const mapStateToProps = (state)  => ({
    userInfo: state.userInfo
})

@connect(mapStateToProps, null)
export default class Home extends React.Component {
    static propTypes = {
        userInfo: PropTypes.object
    }

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <Header cityName={this.props.userInfo.cityName}/>
                <Category />
            </div>
        )
    }
}