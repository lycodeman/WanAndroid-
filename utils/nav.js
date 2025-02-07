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
module.exports = {
  navWeb: navWeb,
  navArticle: navArticle
}