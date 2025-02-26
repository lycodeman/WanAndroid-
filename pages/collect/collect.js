// pages/collect/collect.js
const api = require("../../api/api");
const colors = require("../../utils/colors");
const { navBack } = require("../../utils/nav");
const storage = require("../../utils/storage");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "我的收藏",
    navBgColor: colors.C_ff0000,
    collectList: new Array(),
    navHeight: 0,
    curIndex: 0,
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
    this.refreshColloectList(false)
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
    this.refreshColloectList(false)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.refreshColloectList(true)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  
  onBack(){
    navBack()
  },
  OnCollectChanged(options){
    // console.log("op===",options)
    this.setData({
      collectList: this.data.collectList.filter(item => item.id !== options.detail.id)
    })
  },
  refreshColloectList(isLoadMore){
    if(isLoadMore){
      this.data.curIndex = this.data.curIndex + 1;
    }else {
      this.data.curIndex = 0;
    }
    api.collectList(this.data.curIndex, res=> {
      this.setData({
        collectList: isLoadMore ? this.data.collectList.push(res.datas.map(function changeItem(params) {
          params.collect = true;
          return params
        })): res.datas.map(function changeItem(params) {
          params.collect = true;
          return params
        })
      })
    }, res=> {
    })
  }
})