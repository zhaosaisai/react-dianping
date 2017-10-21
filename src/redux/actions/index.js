import * as actionTypes from '../constants'

export function userInfoUpdate (data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}