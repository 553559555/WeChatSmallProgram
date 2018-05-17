var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    icon:null,
    listData: [
      { "title": "我的资产", "icon": "../../images/UserCenter.png" }, 
      { "title": "我的卡卷", "icon": "../../images/UserCenter.png" }, 
      { "title": "我的订单", "icon": "../../images/UserCenter.png" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: app.globalData.userName,
      icon: app.globalData.userIcon
    })
  },

})