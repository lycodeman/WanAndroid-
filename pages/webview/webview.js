const login = require("../../utils/login")
const { saveCollect, saveMark, getMark } = require("../../utils/storage")
const toast = require("../../utils/toast")

// pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "",
    id: '',
    title: '',
    hideTitle: false,
    showMore: false,
    isMark: false,
    isCollect: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let markList = getMark();
    markList.forEach(element => {
      if(element.key == options.id){
        this.data.isMark = true
      }
    });
    this.setData({
      url: options.url, 
      hideTitle: options.hideTitle, 
      id: options.id, 
      title: options.title,
      isMark: this.data.isMark, 
      isCollect: this.data.isCollect,
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
  onButtonClick(){
    this.setData({
      showMore: !this.data.showMore
    })
  },
  onBookmark(){
    if(!login.isLogin()){
      toast.show("请登录后在添加书签！")
      return;
    }
    this.setData({
      isMark: !this.data.isMark,
    },res=> {
      saveMark({link: this.data.link, title: this.data.title, id: this.data.id })
    })
  },
  onCollect(){
    if(!login.isLogin()){
      toast.show("请登录后在收藏！")
      return;
    }
    this.setData({
      isCollect: !this.data.isCollect,
    }, res=> {
      saveCollect({link: this.data.link, title: this.data.title, id: this.data.id })
    })
  }
})