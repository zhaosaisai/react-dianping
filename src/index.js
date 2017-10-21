import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory} from 'react-router'
import { getRoute } from 'router/routerConfig'
import store from '__redux/store'

// render the router and page
render(
    <Provider store={store()}>
        {getRoute(hashHistory)}
    </Provider>,
    document.getElementById('app')
)