Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShopType: true,
    userLoginType: false,
    isWithoutShopType: false,
    userLoginStyleArray: [
      { name: "密　码", checked: true }, 
      { name: "验证码", hecked: false}
      ],
    shopLoginStyleArray: [
      { name: "入网机构", checked: true },
      { name: "外部推广机构", hecked: false }
      ]
  },

  /**
   * 门店登录 | 机构登录
   * isShopType: true  门店登录
   * isShopType: false 机构登录
   */
  loginTypeButtonClick: function (evet) {
    evet.currentTarget.id == '1' ? 
    this.setData({ isShopType: true }) : 
    this.setData({ isShopType: false })
    console.log(this.data.isShopType)
  },

  /**
   * 登录类型
   * userLoginType: true  验证码登录
   * userLoginType: false 密码登录
   */
  loginType: function (e) {
    e.detail.value == '验证码' ? 
    this.setData({ userLoginType: true }) : 
    this.setData({ userLoginType: false })
    console.log(this.data.userLoginType)
  },

  /**
   * 机构类型
   * isWithoutShopType: true  外部推广机构
   * isWithoutShopType: false 入网机构
   */
  organizationType: function(e) {
    e.detail.value == '外部推广机构' ? 
    this.setData({ isWithoutShopType: true }) : 
    this.setData({ isWithoutShopType: false })
    console.log(this.data.isWithoutShopType)
  },

  /**
   * 获取验证码
   */
  getCode: function() {
    console.log("获取验证码")
  },

  /**
   * 登录按钮点击事件
   */
  signInClick: function() {
    console.log("登录")
  },

  /**
   * 在线申请点击事件
   */
  signUpClick: function() {
    console.log("在线申请")
  },

  phoneTextInput: function(e) {
    console.log(e.detail.value)
  },

  passwordTextInput: function(e) {
    console.log(e.detail.value)
  }
  
})