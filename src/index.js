import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory} from 'react-router'
import { getRoute } from 'router/routerConfig'

// render the router and page
render(
    getRoute(hashHistory),
    document.getElementById('app')
)