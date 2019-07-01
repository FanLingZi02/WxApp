// pages/welcome/welcome.js
Page({
  clickLogo:function(){
    // wx.reLaunch()先关闭了内存中所有保留的页面，再跳转到目标页面。
    wx.reLaunch({
      url: '../index/index'
    });
  },

  // 转发分享
  onShareAppMessage: function () {
    return {
      title: 'e 生活',
      desc: '还没进去就想分享？我就喜欢你这样的老铁', // 描述
      success: function (res) {
        // 显示消息提示框
        wx.showToast({
          title: "分享成功",
          duration: 1000,
          icon: "success" 
        })
      }
    }
  }
})