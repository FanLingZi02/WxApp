// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
    { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curIndex: 0,
    toView: 'guowei',
    isScroll: false
  },

  switchTap(e) {
    this.setData({
      curIndex: e.target.dataset.index,
      toView: e.target.dataset.id
    })
  },

  scrollTap(e) {
    // console.log(e)
    this.setData({
      curIndex: Math.ceil(e.detail.scrollTop / 378) < 5 ? Math.floor(e.detail.scrollTop / 378) : 5
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let self = this
    wx.request({
      url: "http://www.gdfengshuo.com/api/wx/cate-detail.txt",
      success(res) {
        self.setData({
          detail: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})