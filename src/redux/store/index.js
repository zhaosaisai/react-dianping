/**
 * create store for redux
 */
import { createStore } from 'redux'
import reducers from '../reducers'

const initStore = (initState) => createStore(
    reducers,
    initState,
    window.devToolsExtension && window.devToolsExtension()
)

export default initStore