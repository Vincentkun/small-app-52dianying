// var API_URL = "https://api.douban.com/v2/movie/subject/";
var API_URL = 'https://douban.uieee.com/v2/movie/subject/';


// local data
const localData = require('../../utils/localData/dataMovie.js');

Page({
  data: {
    movie: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    toView: 'red',
    scrollTop: 100,
    imgArr: [
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var arr = e.currentTarget.dataset.arr;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index], //当前图片地址
      urls: imgArr, //所有要预览的图片的地址集合 数组形式
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  onLoad: function (opts) {
    var that = this;

    // Test
    that.setData({
      movie: localData.data
    });

    wx.setNavigationBarTitle({
      title: localData.data.title
    })

    return;

    // Online

    wx.request({
      url: API_URL + opts.id,
      data: {},
      method: 'GET',
      header: {
        "Content-Type": "Json"
      },
      success: function (res) {

        that.setData({
          movie: res.data
        });
        // 修改标题
        wx.setNavigationBarTitle({
          title: res.data.title
        })
        // console.log(res)

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})