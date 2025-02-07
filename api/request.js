const loading = require("../utils/loading.js");
const toast = require("../utils/toast.js");
function wrapper(request, onSuccess, onFail, onComplete) {
  loading.show('加载中...');
  console.log("【Request】", request);
  wx.request({
    url: request.url,
    data: request.data,
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
      console.error(error);
      var errorMsg = `【${error.data.errorCode}】${error.data.errorMsg}`
      toast.show(errorMsg);
      onFail && onFail(error);
    },
    complete: res=> {
      onComplete && onComplete(res)
    }
  });
}

module.exports = {
  wrapper: wrapper
}