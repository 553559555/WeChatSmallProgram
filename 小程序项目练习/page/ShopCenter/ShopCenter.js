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
})