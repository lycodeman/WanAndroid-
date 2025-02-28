// pages/setting/setting.js
const api = require("../../api/api");
const colors = require("../../utils/colors");
const { Logout_Event } = require("../../utils/event_channel");
const { navBack } = require("../../utils/nav");
const toast = require("../../utils/toast");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "系统设置",
    navBgColor: colors.C_ff0000,
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
  logout(){
    var self = this
    api.logout(res=>{
      toast.show("退出成功")
      self.getOpenerEventChannel().emit(Logout_Event, {isLogout: true});
      navBack()
    },res=>{})
  }
})