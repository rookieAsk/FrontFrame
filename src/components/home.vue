<template>
  <div class="homeContent" id="homeContent">
    
  </div>
</template>

<script>
// 导入axios
import Vue from 'vue'
import axios from 'axios';
import qs from 'qs';
Vue.prototype.$qs = qs
// 导入vuex仓库store
import store from '../store';
import {mapState} from 'vuex';

export default {
  name: "home",
  data() {
    return {
      // url:"/bigdata/smart_community",
      // 使用代理地址
      // url:"/api/bigdata/smart_community",
    }
  },
  components:{
    
  },
  computed: {
    // ...mapState({
    //   active: state => state.vux.active
    // })
  },
  methods:{
    // 请求方法
    getParams(_this, url, Data, callBack){
      axios.get(url, {params:Data}).then(function(data){
        callBack(data)
      })
    }
  },
  created () {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
