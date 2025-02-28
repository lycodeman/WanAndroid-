// pages/open/open.js
const colors = require("../../utils/colors");
const { navBack } = require("../../utils/nav");
const OpenEntity = require("./OpenEntity");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "开源项目",
    navBgColor: colors.C_ff0000,
    historyList: new Array(),
    navHeight: 0,
    openList: [
      new OpenEntity("goweii/RxHttp", "对RxJava2+Retrofit2+OkHttp3的封装", "https://github.com/goweii/RxHttp"),
      new OpenEntity("goweii/SwipeBack", "Android Activity滑动返回。支持4个方向，支持下层Activity联动和自定义动效", "https://github.com/goweii/SwipeBack"),
      new OpenEntity("goweii/LazyFragment", "懒加载Fragment，提供可见和隐藏的回调，支持在ViewPager中多重嵌套，支持support和androidx", "https://github.com/goweii/LazyFragment"),
      new OpenEntity("goweii/ActionBarEx", "高拓展高自定义性ActionBar，完美替代Android系统默认", "https://github.com/goweii/ActionBarEx"),
      new OpenEntity("goweii/AnyLayer", "用于替代Android自带Dialog和PopupWindow", "https://github.com/goweii/AnyLayer"),
      new OpenEntity("goweii/AnyDialog", "Android高定制性，高易用性Dialog。", "https://github.com/goweii/AnyDialog"),
      new OpenEntity("goweii/VisualEffect", "Used to achieve visual effects in Android, such as Gaussian blur, mosaic, watermark, etc.", "https://github.com/goweii/VisualEffect"),
      new OpenEntity("goweii/RevealLayout", "揭示效果布局，可以指定2个子布局，以圆形揭示效果切换选中状态", "https://github.com/goweii/RevealLayout"),
      new OpenEntity("goweii/PercentImageView", "自由指定宽高比的ImageView", "https://github.com/goweii/PercentImageView"),
      new OpenEntity("goweii/Blurred", "Android高斯模糊库", "https://github.com/goweii/Blurred")
      ,new OpenEntity("goweii/AnyPermission", "Android权限申请（运行时权限、未知应用安装权限、悬浮窗权限、显示通知和访问通知权限）", "https://github.com/goweii/AnyPermission"),
      new OpenEntity("goweii/KeyboardCompat", "Android软键盘兼容库，支持开启关闭监听和EditText获取焦点时布局上移", "https://github.com/goweii/KeyboardCompat"),
      new OpenEntity("JakeWharton/butterknife", "Bind Android views and callbacks to fields and methods.", "https://github.com/JakeWharton/butterknife"),
      new OpenEntity("greenrobot/EventBus", "Event bus for Android and Java that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality.", "https://github.com/greenrobot/EventBus"),
      new OpenEntity("google/gson", "A Java serialization/deserialization library to convert Java Objects into JSON and back", "https://github.com/google/gson"),
      new OpenEntity("franmontiel/PersistentCookieJar", "A persistent CookieJar implementation for OkHttp 3 based on SharedPreferences.", "https://github.com/franmontiel/PersistentCookieJar"),
      new OpenEntity("bumptech/glide", "An image loading and caching library for Android focused on smooth scrolling", "https://github.com/bumptech/glide"),
      new OpenEntity("CymChad/BaseRecyclerViewAdapterHelper", "BRVAH:Powerful and flexible RecyclerAdapter", "https://github.com/CymChad/BaseRecyclerViewAdapterHelper"),
      new OpenEntity("scwang90/SmartRefreshLayout", "下拉刷新、上拉加载、二级刷新、淘宝二楼、RefreshLayout、OverScroll，Android智能下拉刷新框架，支持越界回弹、越界拖动，具有极强的扩展性，集成了几十种炫酷的Header和 Footer。", "https://github.com/scwang90/SmartRefreshLayout"),
      new OpenEntity("vinc3m1/RoundedImageView", "A fast ImageView that supports rounded corners, ovals, and circles.", "https://github.com/vinc3m1/RoundedImageView"),
      new OpenEntity("hdodenhof/CircleImageView", "A circular ImageView for Android", "https://github.com/hdodenhof/CircleImageView"),
      new OpenEntity("hackware1993/MagicIndicator", "A powerful, customizable and extensible ViewPager indicator framework. As the best alternative of ViewPagerIndicator, TabLayout and PagerSlidingTabStrip —— 强大、可定制、易扩展的 ViewPager 指示器框架。是ViewPagerIndicator、TabLayout、PagerSlidingTabStrip的最佳替代品。支持角标，更支持在非ViewPager场景下使用（使用hide()、show()切换Fragment或使用setVisibility切换FrameLayout里的View等）", "https://github.com/hackware1993/MagicIndicator"),
      new OpenEntity("chrisbanes/PhotoView", "Implementation of ImageView for Android that supports zooming, by various touch gestures.", "https://github.com/chrisbanes/PhotoView"),
      new OpenEntity("zhanghai/MaterialProgressBar", "Material Design ProgressBar with consistent appearance", "https://github.com/zhanghai/MaterialProgressBar"),
      new OpenEntity("google/flexbox-layout", "Flexbox for Android", "https://github.com/google/flexbox-layout"),
      new OpenEntity("youth5201314/banner", "Android广告图片轮播控件，支持无限循环和多种主题，可以灵活设置轮播样式、动画、轮播和切换时间、位置、图片加载框架等！", "https://github.com/youth5201314/banner"),
      new OpenEntity("Kennyc1012/MultiStateView", "Android View that displays different content based on its state", "https://github.com/Kennyc1012/MultiStateView"),
      new OpenEntity("JakeWharton/DiskLruCache", "Java implementation of a Disk-based LRU cache which specifically targets Android compatibility.", "https://github.com/JakeWharton/DiskLruCache"),
      new OpenEntity("daimajia/AndroidSwipeLayout", "The Most Powerful Swipe Layout!", "https://github.com/daimajia/AndroidSwipeLayout")
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      navHeight: wx.getWindowInfo().statusBarHeight + 44,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onBack(){
    navBack()
  },
})