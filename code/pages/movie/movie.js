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
    scrollTop: 100
  },
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var data = e.currentTarget.dataset.data;
    var getData = function (data) {
      var arr = [];
      for (let i in data) {
        arr.push(data[i].image);
      };
      return arr
    };
    wx.previewImage({
      current: getData(data)[index], //当前图片地址
      urls: getData(data), //所有要预览的图片的地址集合 数组形式
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