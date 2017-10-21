const isDev = process.env.NODE_ENV == 'production' ? false : true

export default {
    getItem: function (key) {
        let value = null
        try{
            value = localStorage.getItem(key)
        }catch(ex) {
            if (isDev) {
                console.log(`Get localstorage named ${key} errored: ${ex.message}`)
            }
        } finally {
            return value
        }
    },
    setItem: function (key, value) {
        try{
            // ios safari 无痕 报错
            localStorage.setItem(key, value)
        }catch(ex) {
            if(isDev) {
                console.log(`Set localstorage named ${key} value ${value} errored: ${ex.message}`)
            }
        }
    }
}