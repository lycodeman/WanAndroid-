function navWeb(url, hideTitle) {
  wx.navigateTo({
    url: `/pages/webview/webview?url=${url}&hideTitle=${hideTitle}`,
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
module.exports = {
  navWeb: navWeb,
  navArticle: navArticle,
  navLogin: navLogin,
  navBack: navBack
}