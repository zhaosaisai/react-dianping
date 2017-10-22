import React from 'react'
import axios from 'axios'
import Comment from 'components/Comment'
import LoadMore from 'components/LoadMore'

export default class CommentData extends React.Component {
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

    async getList(page) {
        try{
            let result = await axios.get(`/api/detail/comment/${this.props.id}/${page}`)
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
        this.getList(this.state.page)
    }

    componentDidMount() {
        this.getList(this.state.page)
    }

    render() {
        return (
            <div>
                {
                    this.state.result.length ? 
                    <Comment result={this.state.result} /> :
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