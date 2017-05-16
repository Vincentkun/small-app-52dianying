var API_URL = "https://api.douban.com/v2/movie/subject/"

Page({
	data: {
		movie: []
	},
	onLoad: function(opts) {
		var that = this;
		//  opts.id
		wx.request({
			url: API_URL + "26387939",
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