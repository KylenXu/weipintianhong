//logs.js
Page({
  data: {
    test: 'test template',
    userinfo: {
      username: '',
      password: ''
    },
    swiper: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 300,
    },
    scroll: {
      "scroll-y": true,
      "upper-threshold": 20,
      "lower-threshold": 20
    },
    signinHide: false,
    myShopbg: 'http://assets.honglingjin.cn/assets/img/2016/5/9/Fo6SFGTLDmBGS90mThYyudlB.jpg',
    userImg: 'http://assets.honglingjin.cn/assets/img/2016/1/27/sJnrIFTsC0CxIto7AbV5XNpH.jpg',
    homeinit: {}
  },
  onLoad: function () {
      var _this = this;
      wx.request({
        // url: 'http://localhost/mock/homeinit.json',
        url: 'http://kylen8036.applinzi.com/index.php',
        header:{
          "Content-Type":"application/json"
        },
        success: function(res) {
          console.log(res.data[0]);
          _this.setData({
            homeinit: res.data[0]
          });
        },
        complete: function(res){
        }
      });
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
  },
  loadingChange: function(){
    this.setData({
      loadingHidden: true
    })
  },
  actionToupper: function(e){
    console.log(1);
    // this.setData({
    //   loadingHidden: false
    // })
  },
  actionTolower: function(){
    console.log(1);
  }
})
