// pages/share/share.js
const colors = require("../../utils/colors");
const api = require("../../api/api");
const { navBack } = require("../../utils/nav");
const nav = require("../../utils/nav");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "我的分享",
    navBgColor: colors.C_ff0000,
    navHeight: 0,
    curPage:0,
    pageCount: 1,
    shareList: []
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
    api.priArticles(this.data.curPage, res => {
      console.log("====>>>>",res.shareArticles.datas)
      this.setData({
        shareList : res.shareArticles.datas,
        pageCount: res.shareArticles.pageCount
      })
    }, res => {

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
    if (this.data.curPage + 1> this.data.pageCount) {
      return;
    }
    this.data.curPage = this.data.curPage + 1;
    api.shareArticles(this.data.curPage, res => {
      console.log("====>>>>",res.datas)
      let tempList = this.data.shareList;
      if (res.shareArticles && res.shareArticles.datas && res.shareArticles.datas.length > 0) {
        tempList.push(...res.shareArticles.datas)
      }else {
        this.data.curPage = this.data.curPage - 1;
      }
      this.setData({
        shareList : tempList
      })
    }, res => {
     
    },error => {
      this.data.curPage = this.data.curPage - 1;
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  clear(){
    console.log("=====")
  },

  onBack(){
    navBack()
  },
  onButtonClick(){
    let self = this;
    nav.addShare({
      // 监听页面 B 发来的事件
      "Add_Share_Event": function(data) {
        console.log("====>>>>",data)
        api.priArticles(self.data.curPage, res => {
          console.log("====>>>>",res.shareArticles.datas)
          self.setData({
            shareList : res.shareArticles.datas,
            pageCount: res.shareArticles.pageCount
          })
        }, res => {
    
        })
      }
    })
  }
})