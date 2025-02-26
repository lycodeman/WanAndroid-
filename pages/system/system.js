// pages/system/system.js
const colors = require("../../utils/colors")
const api = require('../../api/api');
const nav = require('../../utils/nav');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:[
      {"name": "体系", selectStyle: "color: white;font-size: 16px;padding-right: 4px;font-weight: 600;", unSelectStyle: "font-size: 16px;color: #cfcfcf;padding-right: 4px;font-weight: 600;"},
      {"name": "导航", selectStyle: "color: white;font-size: 16px;padding-left: 4px;font-weight: 600;", unSelectStyle: "font-size: 16px;color: #cfcfcf;padding-left: 4px;font-weight: 600;"}],
    navBgColor: colors.C_ff0000,
    sysList: [],
    navList: [],
    pageList: [[],[]],
    autoplay: false,
    indicatorDots: false,
    circular: false,
    curTabIndex: 0,
    navHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(wx.getWindowInfo());
    this.data.pageList = [[],[]];
    this.setData({
      navHeight: wx.getWindowInfo().statusBarHeight + 44
    })
    this.loadSysData();
    
  },

  loadNavData(){
    api.nav(res=> {
      this.data.pageList[1] = res;
      this.setData({
        navList: res,
        pageList: this.data.pageList
      })
    }, error=>{
    });
  },
  loadSysData(){
    api.system(res=> {
      this.data.pageList[0] = res;
      this.setData({
        sysList: res,
        pageList: this.data.pageList
      })
    }, error=>{
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

  onTab(res){
    console.log("tab===>>",res)
    this.setData({
      curTabIndex: res.detail.index
    },res=> {
      if(this.data.navList.length == 0){
        this.loadNavData()
      }
    })
  },
  onSwiperChange(res){
    console.log("onSwiperChange===>>",res);
    this.setData({
      curTabIndex: res.detail.current
    },res=>{
      console.log("curTabIndex===>>",this.data.curTabIndex);
    })
  },
  onNavTagClick(res){
    nav.navWeb(res.detail.data.link,false, res.detail.data.id,res.detail.data.title);
  },
  onSysTagClick(res){
    let curTag = this.data.sysList[res.detail.index];
    console.log(curTag);
    nav.navArticle(this.data.sysList[res.detail.index].name, JSON.stringify(curTag.children.map(item => ({ name: item.name, id: item.id }))));
  }
})