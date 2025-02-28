// pages/my/my.js
const colors = require("../../utils/colors");
const api = require("../../api/api")
const login = require("../../utils/login");
const nav = require("../../utils/nav");
const cache = require("../../utils/cache");
const { Login_Event } = require("../../utils/event_channel");
const { navHistory, navIntegral, navShare, navCollect, navBookmark, navSeeting, navOpen } = require("../../utils/nav");
const storage = require("../../utils/storage");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBgColor: colors.C_ff0000,
    navHeight: 0,
    userLevel: "00",
    userName: '00',
    myItemList: [
      {id: 1,name: "我的积分", icon: "../../images/integral.png", subText: ''},
      {id: 2,name: "我的分享", icon: "../../images/share.png", subText: ''},
      {id: 3,name: "我的收藏", icon: "../../images/collect_select.png", subText: ''},
      {id: 4,name: "我的书签", icon: "../../images/bookmark.png", subText: ''},
      {id: 5,name: "阅读历史", icon: "../../images/history.png", subText: ''},
      {id: 6,name: "开源项目", icon: "../../images/github.png", subText: ''},
      {id: 7,name: "关于作者", icon: "../../images/about_auther.png", subText: ''},
      {id: 8,name: "系统设置", icon: "../../images/setting.png", subText: ''}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      navHeight: wx.getWindowInfo().statusBarHeight + 44
    },res=>{
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    if(login.isLogin()){
      this.loadUserInfo(true)
    }
    storage.getHistory()
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
  itemClick(evn) {
    console.log("点击了：",evn.detail.id, login.isLogin())
    if(!login.isLogin()){
      let self = this;
      nav.navLogin({
        // 监听页面 B 发来的事件
        "Login_Event": function(data) {
          self.loadUserInfo(data.isLogin);
        }
      },)
      return;
    }
    let position = evn.detail.id;
    if(position == 1){
      navIntegral()
    }else if(position == 2){
      navShare()
    }else if(position == 3){
      navCollect()
    }else if(position == 4){
      navBookmark()
    }else if(position == 5){
      navHistory()
    }else if(position == 6){
      navOpen()
    }else if(position == 7){
      
    }else if(position == 8){
      var self = this
      navSeeting({
        // 监听页面 B 发来的事件
        "Logout_Event": function(data) {
          self.loadUserInfo(false);
        }
      })
    }
  },
  loadUserInfo(isLogin){
    if(isLogin){
      let userInfo = wx.getStorageSync(cache.userInfo)
      console.log("userInfo",userInfo)
      api.coin(res=> {
        this.data.myItemList[0].subText = res.coinCount
        this.setData({
          userLevel: "等级："+ res.level + "  排名："+ res.rank,
          userName: userInfo.nickname,
          myItemList:this.data.myItemList
        })
      }, res=>{})
    }else {
      wx.setStorageSync(cache.userInfo, null);
      wx.setStorageSync(cache.cookies, null);
      this.data.myItemList[0].subText = ""
      login.loginReset()
      this.setData({
        userLevel: "",
        userName: "去登录",
        myItemList:this.data.myItemList
      })
    }
  }
})