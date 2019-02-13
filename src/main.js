// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'
// 引入vuex仓库
import store from './store'
// 引入echarts
import echarts from 'echarts'
// 引入地图
// import VueAMap from 'vue-amap'
// 引入时间日期
// import V2Datepicker from 'v2-datepicker'
// import 'v2-datepicker/lib/index.css';
// 引入视频
// import VideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import 'videojs-flash'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'
// import 'videojs-contrib-hls.js/src/videojs.hlsjs'

// 使用地图
// Vue.use(VueAMap);
// VueAMap.initAMapApiLoader({
//   key: '1c4fca338bbe1b7eb2598f5bc42db911',
//   plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
//   uiVersion: '1.0', // ui库版本，不配置不加载,
//   v: '1.4.4'
// });
// 使用时间日期
// Vue.use(V2Datepicker)
// 使用视频
// Vue.use(VideoPlayer)
// 使用echarts
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
