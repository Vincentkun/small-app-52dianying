var app = getApp()
var pub_douban_api = "https://api.douban.com/v2/movie/"
Page({
    data: {
        movies: [],
        title: "加载中...",
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        wx.showToast({
            title: that.data.title,
            icon: 'loading',
            duration: 10000
        }, that.getComingSoonList())
    },
    getComingSoonList: function () {
        var that = this;
        var api_url = pub_douban_api + 'coming_soon';
        wx.request({
            url: api_url,
            data: {},
            method: 'GET',
            header: {
                "Content-Type": "json"
            },
            success: function (res) {
                //隐藏toast
                wx.hideToast()
                that.setData({
                    title: res.data.title,
                    movies: res.data.subjects
                });

                console.log(222, that.data.comingSoonData)
            }
        })
    }
})