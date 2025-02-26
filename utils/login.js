const CacheKey = require("./cache");

var loginTemp = null;
function isLogin() {
  // console.log("loginTemp == null", loginTemp == null)
  // console.log(" wx.getStorageSync(CacheKey.userInfo)", wx.getStorageSync(CacheKey.userInfo) )
  if(loginTemp == null){
    let userInfo = wx.getStorageSync(CacheKey.userInfo);
    loginTemp = userInfo!= null && userInfo != undefined && Object.keys(userInfo).length !== 0;
  }
  console.log("loginTemp", loginTemp)
  return loginTemp;
}
function loginReset() {
  loginTemp = null;
  isLogin()
}
module.exports = {
  isLogin: isLogin,
  loginReset: loginReset
}