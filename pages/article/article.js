// pages/article/article.js
const colors = require("../../utils/colors");
const api = require("../../api/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    navBgColor: colors.C_ff0000,
    groups: [],
    groupList: [],
    curIndex: 0,
    navHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("===",options)
    let groups = JSON.parse(options.groups);
    groups = groups.map(item=> ({...item, curPage: 0}));
    console.log("groups",groups);
    this.setData({
      title: options.title, 
      groupList: groups, 
      navHeight: wx.getWindowInfo().statusBarHeight + 44
    },res=>{
        this.loadArticles(false);
    });
   
  },

  loadArticles(loadMore){
    let curGroupItem = this.data.groupList[this.data.curIndex];
    console.log("curGroupItem", curGroupItem)
    api.article(curGroupItem.curPage,curGroupItem.id,res=>{
      if(curGroupItem.articleList == undefined ||curGroupItem.articleList.length == 0){
        this.setData({
          [`groupList[${this.data.curIndex}].articleList`]: res.datas
        });
      }else {
        this.setData({
          [`groupList[${this.data.curIndex}].articleList`]: curGroupItem.articleList.concat(res.datas)
        })
      }
      if(loadMore && res.datas && res.datas.length == 0){
        this.setData({
          [`groupList[${this.data.curIndex}].curPage`]: curGroupItem.curPage - 1
        })
      }
    }, res=>{
      if(loadMore){
        this.setData({
          [`groupList[${this.data.curIndex}].curPage`]: curGroupItem.curPage - 1
        })
      }
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

  /**
   * 返回按钮
   */
  onBack() {
    wx.navigateBack({
      delta: 1
    });
  },
  onTabChange(options) {
    console.log("===",options);
    this.setData({
      curIndex: options.detail.index
    },res=> {
      if(this.data.groupList[this.data.curIndex].articleList == undefined || this.data.groupList[this.data.curIndex].articleList.length == 0){
        this.loadArticles(false);
      }
    });
  },
  scrollBottom(){
    let curGroupItem = this.data.groupList[this.data.curIndex];
    this.setData({
      [`groupList[${this.data.curIndex}].curPage`]: curGroupItem.curPage + 1
    },res=>{
      this.loadArticles(true);
    });
  },
  scrollTop(){
    this.setData({
      [`groupList[${this.data.curIndex}].articleList`]: [],
      [`groupList[${this.data.curIndex}].curPage`]: 0
    });
    this.loadArticles(false);
  }
})