import React from 'react'
import axios from 'axios'
import DetailInfo from 'components/DetailInfo'

export default class Info extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            info: {}
        }
    }

    componentDidMount() {
        this.getInfo()
    }

    async getInfo() {
        try{
            let result = await axios.get(`/api/detail/${this.props.id}`)
            if(result && result['status'] == 200) {
                this.setState((prevState) => {
                    return {
                        info: result['data']
                    }
                })
            }
        }catch(ex) {
            console.log(ex.message)
        }
    }

    render() {
        return (
            <div>
                <DetailInfo info={this.state.info}/>
            </div>
        )
    }
}