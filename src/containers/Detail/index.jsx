import React from 'react'
import DetailHeader from 'components/CityHeader'
import DetailInfo from './pages/Info'
import Comment from './pages/Comment'
import Buy from './pages/Buy'

export default class Detail extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { id } = this.props.params
        return (
            <div>
                <DetailHeader title="商品详情"/>
                <DetailInfo id={id}/>
                <Buy id={id} />
                <Comment id={id} />
            </div>
        )
    }
}