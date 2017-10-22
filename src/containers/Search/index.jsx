import React from 'react'
import { connect } from 'react-redux'
import SearchHeader from 'components/SearchHeader'
import SearchList from './pages/List'

const mapStateToProps = (state)  => ({
    userInfo: state.userInfo
})

@connect(mapStateToProps, null)
export default class App extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { params } = this.props
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList cityName={this.props.userInfo.cityName} keyword={params.keyword} type={params.type}/>
            </div>
        )
    }
}