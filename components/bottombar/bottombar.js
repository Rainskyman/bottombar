// components/bottombar/bottombar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    current:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      {
        "pagePath": "/pages/index1/index1",
        "iconPath": "/icon/1.png",
        "selectedIconPath": "/icon/_1.png",
        "text": "步行街"
      },
      {
        "pagePath": "/pages/index2/index2",
        "iconPath": "/icon/2.png",
        "selectedIconPath": "/icon/_2.png",
        "text": "发现"
      },
      {
        "pagePath": "/pages/index3/index3",
        "iconPath": "/icon/3.png",
        "selectedIconPath": "/icon/_3.png",
        "text": ""
      },
      {
        "pagePath": "/pages/index4/index4",
        "iconPath": "/icon/4.png",
        "selectedIconPath": "/icon/_4.png",
        "text": "消息"
      },
      {
        "pagePath": "/pages/index5/index5",
        "iconPath": "/icon/5.png",
        "selectedIconPath": "/icon/_5.png",
        "text": "我的"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(e){
      wx.redirectTo({
        url: e.currentTarget.dataset['path'],
      })
    }
  }
})
