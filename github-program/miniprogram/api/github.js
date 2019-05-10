
const trendings = () => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'https://github-trending-api.now.sh/repositories',
            success: (res) => {
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);//reject在请求之中 没有做到 catch
            }
        })
    })
}

module.exports = {
    trendings,
}