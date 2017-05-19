//local test data
var dbTest = require('../../utils/localData/dataList.js').list;

//fetch data
var fetch = require('../../utils/fetch.js');

var pub_douban_api = "https://api.douban.com/v2/movie/";

Page({
    data: {
        movies: [],
        title: "加载中...",
        page: 0,
        hasMore: true,
        hidden: true,
        scrollHeight: 0,
        lock: false
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this;
        // Toast提示
        wx.showToast({
            title: that.data.title,
            icon: 'loading',
            duration: 1000,
            success: function () {
                that.getInTheatersList()
            }
        });
        // 得到窗口高度, 并设置data 
        // scroll-view拿到高度 才能计算滚动到底部加载
        wx.getSystemInfo({
            success: function (res) {
                // console.info(res.windowHeight);
                that.setData({
                    scrollHeight: res.windowHeight
                });
            }
        });
    },
    getInTheatersList: function () {
        var that = this
        //fetch data
        fetch._get('in_theaters', that.data.page,
            function (res) {
                //隐藏toast
                wx.hideToast()
                //set data
                that.setData({
                    title: res.data.title,
                    movies: res.data.subjects,
                    hidden: false
                })
            },
            function (res) {
                console.log(res);
            })
    },
    loadMore: function (e) {
        var that = this;
        //没有更多时 后边不执行
        if (!this.data.hasMore) return;
        var ind = ++that.data.page;
        console.log(888,ind);
        if(1) return;

        fetch._get('in_theaters', ++that.data.page,
            function (res) {
                console.log(999,that.data.page)
                //set data
                that.setData({
                    movies: that.data.movies.concat(res.data.subjects),
                    hasMore: true
                })
            },
            function (res) {
                console.log(res);
                // no more
                that.setData({
                    hasMore: false
                });
            })

    }
})