<template>
  <div class="DubllBarsTrend" ref="DubllBarsTrend"></div>
</template>

<script>
// Echarts
export default {
  name: "DubllBarsTrend",
  data() {
    return {
      Xdata:['04','05','06','07','08','09','10'],
      Ydata1:[2, 12, 34, 77, 60, 84, 54],//进入
      Ydata2:[2, 16, 52, 70, 61, 91, 92]//离开
    }
  },
  props:{
    DubllBarsTrendData:''
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.DubllBarsTrend);
      // 绘制图表
      var option = {
        // color: ["#F5A52D","#002FFF"],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  animation: false,
                  label: {
                      backgroundColor: '#ccc',
                      borderColor: '#aaa',
                      borderWidth: 1,
                      shadowBlur: 0,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      textStyle: {
                          color: '#222'
                      }
                  }
              }
          },
          xAxis: [{
            type: "category",
            name: '小时',
            boundaryGap: false,
            data: this.DubllBarsTrendData.namedata,
            splitLine:{show: false},//去除网格线
            splitArea : {show : false},//保留网格区域
            axisLabel: {
              inside: false,
              interval:0,
              textStyle: {
                color: "#CCCCCC"
              }
            },
            // X轴坐标
            axisTick: {
              show: false
            },
            //X轴线设置 
            axisLine: {
              show: true,
              type: "solid",
              lineStyle: {
                color: "#cccccc",
                width: "1"
              }
            },
            z: 10
          }],
          yAxis: {
            type: 'value',
            name: '人数',
            nameTextStyle: {
                padding: [0, 0, -27,33]
            },
            // 隐藏Y轴
            axisLine: {
              show: true,
              type: "solid",
              lineStyle: {
                color: "#cccccc",
                width: "1"
              }
            },
            //   隐藏网格线
            splitLine: {
              show: false
            },
            //   隐藏刻度标准
            axisTick: {
              show: false
            },
             z: 10
          },
          series: [{
              symbol: "none",
              data: this.DubllBarsTrendData.Ydata1,
              type: 'line',
              // smooth: true,
              areaStyle: {
                color: '#1791FF',
              },
              itemStyle: {
                normal: {
                  color: "#1A97FA",
                  label: {
                    show: false, //开启显示
                    position: "top", //在上方显示
                    textStyle: {
                      //数值样式
                      color: "#F5F5F5",
                      fontSize: 12,
                    }
                  }
                }
              },
              z:5
          },
          {
              symbol: "none",
              data: this.DubllBarsTrendData.Ydata2,
              type: 'line',
              // smooth: true,
              areaStyle: {
                color: '#FF8111',
              },
              itemStyle: {
                normal: {
                  color: "#F2C423",
                  label: {
                    show: false, //开启显示
                    position: "top", //在上方显示
                    textStyle: {
                      //数值样式
                      color: "#F5F5F5",
                      fontSize: 12,
                    }
                  }
                }
              }
          }],
          //控制边距　
          grid: {
            left: '15',
            right:'40',
            top: '40',
            bottom: '10',
            containLabel: true,
          },
      };

      myChart.setOption(option);
    }
  },
  mounted() {
    // 调用图表
    this.drawLine();
  }
};
</script>
<style lang="scss" scoped>
.DubllBarsTrend {
  width: 100%;
  height: 180px;
}
</style>