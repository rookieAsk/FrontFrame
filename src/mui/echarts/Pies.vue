<template>
  <div class="pies" ref="myEchart"></div>
</template>

<script>
// Echarts
export default {
  name: "",
  props:{
    Piesdata:''
  },
  methods: {
    drawLine() {
      let _this = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myEchart);
      // 绘制图表
      let option = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: "horizontal",
          // width:"250",
          // left: "90",
          // right: "90",
          // top: "280",
          // data: this.Piesdata.Xdata,
          // textStyle: {
          //   color: '#00A3FA'
          // }
          orient: "vertical",
          left: "115",
          right: "150",
          top: "230",
          data: this.Piesdata.Xdata,
          textStyle: {
            color: '#00A3FA'
          }
        },
        series: [
          {
            name: "智慧告警",
            type: "pie",
            radius: "20%",
            center: ["50%", "37%"],
            radius: [35, 80],
            data: this.Piesdata.Ydata.sort(function(a, b) {
              return a.value - b.value;
            }),
            // 改变饼图风格
            // roseType: "radius",
            // 引导字体样式
            label: {
              normal: {
                formatter: "{b}:{d}%",
                textStyle: {
                  color: "#0EB0F8"
                }
              }
            },
            // 引导线样式
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#00A3FA"
                },
                smooth: 0.2,
                length: 5,
                length2: 8
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = [
                    "#088DFB",
                    "#EF9B2A",
                    "#04D06D",
                    "#E83659",
                    "#F8CE57",
                    "#F460B1",
                    "#1039F3",
                    "#CA33EE",
                    "#28EEF0"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
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
.pies {
  height: 368px;
  width: 396px;
  margin-left: 31px;
  background: #0E0943;
  background-size: 100% 100%;
  margin-top: 20px;
}
</style>