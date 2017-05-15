// This is our App Service.
// This is our data.
var helloData = {
  name: '张三'
}

// Register a Page.
Page({
  data: helloData,
  changeName: function(e) {
    this.setData({
      name: '李四'
    })
  }
})