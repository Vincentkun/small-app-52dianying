/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */

var pubURL = 'https://api.douban.com/v2/movie/';
var pubURL = 'http://thecity.com/v2/movie/';


// local data
// const localData = require('./localData/dataList.js');


function _get(category, start, success, fail) {
	var start = start || 0;
	var count = 20;
	var apiUrl = pubURL + category + '?start=' + start + '&count=' + count;

	// console.log(category, start, count);

	// Get data from Douban API
	wx.request({
		url: apiUrl,
		header: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'json'
		},
		method: 'GET',
		success: function(res) {
			success(res);
		},
		fail: function(res) {
			fail(res);
		}
	});

	// Local data test
	// success(localData);
}

module.exports = {
	_get: _get
};
