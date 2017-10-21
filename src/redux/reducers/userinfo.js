import * as actionTypes from '../constants'

const initUserState = {}

export default function (state = initUserState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}