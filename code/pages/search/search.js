var API_URL = 'https://api.douban.com/v2/movie/search';

Page({
	data: {
		movies: [],
		inputContent: '',
		searchLock: false,
		hidden: true
	},
	userInput: function(e){
		this.setData({
			searchLock: false,
			inputContent: e.detail.value.trim()
		});
	},
	search: function(e) {
		var that = this;
		// 如果input内容为空或者内容不变,则不搜索
		if (!that.data.inputContent || that.data.searchLock) return;
		// 修改导航标题
		wx.setNavigationBarTitle({ title: '搜索：' + that.data.inputContent });
		wx.showToast({
			title: '加载中..',
			icon: 'loading',
			duration: 10000
		});
		wx.request({
			url: API_URL + '?q=' + that.data.inputContent,
			header: {
				'Content-Type': 'json'
			},
			success: function(res) {
				wx.hideToast();
				that.setData({
					movies: res.data.subjects,
					searchLock: true,
					hidden: false
				});
			},
			fail: function(res) {
				that.setData({
					hidden: false
				});
			}
		});
	}
});
