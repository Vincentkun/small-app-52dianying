var dbTest = {
    "rating": {
        "max": 10,
        "average": 9.2,
        "stars": "50",
        "min": 0
    },
    "reviews_count": 3474,
    "wish_count": 51574,
    "douban_site": "",
    "year": "2016",
    "images": {
        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2457983084.webp",
        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.webp",
        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2457983084.webp"
    },
    "alt": "https://movie.douban.com/subject/26387939/",
    "id": "26387939",
    "mobile_url": "https://movie.douban.com/subject/26387939/mobile",
    "title": "摔跤吧！爸爸",
    "do_count": null,
    "share_url": "https://m.douban.com/movie/subject/26387939",
    "seasons_count": null,
    "schedule_url": "https://movie.douban.com/subject/26387939/cinema/",
    "episodes_count": null,
    "countries": [
        "印度"
    ],
    "genres": [
        "剧情",
        "传记",
        "运动"
    ],
    "collect_count": 162183,
    "casts": [{
        "alt": "https://movie.douban.com/celebrity/1031931/",
        "avatars": {
            "small": "https://img1.doubanio.com/img/celebrity/small/13628.jpg",
            "large": "https://img1.doubanio.com/img/celebrity/large/13628.jpg",
            "medium": "https://img1.doubanio.com/img/celebrity/medium/13628.jpg"
        },
        "name": "阿米尔·汗",
        "id": "1031931"
    }, {
        "alt": "https://movie.douban.com/celebrity/1372457/",
        "avatars": {
            "small": "https://img1.doubanio.com/img/celebrity/small/1493121366.9.jpg",
            "large": "https://img1.doubanio.com/img/celebrity/large/1493121366.9.jpg",
            "medium": "https://img1.doubanio.com/img/celebrity/medium/1493121366.9.jpg"
        },
        "name": "法缇玛·萨那·纱卡",
        "id": "1372457"
    }, {
        "alt": "https://movie.douban.com/celebrity/1372458/",
        "avatars": {
            "small": "https://img3.doubanio.com/img/celebrity/small/1493121856.81.jpg",
            "large": "https://img3.doubanio.com/img/celebrity/large/1493121856.81.jpg",
            "medium": "https://img3.doubanio.com/img/celebrity/medium/1493121856.81.jpg"
        },
        "name": "桑亚·玛荷塔",
        "id": "1372458"
    }, {
        "alt": "https://movie.douban.com/celebrity/1372459/",
        "avatars": {
            "small": "https://img3.doubanio.com/img/celebrity/small/1494802851.63.jpg",
            "large": "https://img3.doubanio.com/img/celebrity/large/1494802851.63.jpg",
            "medium": "https://img3.doubanio.com/img/celebrity/medium/1494802851.63.jpg"
        },
        "name": "阿帕尔夏克提·库拉那",
        "id": "1372459"
    }],
    "current_season": null,
    "original_title": "Dangal",
    "summary": "马哈维亚·辛格·珀尕（阿米尔·汗 Aamir Khan 饰）曾是印度国家摔跤冠军，因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——赢得世界级金牌。结果生了四个女儿本以为梦想就此破碎的辛格却意外发现女儿身上的惊人天赋，看到冠军希望的他决定不能让女儿的天赋浪费，像其他女孩一样只能洗衣做饭过一生 ，再三考虑之后，与妻子约定一年时间按照摔跤手的标准训练两个女儿：换掉裙子 、剪掉了长发，让她们练习摔跤，并赢得一个又一个冠军，最终赢来了成为榜样激励千千万万女性的机会……",
    "subtype": "movie",
    "directors": [{
        "alt": "https://movie.douban.com/celebrity/1366907/",
        "avatars": {
            "small": "https://img3.doubanio.com/img/celebrity/small/1484120321.24.jpg",
            "large": "https://img3.doubanio.com/img/celebrity/large/1484120321.24.jpg",
            "medium": "https://img3.doubanio.com/img/celebrity/medium/1484120321.24.jpg"
        },
        "name": "涅提·蒂瓦里",
        "id": "1366907"
    }],
    "comments_count": 72531,
    "ratings_count": 158691,
    "aka": [
        "我和我的冠军女儿(台)",
        "摔跤吧！老爸",
        "摔跤家族",
        "दंगल",
        "Wrestling Competition"
    ]
}

var API_URL = "https://api.douban.com/v2/movie/subject/";

Page({
    data: {
        movie: {},
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        toView: 'red',
        scrollTop: 100
    },
    onLoad: function (opts) {
        var that = this;
        // console.log(dbTest)
        //  opts.id
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