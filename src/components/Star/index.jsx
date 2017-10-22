import React from 'react'
import './style.scss'

export default class Star extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        let star = (this.props.star || 0) > 5 ? this.props.star % 5 : this.props.star

        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = star >= item ? ' light' : ''
                    return <i key={index} className={'icon-star' + lightClass}></i>
                })}
            </div>
        )
    }
}
