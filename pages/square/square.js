// pages/square/square.js
const colors = require("../../utils/colors");
const api = require("../../api/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '广场',
    navBgColor: colors.C_ff0000,
    squareList: [],
    curPage: 0,
    navHeight: 0,
    enableLoadMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      navHeight: wx.getWindowInfo().statusBarHeight + 44
    },res=>{
        this.loadSquare(false);
    });
  },
  loadSquare(loadMore){
    let curIndex = this.data.curPage;
    if(loadMore){
      if(!this.data.enableLoadMore){
        return;
      }
    }else {
      curIndex = 0
      this.data.enableLoadMore = true;
    }
    api.square(curIndex, res=>{
      if(!loadMore){
        this.setData({
          squareList: res.datas,
          curPage: this.data.curPage + 1
        })
      }else {
        this.setData({
          squareList: this.data.squareList.concat(res.datas),
          curPage: this.data.curPage + 1
        })
      }
      if(loadMore && res.curPage >= res.pageCount){
        this.data.enableLoadMore = false;
      }
    },res=>{
      
    });
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

  onPullDownRefresh(){
    this.loadSquare(false);
  },
 /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(){
    this.loadSquare(true);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  scrollTop(){
    this.loadSquare(false);
  },
  scrollBottom(){
    this.loadSquare(true);
  }
})