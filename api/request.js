const loading = require("../utils/loading.js");
const toast = require("../utils/toast.js");
const cache = require("../utils/cache.js");
const { isLogin } = require("../utils/login.js");
function wrapper(request, onSuccess, onFail, onComplete) {
  loading.show('加载中...');
  if(isLogin()){
    request.cookies = wx.getStorageSync(cache.cookies);
    if(request.header){
      request.header = {...request.header, "Cookie": request.cookies}
    }else {
      request.header = {"Cookie": request.cookies}
    }
  }
  console.log("【Request】", request);
  wx.request({
    url: request.url,
    data: request.data,
    cookies: request.cookies,
    method: request.method,
    header: request.header,
    timeout: request.timeout,
    success: res=>{
      loading.hide();
      console.log("【Response】" , res.data);
      onSuccess && onSuccess(res.data.data);
    },
    fail: error=> {
      loading.hide();
      console.error("【Request Error】",error);
      var errorMsg = `【${error.data.errorCode}】${error.data.errorMsg}`
      toast.show(errorMsg);
      onFail && onFail(error);
    },
    complete: res=> {
      loading.hide();
      console.log("【Complete】",res);
      var errorMsg = `【${res.data.errorCode}】${res.data.errorMsg}`
      if(res.data.errorMsg.length > 0){
        toast.show(errorMsg);
      }
      onComplete && onComplete(res)
    }
  });
}

module.exports = {
  wrapper: wrapper
}