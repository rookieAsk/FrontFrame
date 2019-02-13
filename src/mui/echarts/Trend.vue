<template>
  <div class="Trend" ref="Trend"></div>
</template>

<script>
// Echarts
export default {
  props:{
    timeDayData:''
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.Trend);
      // 绘制图表
      var option = {
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
            name: '日',
            boundaryGap: false,
            data: this.timeDayData.timeDataDay,
            splitLine:{show: false},//去除网格线
            splitArea : {show : false},//保留网格区域
            axisLabel: {
              inside: false,
              interval:4,//X轴坐标列表间隔
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
            name: '个',
            nameTextStyle: {
                padding: [0, 0, -20, 20]
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
          // dataZoom: [
          //     {
          //       type: 'inside',
          //       startValue:0,
          //       endValue:8
          //     }
          // ],
          series: [{
              symbol: "none",
              data: this.timeDayData.timeDataAmount,
              type: 'line',
              smooth: true,
              areaStyle: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#1791FF' // 0% 处的颜色
                  }, 
                  {
                    offset: 0.5, color: '#072453' // 50% 处的颜色
                  },{
                    offset: 1, color: '#050B33' // 100% 处的颜色
                  }],
                }
              },
              itemStyle: {
                normal: {
                  color: "#1791FF",
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
            left: '20',
            right:'27',
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
.Trend {
  width: 100%;
  height: 180px;
}
</style>