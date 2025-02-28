// component/tag/tag.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    tagName: {
      type: String,
      value: {},
      observer: function(newVal, oldVal) {
        // console.log('tag 000===',newVal)
        // 属性值变化时执行
      }
    },
    url: {
      type: String,
      value: {},
      observer: function(newVal, oldVal) {
        // 属性值变化时执行
       
      }
    },
    tagStyle: null
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
    onClick(ev){
      console.log("点击了tag ：",ev);
      this.triggerEvent('OnClick', {data: ev.currentTarget.dataset.url}, {});
    }
  }
})