import React from 'react'
import axios from 'axios'
import SearchList from 'components/List'
import LoadMore from 'components/LoadMore'

const initState = {
    result: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0,
    loadType: 'scroll' // scroll or click
}

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = initState
    }

    async getList(city,type, keyword, page) {
        try{
            let result = await axios.get(`/api/list/${city}/${type}/${keyword || 'all'}/${page}`)
            if(result && result['status'] == 200) {
                this.setState((prevState) => {
                    return {
                        result: prevState.result.concat(result['data']['data']),
                        hasMore: result['data']['hasMore'],
                        page: prevState.page + 1,
                        isLoadingMore: false
                    }
                })
            }
        }catch(ex) {
            console.log(ex.message)
        }
    }

    // get more list data
    async getMoreList() {
        this.setState({
            isLoadingMore: true
        })
        this.getList(this.props.cityName, this.props.type, this.props.keyword, this.state.page)
    }

    componentDidMount() {
        this.getList(this.props.cityName, this.props.type, this.props.keyword, this.state.page)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.keyword === this.props.keyword && prevProps.type === this.props.type) {
            return false;
        }

        this.setState(initState)

        // load first data
        this.getList(this.props.cityName, this.props.type, this.props.keyword, this.state.page)
    }

    render() {
        return (
            <div>
                {
                    this.state.result.length ? 
                    <SearchList result={this.state.result} /> :
                    null
                }
                {
                    this.state.hasMore ? 
                    <LoadMore 
                        isLoadingMore={this.state.isLoadingMore}
                        loadingMoreFn={this.getMoreList.bind(this)}
                        loadType={this.state.loadType}
                    /> :
                    ''
                }
            </div>
        )
    }
}