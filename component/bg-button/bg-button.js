// component/bgbutton/bg-button.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    btStyle: null,
    btEnableStyle: null,
    text: '',
    isEnable: false
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
    onClick(){
      console.log("onClick",this.data.isEnable)
      if(this.data.isEnable){
        this.triggerEvent('OnClick', {}, {});
      }
    }
  }
})