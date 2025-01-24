// component/tab/tab.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    initIndex: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal) {
        // 属性值变化时执行
        this.setData({
          curIndex: newVal
        });
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onTab(tab, index){
      console.log(tab.currentTarget.dataset.tab);
      console.log(tab);
      this.setData({
        curIndex: index
      });
      this.triggerEvent('onTab', tab.currentTarget.dataset.tab, {});
    }
  }
})