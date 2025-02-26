// component/coin-item/coin-item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    coin: {
      type: Object,
      value: {},
      observer:  function(newVal, oldVal) {
        this.setData({
          title: this.getTextAfterSecondSpace(newVal.desc),
          coinCount: newVal.coinCount,
          time: this.getTextBeforeSecondSpace(newVal.desc)
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    coinCount: 0,
    time: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTextBeforeSecondSpace(str) {
      // 找到第一个空格的位置
      const firstSpaceIndex = str.indexOf(' ');
      
      // 如果没有找到第一个空格，返回空字符串
      if (firstSpaceIndex === -1) {
        return '';
      }
      
      // 找到第二个空格的位置
      const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
      
      // 如果没有找到第二个空格，返回到字符串的结束
      if (secondSpaceIndex === -1) {
        return str.substring(0, firstSpaceIndex);
      }
      
      // 返回第一个和第二个空格之间的字符串部分
      return str.substring(0, secondSpaceIndex);
    },
    getTextAfterSecondSpace(str) {
      // 找到第一个空格的位置
      const firstSpaceIndex = str.indexOf(' ');
      
      // 如果没有找到第一个空格，返回空字符串
      if (firstSpaceIndex === -1) {
        return '';
      }
      
      // 找到第二个空格的位置
      const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
      
      // 如果没有找到第二个空格，返回到字符串的结束
      if (secondSpaceIndex === -1) {
        return str.substring(0, firstSpaceIndex);
      }
      
      // 返回第一个和第二个空格之间的字符串部分
      return str.substring(secondSpaceIndex, str.length);
    }
  }
})