import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * 状态监听
 */
const store = new Vuex.Store({})
store.registerModule('vux', {
  state: {
    // active: '7',
  },
  mutations: {
    // uploadActive(state, active){
    //   state.active = active
    // }
  },
  getters: {},
  actions: {},
  moudles: {}
})
/**
 * 出口
 */
export default store
