const CacheKey = require("../utils/cache");
const login = require("../utils/login");

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
  },
  wenda(index){
    return `/wenda/list/${index}/json`;
  },
  login: "/user/login",
  regiter: "/user/register",
  logout: "/user/logout/json",
  coin :"/lg/coin/userinfo/json",
  collectList(index){
    return `/lg/collect/list/${index}/json`;
  },
  addCollect(id){
    return `/lg/collect/${id}/json`;
  },
  removeCollect(id){
    return `/lg/uncollect/${id}/json`;
  },
  removeCollectByOriginId(id){
    return `/lg/uncollect_originId/${id}/json`;
  },
  coinList(page){
    return `/lg/coin/list/${page}/json`;
  },
  coinRankList(page){
    return `/coin/rank/${page}/json`;
  },
  shareArticles(page){
    let userInfo = wx.getStorageSync(CacheKey.userInfo)
    return `/user/${userInfo.id}/share_articles/${page}/json`;
  },
  priArticles(page){
    return `/user/lg/private_articles/${page}/json`;
  },
  addShare(){
    return `/lg/user_article/add/json`;
  },
}

module.exports = url