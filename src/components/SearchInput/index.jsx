import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style.scss'

export default class SearchInput extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        className: PropTypes.string,
        onChange: PropTypes.func,
        onKeyDown: PropTypes.func
    }

    static defaultProps = {
        type: 'text'
    }

    constructor(props, context) {
        super(props, context)
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }

    onChange(e) {
        this.props.onChange && this.props.onChange(e)
        this.setState({
            value: e.target.value.trim()
        })
    }

    onKeyDown(e) {
        this.props.onKeyDown && this.props.onKeyDown(e)
    }

    render() {
        const { placeholder, className, style, type } = this.props
        return (
           <input 
                className={cx("search-input", className)}
                style={style}
                type={type}
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)}
                placeholder={placeholder}
            />
        )
    }
}