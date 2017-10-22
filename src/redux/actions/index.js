import * as actionTypes from '../constants'

// for user
export function userInfoUpdate (data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}

// for store
export function addStore(data) {
    return {
        type: actionTypes.STORE_ADD,
        data
    }
}

export function updateStore(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}

export function rmStore(data) {
    return {
        type: actionTypes.STORE_RM,
        data
    }
}