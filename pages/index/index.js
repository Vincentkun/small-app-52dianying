var app = getApp()
var pub_douban_api = "https://api.douban.com/v2/movie/"
Page({
    data: {
        motto: '51看电影',
        userInfo: {},
        movies: [],
        intheatersData: [],
        intheaterTitle: "正在热映",
        comingSoonData: [],
        comingSoonTitle: "即将上映",
        top250Data: [],
        top250Title: "口碑排行",
        title: "加载中...",
        nav: ['正在热映', '即将上映', '口碑排行'],
        nowIndex: '0'
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        console.log('onLoad')
        var that = this
        wx.showToast({
            title: that.data.title,
            icon: 'loading',
            duration: 10000
        }, that.getInTheatersList())

        

    },
    getInTheatersList: function() {
        var that = this
        var api_url = pub_douban_api + 'in_theaters'
        wx.request({
            url: api_url,
            data: {},
            method: 'GET',
            header: {
                "Content-Type": "json"
            },
            success: function(res) {
                //隐藏toast
                wx.hideToast()
                that.setData({
                    intheatersData: res.data.subjects,
                    intheaterTitle: res.data.title
                });
                
                that.getComingSoonList()
                that.getWweklyList()
                console.log(2222, that.data)
            }
        })
    },
    getComingSoonList: function() {
        var that = this;
        var lock = false;
        if (lock) return;
        console.log(12312121, lock)
        var api_url = pub_douban_api + 'coming_soon';
        wx.request({
            url: api_url,
            data: {},
            method: 'GET',
            header: {
                "Content-Type": "json"
            },
            success: function(res) {
                //隐藏toast
                wx.hideToast()
                that.setData({
                    comingSoonData: res.data.subjects,
                    comingSoonTitle: res.data.title
                });
                lock = true
                console.log(3333, lock, that.data.comingSoonData)
            }
        })
    },
    getWweklyList: function() {
        var that = this;
        var lock = false;
        if (lock) return;
        var api_url = pub_douban_api + 'top250';
        wx.request({
            url: api_url,
            data: {},
            method: 'GET',
            header: {
                "Content-Type": "json"
            },
            success: function(res) {
                //隐藏toast
                wx.hideToast()
                that.setData({
                    top250Data: res.data.subjects,
                    top250Title: res.data.title
                });
                console.log(that.data.top250Data)
                lock = true
            }
        })
    },
    navClick(e) {
        var that = this;
        var curIndex = e.currentTarget.dataset.index;
        // console.log(curIndex);
        this.setData({
            nowIndex: curIndex
        })
        // if (curIndex == 1) {
        //     that.getComingSoonList()
        //     that.getWweklyList()
        // } else if (curIndex == 2) {
        //     that.getWweklyList()
        // }
    }
})