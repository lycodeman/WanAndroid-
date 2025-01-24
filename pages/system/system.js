// pages/system/system.js
const colors = require("../../utils/colors")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:[
      {"name": "体系", selectStyle: "color: white;font-size: 18px;padding-right: 4px;font-weight: 500;", unSelectStyle: "font-size: 18px;color: #999999;padding-right: 4px;font-weight: 500;"},
      {"name": "导航", selectStyle: "color: white;font-size: 18px;padding-left: 4px;font-weight: 500;", unSelectStyle: "font-size: 18px;color: #999999;padding-left: 4px;font-weight: 500;"}],
      navBgColor: colors.C_ff0000
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

  onTab(res){
    console.log("tab===>>",res)
    this.setData({
      curTabIndex: res.detail.index
    })
  }
})