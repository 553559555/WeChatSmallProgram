Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageData:[
      "../../images/banner.jpeg",
      "../../images/banner1.jpeg"
    ],
    categoryData:[
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
    ],
    siftShipData:[
      1,2,3,4
    ],
    shopListData: [
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
      { "title": "优惠券", "image": "../../images/FreeGetVolume.png" },
    ],
    isHideLoadMore:true
  },

  searchViewClick: function() {
    console.log("跳转搜索页面")
  },

  itemClick: function(e) {
    console.log(e.currentTarget.id)
  },

  moreSiftShopClick: function() {
    console.log("获取更多推荐商家")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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
    var self = this
    console.log("下拉动作")
    wx.showNavigationBarLoading()
    setTimeout(function () {
      self.setData({ shopListData: [1, 2, 3, 4] })
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉动作" + this.data.shopListData)
    this.setData({ isHideLoadMore: false })
    var self = this
    self.data.shopListData.push(1,2,3,4)
    setTimeout(function () {
      self.setData({ isHideLoadMore: true, shopListData: self.data.shopListData})
    }, 1500);
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})