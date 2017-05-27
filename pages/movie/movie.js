var API_URL = "https://api.douban.com/v2/movie/subject/";

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