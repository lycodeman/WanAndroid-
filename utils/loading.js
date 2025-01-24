const loading = {
  show(title){
    wx.showLoading({
      title: title,
    })
  },
  hide(){
    wx.hideLoading()
  }
}
module.exports = loading
