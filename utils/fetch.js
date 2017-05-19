/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */

var pubURL = "https://api.douban.com/v2/movie/";

function _get(category, page, success, fail) {
  var page = page || 0;
  var count = 10;
  var apiUrl = pubURL + category + "?start=" + page + "&count=" + count;
  wx.request({
    url: apiUrl,
    header: {
      "Content-Type": "json"
    },
    method: 'GET',
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });
}



module.exports = {
    _get: _get
}