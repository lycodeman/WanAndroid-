const request = require("./request.js");
const url = require("./url.js");

function requestByPath(path, onSuccess, onComplete) {
  request.wrapper({
    url: url.domain + path
  }, res=>{
    console.log("requestByPath result: ",res);
    onSuccess(res);
  }, error=> {

  }, res=> {
    onComplete(res);
  });
}
function requestByPathPost(path, data, onSuccess, onComplete) {
  request.wrapper({
    url: url.domain + path,
    method: "POST",
    data: data,
    header: {"Content-Type": "application/x-www-form-urlencoded"}
  }, res=>{
    console.log("requestByPath result: ",res);
    onSuccess(res);
  }, error=> {

  }, res=> {
    onComplete(res);
  });
}
/**首页 */
function home(index, onSuccess, onComplete) {
  requestByPath(url.home(index), onSuccess, onComplete)
}

function banner(onSuccess, onComplete) {
  requestByPath(url.banner, onSuccess, onComplete);
}

function nav(onSuccess, onComplete) {
  requestByPath(url.nav, onSuccess, onComplete);
}

function system(onSuccess, onComplete) {
  requestByPath(url.system, onSuccess, onComplete);
}


function article(index, cid,onSuccess, onComplete) {
  requestByPath(url.article(index, cid), onSuccess, onComplete);
}

function square(index,onSuccess, onComplete) {
  requestByPath(url.square(index), onSuccess, onComplete);
}

function wenda(index,onSuccess, onComplete) {
  requestByPath(url.wenda(index), onSuccess, onComplete);
}

function login(username, password,onSuccess, onComplete) {
  requestByPathPost(url.login,{username: username, password: password}, onSuccess, onComplete);
}
function register(username, password,repassword,onSuccess, onComplete) {
  requestByPathPost(url.regiter,{username: username, password: password, repassword: repassword}, onSuccess, onComplete);
}
//排名
function coin(onSuccess, onComplete) {
  requestByPath(url.coin, onSuccess, onComplete);
}

module.exports = {
  home: home,
  banner: banner,
  nav: nav,
  system: system,
  article: article,
  square: square,
  wenda: wenda,
  login: login,
  register: register,
  coin: coin
}