// component/tags/tags.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: '',
    tagList: Array,
    index: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    tagStyle: "background-color: #f0f0f0;font-size: 28rpx;color: black;padding:12rpx 28rpx;border: 0rpx solid #f0f0f0;border-radius: 48rpx; box-sizing: border-box;margin: 24rpx 24rpx 0rpx 0rpx;display: inline-block;"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(res){
      let curTag = this.data.tagList[res.detail.data];
      console.log("发送tag事件", curTag);
      this.triggerEvent('OnClick', {data: curTag, index: this.properties.index}, {});
    }
  }
})