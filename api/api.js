const request = require("./request.js");
const url = require("./url.js");
/**首页 */
function home(index, onSuccess, onComplete) {
  request.wrapper({
    url: url.domain + url.home(index)
  }, res=>{
    console.log("====",res);
    onSuccess(res);
  }, error=> {

  }, res=> {
    onComplete(res);
  });
}

function banner(onSuccess, onComplete) {
  request.wrapper({
    url: url.domain + url.banner
  }, res=>{
    console.log("====",res);
    onSuccess(res);
  }, error=> {

  }, res=> {
    onComplete(res);
  });
}


module.exports = {
  home: home,
  banner: banner
}