var express = require("express");
var app = express();
var proxy = require("http-proxy-middleware");
var cors = require("cors");
var apiproxy = [proxy("", {
    target: "https://api.douban.com",
    changeOrigin: true
}), proxy("/*", {
    target: "http://localhost:3006",
    changeOrigin: true
})];

app.use(cors());
app.use((req, res, next) => {
    req.headers = {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, sdch, br",
        "accept-language": "zh-CN,zh;q=0.8",
        "cache-control": "no-cache",
        "connection": "keep-alive",
        "host": "theecity.com",
        "origin": "http://localhost:8080",
        "pragma": "no-cache",
        "referer": "http://localhost:8080/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
    }
    next();
});
app.use((req, res, next) => {
    console.log(req.headers.referer);
    next();
})
app.use(apiproxy);


app.listen(80, () => {
    console.log("port on 5000")
});