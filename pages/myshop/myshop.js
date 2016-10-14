//logs.js
Page({
  data: {
    test: 'test template',
    userinfo: {
      username: '',
      password: ''
    },
    signinHide: false
  },
  onLoad: function () {
    
  },
  onShow: function(){
    var userInfo = wx.getStorageSync(userInfo);
    if(!userInfo){
      this.setData({
        signinHide: true
      })
    }
  },
  actionConfirm: function(){
    this.setData({
      signinHide: true
    })
  },
   actionCancle: function(){
    this.setData({
      signinHide: true
    })
  }
})
