<template>
  <div class="overview">
    <ul class="overviewConter">
      <li v-for="(item,index) in overviewConter" @click="select(index,item.typeCod);BuildingControBtn()" :class="{'overviewConterLiSelect': index == active}" class="overviewConterLi">
        <div class="overviewConterLiLeft" :style="{'background':'url('+item.overviewConterbackground+')no-repeat center top'}"></div>
        <div class="overviewConterLiRight">
          <p class="overviewConterLiName">{{item.overviewConterName}}<span :class="{'Warning': item.alertState == 1}"></span></p>
          <p class="overviewConterLiNum">{{item.amount}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入vuex仓库store
import store from '../../store';
import {mapState} from 'vuex';
import axios from 'axios';

export default {
  name: "overview",
  data() {
    return {
      overviewConter:[
        {overviewConterName:'停车棚',overviewConterbackground:require('../../assets/img/tcp.png'),typeCod:'2'},
        {overviewConterName:'消防通道',overviewConterbackground:require('../../assets/img/xftd.png'),typeCod:'4'},
        {overviewConterName:'居家安防',overviewConterbackground:require('../../assets/img/jjaf.png'),typeCod:'3'},
        {overviewConterName:'楼道烟感',overviewConterbackground:require('../../assets/img/ldyg.png'),typeCod:'5'},
        {overviewConterName:'消防栓',overviewConterbackground:require('../../assets/img/xfs.png'),typeCod:'6'},
        {overviewConterName:'摄像头',overviewConterbackground:require('../../assets/img/sxt.png'),typeCod:'7'},
        {overviewConterName:'路灯',overviewConterbackground:require('../../assets/img/ld.png'),typeCod:'8'}
      ]
    }
  },
  props: {
    OverviewData:'',
    url:''
  },
  created() {
    let OverviewData = this.OverviewData;
    OverviewData.map(function(item,index){
      if(item.type == "1_2"){
        item.sorts = 0;
      } else if(item.type == "4"){
        item.sorts = 1;
      }else if(item.type == "3"){
        item.sorts = 2;
      }else if(item.type == "5"){
        item.sorts = 3;
      }else if(item.type == "6"){
         item.sorts = 4;
      }else if(item.type == "7"){
        item.sorts = 5;
      }else if(item.type == "8"){
        item.sorts = 6;  
      }
    })
    OverviewData.sort(function(a,b){
      var value1 = a.sorts;
      var value2 = b.sorts;
      return value1 - value2;
    })
    this.overviewConter.map(function(item,index){
      OverviewData.map(function(items,indexs){
        if(index == indexs){
          Object.assign(item,items)
        }
      })
    })
  },
   computed: {
    ...mapState({
      active: state => state.vux.active
    })
  },
  methods: {
    // 请求方法
    getParams(_this, url, Data, callBack){
      axios.get(url, {params:Data}).then(function(data){
        callBack(data)
      })
    },
    select(index,typeCod){
      let _this = this;
      store.commit('uploadActive', index);//自定义状态，点击点
      store.commit('uploadTypeCod',typeCod);//后台状态，点击点
      // 获取点击设备的位置信息及状态
      let Data = {type:typeCod}
      _this.getParams(_this, _this.url+'/device/get-device-location', Data, function(data){
        store.commit('uploadStatusAddress',data.data.data)
        // console.log(data.data.data,typeCod)
      })
    },
    BuildingControBtn(){
      store.commit('uploadBuildingControClose')
    }
  },
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
.overviewConterLiSelect{
  background: url("../../assets/img/bg1.png")no-repeat center top;
  background-size: 100% 100%;
}
.Warning{
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url("../../assets/img/zhuyi.png")no-repeat center center;
    background-size: 300% 300%;
    vertical-align: middle;
    margin-left: 3px;
}
.overview {
  width: 396px;
  height: 300px;
  padding: 30px 0 21px 0;
  background: #0E0943;
  background-size: 100% 100%;
  margin: 20px 0 0 31px;
  .overviewConter{
    .overviewConterLi{
      float: left;
      width: 198px;
      height: 72px;
      .overviewConterLiLeft{
        width: 54px;
        height: 54px;
        float: left;
        vertical-align: middle;
        background: url("../../assets/img/tcp.png")no-repeat center top;
        background-size: 100% 100%;
        margin: 9px 0 0 40px;
      }
      .overviewConterLiRight{
        float: left;
        margin-left: 5px;
        .overviewConterLiName{
          color: white;
          font-size: 16px;
          margin-top: 14px;
        }
        .overviewConterLiNum{
          color: #32BEF4;
          font-size: 26px;
          line-height: 26px;
          font-weight: 800;
        }
      }
    }
  }
}
</style>