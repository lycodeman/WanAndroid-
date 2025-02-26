// pages/integral/integral.js
const colors = require("../../utils/colors");
const api = require("../../api/api");
const { navBack } = require("../../utils/nav");
const nav = require("../../utils/nav");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coinList: [],
    title: "我的积分",
    navBgColor: colors.C_ff0000,
    navHeight: 0,
    coin: 0,
    curPage:1,
    pageCount: 1,
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
    api.coinList(this.data.curPage, res => {
      console.log("====>>>>",res.datas)
      this.setData({
        coinList : res.datas,
        pageCount: res.pageCount
      })
    }, res => {

    })
    api.coin(res=> {
      this.setData({
        coin: res.coinCount,
      })
    }, res=>{})
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
    api.coinList(this.data.curPage, res => {
      console.log("====>>>>",res.datas)
      let tempList = this.data.coinList;
      if (res && res.datas && res.datas.length > 0) {
        tempList.push(...res.datas)
      }else {
        this.data.curPage = this.data.curPage - 1;
      }
      this.setData({
        coinList : tempList
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
  onBack(){
    navBack()
  },
  onQa() {
    nav.navWeb("https://www.wanandroid.com/blog/show/2653?hide", false, '',"积分规则")
  },
  onRank(){
    nav.navCoinRank()
  }
})