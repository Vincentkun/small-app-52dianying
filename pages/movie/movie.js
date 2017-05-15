var API_URL = "https://api.douban.com/v2/movie/subject/"

Page({
	data: {
		movie: []
	},
	onLoad: function(opts) {
		var that = this;
		wx.request({
			url: API_URL + opts.id,
			data: {},
			method: 'GET',
			header: {
				"Content-Type": "Json"
			},
			success: function(res) {
				that.setData({
					movie: res.data
				})
			},
			fail: function() {
				// fail
			},
			complete: function() {
				// complete
			}
		})
	}
})