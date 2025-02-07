// pages/home/home.js
const api = require('../../api/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curPage: 0,
    pageCount: 20,
    articleList: [],
    autoplay: true,
    interval: 3000,
    indicatorDots: true,
    circular: true,
    duration: 300,
    bannerList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.home(true);
    this.banner();
  },
  banner(){
    api.banner(res=>{
      this.setData({
        bannerList: res
      })
    },res=>{

    })
  },
  home(isRefresh){
    if(isRefresh){
      this.data.curPage = 0;
    }else {
      this.data.curPage = this.data.curPage + 1;
    }
    if(this.data.pageCount < this.data.curPage){
      wx.stopPullDownRefresh();
      return;
    }
    api.home(this.data.curPage, res=> {
      var tempData = this.data.articleList;
      if(res.datas && res.datas.length > 0){
        tempData.push(...res.datas);
      }
      this.setData({
        articleList: tempData,
        curPage: res.curPage,
        pageCount: res.pageCount
      })
    }, res=>{
      if(isRefresh){
        wx.stopPullDownRefresh();
      }
    })
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
    this.home(true);
    this.banner();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("====")
    this.home(false);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})