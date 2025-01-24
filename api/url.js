const url = {
  domain: "https://www.wanandroid.com",
  banner: "/banner/json",
  home(index){
    return `/article/list/${index}/json`;
  }
}

module.exports = url