import React from 'react'
import axios from 'axios'

export default class Ad extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            result: []
        }
    }

    async getAdData() {
        try{
            let result = await axios.get('/api/ads')
            this.setState({
                result
            })
        }catch(ex) {
            console.log(ex.message)
        }
    }

    componentDidMount() {
        this.getAdData()
    }

    render() {
        return (
            <div>
                <h1>Ad</h1>
            </div>
        )
    }
}