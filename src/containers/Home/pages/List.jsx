import React from 'react'
import axios from 'axios'
import HomeList from 'components/List'
import LoadMore from 'components/LoadMore'

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            result: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            loadType: 'scroll' // scroll or click
        }
    }

    async getList(city, page) {
        try{
            let result = await axios.get(`/api/list/${city}/${page}`)
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
        this.getList(this.props.cityName, this.state.page)
    }

    componentDidMount() {
        this.getList(this.props.cityName, this.state.page)
    }

    render() {
        return (
            <div>
                {
                    this.state.result.length ? 
                    <HomeList result={this.state.result} /> :
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