import React from 'react'
import axios from 'axios'
import HomeList from 'components/List'

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            result: [],
            hasMore: false
        }
    }

    async getList(city, index) {
        try{
            let result = await axios.get(`/api/list/${city}/${index}`)
            if(result && result['status'] == 200) {
                this.setState({
                    result: result['data']['data'],
                    hasMore: result['data']['hasMore']
                })
            }
        }catch(ex) {
            console.log(ex.message)
        }
    }

    componentDidMount() {
        this.getList(this.props.cityName, 0)
    }

    render() {
        return (
            <div>
                {
                    this.state.result.length ? 
                    <HomeList result={this.state.result} /> :
                    null
                }
            </div>
        )
    }
}