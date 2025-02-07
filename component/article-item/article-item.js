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
        let desc = newVal.desc;
        if(desc != undefined && desc != null){
          desc = this.formatText(desc);
        }
        this.setData({
          isNew: isNew,
          descFormat: desc
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isNew: false,
    desc: ''
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
    },
    formatText(htmlString){
      // 使用正则表达式提取所有 <p> 标签的内容
      let regex = /<([a-z]+)[^>]*>(.*?)<\/\1>/gs;
      let result = [];
      let match;
      while ((match = regex.exec(htmlString)) !== null) {
        result.push(match[2].replace(/<[^>]+>/g, '').trim().replace(/[\n\r\s]+/g, ' ').trim());  // 提取去掉标签后的内容
      }

      console.log(result);
      return result;
    }
  }
})