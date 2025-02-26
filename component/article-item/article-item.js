// component/articleItem/article-item.js
const api = require('../../api/api');
const { article } = require('../../api/url');
const date = require('../../utils/date');
const nav = require('../../utils/nav');
const storage = require('../../utils/storage');
const toast = require('../../utils/toast');
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
        if(desc != undefined && desc != null && desc.length != 0){
          desc = this.formatText(desc);
        }
        this.setData({
          isNew: isNew,
          descFormat: desc,
          collect: newVal.collect,
          chapter: this.getChapter(newVal),
          author: this.getAuthor(newVal)
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isNew: false,
    desc: '',
    collect: false,
    chapter: '',
    author: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    collect() {
      // console.log("收藏")
      if(!this.data.collect){
        api.addCollect(this.properties.article.id, res=>{
          toast.show("收藏成功")
          this.setData({
            collect : !this.data.collect
          }, res=> {
            this.triggerEvent('OnCollectChanged', {isCollect: this.data.collect, id: this.properties.article.id}, {})
          })
        })
      }else {
        api.removeCollect(this.properties.article.id, -1,res=>{
          toast.show("取消收藏")
          this.setData({
            collect : !this.data.collect
          }, res=> {
            this.triggerEvent('OnCollectChanged', {isCollect: this.data.collect, id: this.properties.article.id}, {})
          })
         
        })
      }
    
    },
    onClick(){
      console.log("跳转到详情:",this.data.article.link)
      //缓存历史浏览记录
      storage.saveHistory(this.data.article)
      nav.navWeb(this.data.article.link, true, this.data.article.id, this.data.article.title)
    },
    formatText(htmlString){
      // 使用正则表达式提取所有 <p> 标签的内容
      let regex = /<([a-z]+)[^>]*>(.*?)<\/\1>/gs;
      let result = [];
      let match;
      while ((match = regex.exec(htmlString)) !== null) {
        result.push(match[2].replace(/<[^>]+>/g, '').trim().replace(/[\n\r\s]+/g, ' ').trim());  // 提取去掉标签后的内容
      }
      // console.log("【"+htmlString+ "】"+result);
      return result;
    },
    getChapter(article){
      let cha = ""
      if (article.superChapterName && article.superChapterName.length > 0) {
        cha = article.superChapterName
      }
      if (article.chapterName && article.chapterName.length > 0) {
        if (cha.length > 0){
          cha = cha + "・" + article.chapterName
        }else {
          cha = article.chapterName
        }
      }
      return cha
    },
    getAuthor(article){
      if (article.author && article.author.length > 0) {
        return article.author;
      }
      if (article.shareUser && article.shareUser.length > 0) {
        return article.shareUser;
      }
      return '匿名'
    }
  }
})