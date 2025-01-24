// component/line/line.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String,
      value: '100%',
      observer: function(newVal, oldVal) {
        // 属性值变化时执行
      }
    },
    height: {
      type: String,
      value: '2rpx',
      observer: function(newVal, oldVal) {
        // 属性值变化时执行
      }
    },
    color: {
      type: String,
      value: '#e9e9e9',
      observer: function(newVal, oldVal) {
        // 属性值变化时执行
       
      }
    }

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

  }
})