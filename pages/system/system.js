// pages/system/system.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:[
      {"name": "体系", selectStyle: "background-color: white;font-size: 28px;", unSelectStyle: "font-size: 28px;background-color: #999999;"},
      {"name": "导航", selectStyle: "background-color: white;font-size: 28px;", unSelectStyle: "font-size: 28px;background-color: #999999;"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(wx.getWindowInfo())
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onTab(tab){
    console.log("tab===>>",tab)
  }
})