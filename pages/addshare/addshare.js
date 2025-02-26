// pages/addshare/addshare.js
const colors = require("../../utils/colors");
const api = require("../../api/api");
const nav = require("../../utils/nav");
const { navWeb, navBack } = require("../../utils/nav");
const { Add_Share_Event } = require("../../utils/event_channel");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "分享文章",
    navBgColor: colors.C_ff0000,
    navHeight: 0,
    linkContent: '',
    titleContent: ''
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
  share(){
    let self = this;
    api.addShare(this.data.titleContent, this.data.linkContent,res => {
      console.log("====")
      self.getOpenerEventChannel().emit(Add_Share_Event, {refresh: true});
      console.log("===refresh=")
      navBack()
    },res => {},)
  },
  onBack(){
    console.log("====")
    this.getOpenerEventChannel().emit(Add_Share_Event, {refresh: true});
    console.log("===refresh=")
    navBack()
  },
  linkConfirm(event){
    this.setData({
      linkContent: event.detail.value 
    })
  },
  linkInput(event){
    // console.log(event)
    this.setData({
      linkContent: event.detail.value 
    })
  },
  titleConfirm(event){
    this.setData({
      titleContent: event.detail.value 
    })
  },
  titleInput(event){
    // console.log(event)
    this.setData({
      titleContent: event.detail.value 
    })
  },
  refreshTitle(){
    this.setData({
      titleContent:''
    })
  },
  openLink(){
    navWeb(this.data.linkContent)
  }
})