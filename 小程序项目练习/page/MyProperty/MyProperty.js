Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "title": "我的银行卡", "icon": "../../images/UserCenter.png" },
      { "title": "收益记录", "icon": "../../images/UserCenter.png" },
      { "title": "提现记录", "icon": "../../images/UserCenter.png" },
      { "title": "设置提现密码", "icon": "../../images/UserCenter.png" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  itemClick: function (e) {
    console.log(e.currentTarget.id)
    switch(e.currentTarget.id) {
      case '0':
        wx.navigateTo({
          url: '',
        })
        break;
      case '1':
        wx.navigateTo({
          url: '',
        })
        break;
      case '2':
        wx.navigateTo({
          url: '',
        })
        break;
      case '3':
        wx.navigateTo({
          url: '',
        })
        break;
    }
  }

})