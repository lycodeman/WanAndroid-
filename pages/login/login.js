// pages/login/login.js
const colors = require("../../utils/colors");
const api = require("../../api/api");
const nav = require("../../utils/nav");
const toast = require("../../utils/toast");
const cache = require("../../utils/cache");
const { Login_Event } = require("../../utils/event_channel");
const { loginReset } = require("../../utils/login");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBgColor: colors.C_ff0000,
    navHeight: 0,
    tabList: [0,1],
    curIndex: 0,
    tabText: '去注册',
    userConfig: {img: '../../images/user.png',imgFocus: '../../images/user_focus.png',hint: "请输入用户名"},
    pswConfig: {img: '../../images/password.png',imgFocus: '../../images/password_focus.png',hint: "请输入密码", showEyes: true},
    loginUserName: '',
    loginPsw: '',
    registerPsw: '',
    registerUserName: '',
    registerPswAgain: '',
    loginBtnEnabel: false,
    regiterBtnEnabel: false,
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
  onClose(){
    nav.navBack();
  },
  onTab(){
    if(this.data.curIndex == 0){
      this.setData({
        curIndex: 1,
        tabText: "去登录"
      })
    }else {
      this.setData({
        curIndex: 0,
        tabText: "去注册"
      })
    }
  },
  swiperChange(event){
    if(event.detail.source && event.detail.source == "touch"){
      if(event.detail.current == 1){
        this.setData({
          curIndex: event.detail.current,
          tabText: "去登录"
        })
      }else {
        this.setData({
          curIndex: event.detail.current,
          tabText: "去注册"
        })
      }
    }
    console.log(event)
  },
  login() {
    let self = this;
    api.login(this.data.loginUserName, this.data.loginPsw, res=> {
      wx.setStorageSync(cache.userInfo, res);
      loginReset();
    }, res=> {
      console.log(res)
      if(res.statusCode == 200){
        let cookies = "";
        res.cookies.forEach(element => {
          if(cookies.length > 0){
            cookies= cookies + ";" + element
          }else {
            cookies= element
          }
        });
        wx.setStorageSync(cache.cookies, cookies);
        self.getOpenerEventChannel().emit(Login_Event, {isLogin: true});
        self.onClose();
      }
    })
  },
  regiter() {
    let self = this;
    api.register(this.data.registerUserName, this.data.registerPsw, this.data.registerPswAgain,res=> {
      wx.setStorageSync(cache.userInfo, res);
      loginReset()
    }, res=> {
      if(res.statusCode == 200){
        let cookies = "";
        res.cookies.forEach(element => {
          if(cookies.length > 0){
            cookies= cookies + ";" + element
          }else {
            cookies= element
          }
        });
        wx.setStorageSync(cache.cookies, cookies);
        self.getOpenerEventChannel().emit(Login_Event, {isLogin: true});
        self.onClose();
      }
    })
  },
  loginUserInputChange(event) {
    this.setData({
      loginUserName: event.detail.content,
      loginBtnEnabel: event.detail.content.length > 0 && this.data.loginPsw.length > 0
    })
  },
  loginPswInputChange(event) {
    this.setData({
      loginPsw: event.detail.content,
      loginBtnEnabel: this.data.loginUserName.length > 0 && event.detail.content.length > 0
    })
  },
  registerUserInputChange(event) {
    this.setData({
      registerUserName: event.detail.content,
      regiterBtnEnabel: this.data.registerPswAgain.length > 0 && this.data.registerPsw.length > 0 && event.detail.content.length > 0 && this.data.registerPswAgain == this.data.registerPsw
    })
  },
  registerPswInputChange(event) {
    this.setData({
      registerPsw: event.detail.content,
      regiterBtnEnabel: this.data.registerPswAgain.length > 0 && this.data.registerPsw.length > 0 && event.detail.content.length > 0 && this.data.registerPswAgain ==  event.detail.content
    })
  },
  registerPswAgainInputChange(event) {
    this.setData({
      registerPswAgain: event.detail.content,
      regiterBtnEnabel: this.data.registerPswAgain.length > 0 && this.data.registerPsw.length > 0 && event.detail.content.length > 0 &&  event.detail.content == this.data.registerPsw
    })
  },
  
})