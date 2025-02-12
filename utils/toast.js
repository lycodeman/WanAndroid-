const toast = {
  show(title){
    wx.showToast({
      title: title,
      icon: "none"
    })
  }
}
module.exports = toast