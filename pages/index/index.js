// index.js
Page({
  data: {
    loadingHidden: true,
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
  	bannerUrls: [
  		'/images/banner01.jpg',
  		'/images/banner02.jpg',
  		'/images/banner03.jpg',
  		'/images/banner01.jpg',
  		'/images/banner02.jpg'
  	],
    typeNav: [
      {"typeImgUrl": "/images/test.png", typeTil: "活色生鲜"},
      {"typeImgUrl": "/images/test.png", typeTil: "健康养生"},
      {"typeImgUrl": "/images/test.png", typeTil: "海外购"},
      {"typeImgUrl": "/images/test.png", typeTil: "家居生活"},
      {"typeImgUrl": "/images/test.png", typeTil: "全球零食"}
    ],
    proUrls: {
      partenerUrl: [
        '/images/ic_girl.png',
        '/images/ic_girl.png',
        '/images/ic_girl.png'
      ],
      "topicUrl-harf": [
        '/images/ic_plw.png',
        '/images/ic_plw.png',
        '/images/ic_plw.png'
      ],
      topicUrl: [
        '/images/banner02.jpg',
        '/images/banner02.jpg'
      ]
    },
    homeinit: {}
  },
  onLoad: function () {
    var _this = this;
    wx.request({
      url: 'http://localhost/mock/homeinit.json',
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
