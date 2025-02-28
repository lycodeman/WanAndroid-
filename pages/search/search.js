// pages/search/search.js
const api = require("../../api/api");
const colors = require("../../utils/colors");
const { navBack } = require("../../utils/nav");
const storage = require("../../utils/storage");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "搜索",
    navBgColor: colors.C_ff0000,
    navHeight: 0,
    curPage: 1,
    articleList: [],
    pageCount: 1,
    content: "",
    historySearchKeys: [],
    hotKeys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      navHeight: wx.getWindowInfo().statusBarHeight + 44,
      historySearchKeys: storage.getSearchKeys()
    },res=>{
      console.log('====>>>>',this.data.navHeight)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    api.hotkey(res=> {
      console.log('hotKeys', res)
      this.setData({
        hotKeys: res
      })
    },res=> {
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
    this.data.curPage = this.data.curPage + 1
    if (this.data.curPage > this.data.pageCount) {
      return
    }
    api.articleQuery(this.data.curPage,this.data.content,  res=> {
      this.setData({
        articleList: this.data.articleList.push(...res.datas)
      })
    }, res=> {

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
  onSearch(){
    storage.saveSearchKeys(this.data.content)
    this.data.curPage = 1
    api.articleQuery(this.data.curPage,this.data.content, res=> {
      this.setData({
        pageCount: res.pageCount,
        articleList: res.datas,
        historySearchKeys: storage.getSearchKeys()
      })
    },res=> {

    })
  },
  confirm(event){
    var self = this
    this.setData({
      content: event.detail.value 
    },res=> {
      self.onSearch()
    })
  },

  input(event){
    this.setData({
      content: event.detail.value,
      articleList: event.detail.value.length == 0 ? [] : this.data.articleList
    })
  },
  onHistoryKeyTagClick(data){
    var self = this
    this.setData({
      content: data.detail.data.name
    }, res=> {
      self.onSearch()
    })
  },
  onHotKeyTagClick(data){
    var self = this
    this.setData({
      content: data.detail.data.name
    }, res=> {
      self.onSearch()
    })
  },
  onClear(){
    this.setData({
      content: '',
      articleList: []
    }, res=> {
      
    })
  }
})