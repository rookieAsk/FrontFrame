<template>
  <div id="Bars" ref="myEchart"></div>
</template>

<script>
// Echarts
export default {
  name: "Bars",
  props:{
    NowMonthViolation:''
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myEchart);
      // 绘制图表
      var option = {
        backgroundColor: "transparent",
        // color: "#002FFF", //柱图形颜色
        //   标题方块设置
        // legend: {
        //   data: "月度告警数量",
        //   orient: 'horizontal',
        //   backgroundColor: "rgba(0,30,255,1)",
        //   itemWidth: 40,
        //   itemHeight: 20,
        //   //   borderWidth: 1,
        //   //   borderHeight: 2,
        //   borderColor: "rgba(0,30,255,1)",
        //   x: "12",
        //   y: "9"
        // },
        //标题设置
        // title: {
        //   text: "月度告警数量",
        //   x: "20",
        //   y: "0",
        //   textStyle: {
        //     color: "#CCCCCC",
        //     fontSize: 16
        //   }
        // },
        xAxis: [
          {
            type: "category",
            // name: '设备',
            // nameTextStyle: {
            //     padding: [0, 0, 0, -10]
            // },
            data: this.NowMonthViolation.deviceTypeName,
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
          }
        ],
        yAxis: {
          name: '个', 
          nameTextStyle: {
              padding: [0, 0, -20, 30]
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
          //   隐藏刻度标准
          axisTick: {
            show: false
          },
          //   隐藏刻度
          axisLabel: {
            show: true,
            inside: false,
            interval:0,
            textStyle: {
              color: "#CCCCCC"
            }
          },
          //   隐藏网格线
          splitLine: {
            show: false
          }
        },
        // dataZoom: [
        //     {
        //         type: 'inside'
        //     }
        // ],
        //数据
        series: [
          {
            name: "月度告警数量",
            type: "bar",
            // 柱子的宽度
            barWidth: "10",
            data: this.NowMonthViolation.amount,
            itemStyle: {
              // 柱子样式
              normal: {
                barBorderRadius:[10, 10, 0, 0],
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#F5F5F5",
                    fontSize: 12
                  }
                },
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#002FFF' // 0% 处的颜色
                  },{
                    offset: 1, color: '#006EFF' // 100% 处的颜色
                  }]
                }
              },
              //鼠标移上去效果
              emphasis: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#008EFF' // 0% 处的颜色
                  },{
                    offset: 1, color: '#000FFF' // 100% 处的颜色
                  }]
                }
                
              }
            }
          }
        ],
        grid: {
            left: '15',
            right:'0',
            top: '40',
            bottom: '10',
            containLabel: true,
        }
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
#Bars {
  width: 100%;
  height: 180px;
}
</style>