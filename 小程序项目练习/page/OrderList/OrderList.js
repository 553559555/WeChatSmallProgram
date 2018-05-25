var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleArray:[
      { title: '全部' },
      { title: '已评价' },
      { title: '待评价' }
    ],
    currentSelectorItem:0,
    lineViewLeft: 0
  },

  onLoad: function (options) {
    this.setData({})
  },

  itemClick: function(e) {
    var tempLeft = (app.globalData.screenWidth) / 3 * e.currentTarget.id
    this.setData({ currentSelectorItem: e.currentTarget.id })
    this.setData({ lineViewLeft: tempLeft})
  }

})