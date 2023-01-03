import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z',]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320,1200,1500,1253,1290,1600,1730,1780,1877,1888,1988,1900,1766,1900,1977,1866,1700,1988,1900,1766,1900,1977,1866,1700],
      type: 'line',
      areaStyle: {}
    }
  ],
  dataZoom:[
    {
      type: 'slider',
      show: true,
      start: 0,
      end: 100,
      handleSize: 8
    },
    {
      type: 'inside',
      start: 0,
      end: 100
    },
    {
      type: 'slider',
      show: true,
      yAxisIndex: 0,
      filterMode: 'empty',
      width: 12,
      height: '70%',
      handleSize: 8,
      showDataShadow: false,
      left: '93%'
    },
    


],
tooltip: {
  trigger: 'axis',
  axisPointer: {
    type: 'cross',
    animation: false,
    label: {
      backgroundColor: '#505765'
    }
  }
},
};

option && myChart.setOption(option);

  }

}
