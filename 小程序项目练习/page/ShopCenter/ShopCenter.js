Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShopType: true,
    userLoginType: false,
    userLoginStyleArray: [
      { name: "密　码", checked: true }, 
      { name: "验证码", hecked: false}
      ],
    shopLoginStyleArray: [
      { name: "入网机构", checked: true },
      { name: "外部推广机构", hecked: false }
      ]
  },

  loginTypeButtonClick: function (evet) {
    evet.currentTarget.id == '1' ? this.setData({ isShopType: true }) : this.setData({ isShopType: false })
  },

  getCode: function() {
    console.log("获取验证码")
  },

  loginType: function (e) {
    e.detail.value == '验证码' ? this.setData({ userLoginType: true }) : this.setData({ userLoginType: false })
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