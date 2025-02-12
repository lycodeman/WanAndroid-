// component/input-item/input-item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    config: Object,
    isFocus: false
  },

  /**
   * 组件的初始数据
   */
  data: {
    content: '',
    eyeFocus: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    blur(event) {
      this.setData({
        isFocus: false,
        content: event.detail.value 
      })
    },
    focus() {
      this.setData({
        isFocus: true
      })
    },
    confirm(event){
      this.setData({
        isFocus: false,
        content: event.detail.value 
      })
    },
    input(event){
      // console.log(event)
      this.setData({
        isFocus: true,
        content: event.detail.value 
      })
      this.triggerEvent('TextChange',{content: event.detail.value}, {})
    },
    clear(){
      this.setData({
        content: ""
      })
    },
    eyeClick(){
      this.setData({
        eyeFocus: !this.data.eyeFocus
      })
    }
  }
})