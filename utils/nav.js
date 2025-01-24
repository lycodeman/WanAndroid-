function navWeb(url, hideTitle) {
  wx.navigateTo({
    url: `/pages/webview/webview?url=${url}&hideTitle=${hideTitle}`,
  })
};
module.exports = {
  navWeb: navWeb
}