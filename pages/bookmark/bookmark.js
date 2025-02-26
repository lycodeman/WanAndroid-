// pages/bookmark/bookmark.js
const colors = require("../../utils/colors");
const api = require("../../api/api");
const { navBack } = require("../../utils/nav");
const storage = require("../../utils/storage");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "我的书签",
    navBgColor: colors.C_ff0000,
    historyList: new Array(),
    navHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
      navHeight: wx.getWindowInfo().statusBarHeight + 44,
      markList: storage.getMark()
    })
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
    this.setData({
      markList: storage.getMark()
    },res=>{
      wx.stopPullDownRefresh()
    })
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
  onBack(){
    navBack()
  },
  onButtonClick(){
    storage.clearMark();
    this.setData({
      markList: storage.getMark()
    })
  }
})