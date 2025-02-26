const nav = require("../../utils/nav")
const util = require("../../utils/util")

// component/history-item/history-item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: '',
    time: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setData({
          formatTime: util.formatTime(new Date(new Number(newVal)))
        })
      }
    },
    link: '',
    formatTime: ""
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      nav.navWeb(this.properties.link, this.properties.id, this.properties.title)
    }
  }
})