const url = {
  domain: "https://www.wanandroid.com",
  banner: "/banner/json",
  home(index){
    return `/article/list/${index}/json`;
  },
  system: "/tree/json",
  nav: "/navi/json",
  article(index, cid){
    return `/article/list/${index}/json?cid=${cid}`;
  },
  square(index){
    return `/user_article/list/${index}/json`;
  }
}

module.exports = url