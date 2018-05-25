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

  /**
   * 搜索按钮点击事件
   */
  searchViewClick: function() {
    console.log("跳转搜索页面")
    wx.navigateTo({
      url: '../SearchPage/SearchPage?title:123123',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 分类按钮点击事件
   */
  itemClick: function(e) {
    console.log(e.currentTarget.id)
  },

  /**
   * 精选商家点击事件
   */
  moreSiftShopClick: function() {
    console.log("获取更多推荐商家")
  },

  /**
   * 精选商家item事件
   */
  moreShopItemClick: function(e) {
    console.log(e.currentTarget.id)
  },

  /**
   * 好卷推荐点击事件
   */
  volumeCommendClick: function() {
    console.log("好卷推荐")
  },

  /**
   * 好卷推荐item点击事件
   */
  volumeCommendItemClick: function(e) {
    console.log(e.currentTarget.id)
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

})