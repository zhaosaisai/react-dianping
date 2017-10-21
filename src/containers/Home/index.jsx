import React from 'react'
import { render } from 'react-router'
import Header from 'components/HomeHeader'

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}