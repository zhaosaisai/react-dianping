import React from 'react'
import DetailHeader from 'components/CityHeader'
import DetailInfo from './pages/Info'

export default class Detail extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <DetailHeader title="商品详情"/>
                <DetailInfo id={this.props.params.id}/>
            </div>
        )
    }
}