Page({
  data: {
    selsectState: [0, 0, 0, 0, 0],
    selectIndex: 0
  },

  onLoad: function (options) {

  },

  //点击词典图标
  clickDict: function () {
    this.setData({
      selsectState: [1, 0, 0, 0, 0], // 地图定位
      selectIndex: 1 // 或取或指定
    }); 
    wx.showToast({
      title: "还没空做啊🤣",
      duration: 3000,
      icon: "success"
    })
  },
  //点击快递图标
  clickExpre: function () {
    this.setData({
      selsectState: [0, 1, 0, 0, 0],
      selectIndex: 2
    });
    wx.showToast({
      title: "还没空做啊🤣",
      duration: 3000,
      icon: "success"
    })
  },
  //点击更多图标
  clickMore: function () {
    this.setData({
      selsectState: [0, 0, 1, 0, 0],
      selectIndex: 3
    });
    wx.showActionSheet({
      itemList: [
        "给你个小彩蛋~"
      ],
      itemColor: "#405f80",
      success: function (res) {
        wx.navigateTo({
          url: '../logs/logs'
        });
      }
    })
  },

})