function navWeb(url, hideTitle, id, title, ) {
  wx.navigateTo({
    url: `/pages/webview/webview?url=${url}&hideTitle=${hideTitle}&id=${id}&title=${title}`,
  })
};
function navArticle(title, groups) {
  wx.navigateTo({
    url: `/pages/article/article?title=${title}&groups=${groups}`,
  })
};
function navLogin(events) {
  wx.navigateTo({
    url: `/pages/login/login`,
    events: events
  })
};

function navBack(){
  wx.navigateBack({
    delta: 1
  });
}

function navHistory() {
  wx.navigateTo({
    url: `/pages/history/history`,
  })
}

function navShare() {
  wx.navigateTo({
    url: `/pages/share/share`,
  })
}
function navCollect() {
  wx.navigateTo({
    url: `/pages/collect/collect`,
  })
}
function navIntegral() {
  wx.navigateTo({
    url: `/pages/integral/integral`,
  })
}
function navBookmark() {
  wx.navigateTo({
    url: `/pages/bookmark/bookmark`,
  })
}
function navCoinRank() {
  wx.navigateTo({
    url: `/pages/coinrank/coinrank`,
  })
}
function addShare(events) {
  wx.navigateTo({
    url: `/pages/addshare/addshare`,
    events: events
  })
}
function navSeeting(events) {
  wx.navigateTo({
    url: `/pages/setting/setting`,
    events: events
  })
}
function navOpen() {
  wx.navigateTo({
    url: '/pages/open/open',
  })
}

function navSearch() {
  wx.navigateTo({
    url: '/pages/search/search',
  })
}
module.exports = {
  navWeb: navWeb,
  navArticle: navArticle,
  navLogin: navLogin,
  navBack: navBack,
  navHistory: navHistory,
  navBookmark: navBookmark,
  navIntegral: navIntegral,
  navCollect: navCollect,
  navShare: navShare,
  navCoinRank: navCoinRank,
  addShare: addShare,
  navSeeting: navSeeting,
  navOpen: navOpen,
  navSearch: navSearch,
}