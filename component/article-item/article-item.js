// component/articleItem/article-item.js
const date = require('../../utils/date');
const nav = require('../../utils/nav');
Component({
  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {
    article: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal) {
        // 属性值变化时执行
        let isNew = date.isToday(newVal.publishTime)
        this.setData({
          isNew: isNew
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isNew: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    collect() {
      console.log("收藏")
    },
    onClick(){
      console.log("跳转到详情:",this.data.article.link)
      nav.navWeb(this.data.article.link, true)
    }
  }
})