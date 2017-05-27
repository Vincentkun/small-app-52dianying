//fetch data
var fetch = require('../../utils/fetch.js');

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
                that.getMoviesList()
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
    getMoviesList: function () {
        var that = this
        //fetch data
        fetch._get('in_theaters', that.data.page,
            function (res) {
                var list = res.data.subjects, len;
                if (list) {
                    len = list.length;
                    if (len > 0) {
                        //set data
                        that.setData({
                            title: res.data.title,
                            movies: res.data.subjects,
                            hidden: false,
                            page: len
                        })
                    }
                };
                //隐藏toast
                wx.hideToast()
            },
            function (res) {
                console.log(res);
            })
    },
    loadMore: function (e) {
        var that = this;
        // 被锁 或 没有更多时 后边不执行
        if (this.data.lock || !this.data.hasMore) return;
        that.setData({
            lock: true
        });
        var curPage = that.data.page;
        fetch._get('in_theaters', ++that.data.page,
            function (res) {
                var list = res.data.subjects, len;
                if (list && list.length > 0) {
                    len = list.length;
                    //set data
                    that.setData({
                        movies: that.data.movies.concat(res.data.subjects),
                        hasMore: true,
                        lock: false,
                        page: curPage + len
                    })

                } else {
                    // no more
                    that.setData({
                        hasMore: false
                    });
                }
            },
            function (res) {
                console.log(res);
                // no more
                that.setData({
                    hasMore: false
                });
            })
    },
    search: function(){
       console.log('search') 
    }
})