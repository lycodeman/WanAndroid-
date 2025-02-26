const CacheKey = require("./cache");
const login = require("./login");

//保存浏览历史
function saveHistory(data) {
  if(!login.isLogin()){
    return;
  }
  let userInfo = wx.getStorageSync(CacheKey.userInfo)
  let history = getHistory()
  if(history){
    history.unshift({key: data.id, time: Date.now(), link: data.link, title: data.title})
  }else {
    history = new Array();
    history.unshift({key: data.id, time: Date.now(), link: data.link, title: data.title})
  }
  console.log("saveHistory", data)
  console.log("saveHistory", history)
  wx.setStorageSync('history_' + userInfo.id, JSON.stringify(history));
  getHistory();
}
//获取浏览历史，返回数组
function getHistory() {
  if(!login.isLogin()){
    return;
  }
  let userInfo = wx.getStorageSync(CacheKey.userInfo)
  let history = wx.getStorageSync('history_' + userInfo.id);
  console.log("getHistory", history);
  if(history){
    return JSON.parse(history);
  }else {
    return []
  }
}

function clearHistory() {
  if(!login.isLogin()){
    return;
  }
  let userInfo = wx.getStorageSync(CacheKey.userInfo)
  wx.removeStorageSync('history_' + userInfo.id);
}

//保存书签
function saveMark(data) {
  if(!login.isLogin()){
    return;
  }
  let userInfo = wx.getStorageSync(CacheKey.userInfo)
  let markList = getMark()
  if(markList){
    markList.unshift({key: data.id, time: Date.now(), link: data.link, title: data.title})
  }else {
    markList = new Array();
    markList.unshift({key: data.id, time: Date.now(), link: data.link, title: data.title})
  }
  console.log("saveMark", data)
  console.log("saveMark", markList)
  wx.setStorageSync('mark_' + userInfo.id, JSON.stringify(markList));
  getMark();
}
//获取书签，返回数组
function getMark() {
  if(!login.isLogin()){
    return;
  }
  let userInfo = wx.getStorageSync(CacheKey.userInfo)
  let markList = wx.getStorageSync('mark_' + userInfo.id);
  console.log("getMark", markList);
  if(markList){
    return JSON.parse(markList);
  }else {
    return []
  }
}

function clearMark() {
  if(!login.isLogin()){
    return;
  }
  let userInfo = wx.getStorageSync(CacheKey.userInfo)
  wx.removeStorageSync('mark_' + userInfo.id);
}

module.exports = {
  saveHistory: saveHistory,
  getHistory: getHistory,
  clearHistory: clearHistory,
  saveMark: saveMark,
  getMark: getMark,
  clearMark: clearMark
}