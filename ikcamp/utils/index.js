import config from './config'
// *代表引入所有

import * as Mock from './mock'
 
const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        "Content-Type": "application/json"
    },
    method: "GET",
    dataType: "json"
}

let util = {
    isDev: config.isDev,
    log(){
        this.isDev && console.log(...arguments)
    },
    alert(title = "提示",content = config.defaultAlertMessage) {
        if('object' === typeof content) {
            content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage
        }
        wx:showModal({
            title:title,
            content: content
        })
    },
    getStorageData(key, cb) {
        let self = this;
        wx:getStorage({
            key: key,
            success(res) {
                cb && cb(res.data)
            },
            fail(err){
                let msg = err.errMsg || '';
                if(/getStorage:fail/.test(msg)) {
                    self.getStorageData(key)
                }
            }
        })
    },
    setStorageData(key, value = '', cb) {
        wx.getStorage({
            key: key,
            data: value,
            success() {
                cb && cb();
            }
        })
    }
}