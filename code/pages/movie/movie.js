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
        scrollTop: 100
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