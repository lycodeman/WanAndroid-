// component/nav/nav.js
Component({

  options: {
    // multipleSlots: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    navHeight: 44,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    ready: function (params) {
      this.setData({
        statusBarHeight: wx.getWindowInfo().statusBarHeight
      })
    }
  }
})