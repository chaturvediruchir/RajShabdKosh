import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';

import * as Highcharts from 'highcharts';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-upload-graph',
  templateUrl: './upload-graph.component.html',
  styleUrls: ['./upload-graph.component.scss']
})
export class UploadGraphComponent implements OnInit,AfterViewInit {
  title = 'app';

  @ViewChild('chartTarget')
  chartTarget: ElementRef;
  options: any;
  chart: Highcharts.ChartObject;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initOptions();
    this.chart = this.chart(this.chartTarget.nativeElement, this.options as any);
  }

  initOptions() {
    this.options = {
      chart: {
        type: 'solidgauge'
      },
      title: {
        text: 'Solid Gauge Demo'
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: 'white',
          innerRadius: '60%',
          outerRadius: '90%',
          shape: 'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      // the value axis
      yAxis: {
        stops: [
          [0.5, 'green'], // green
          [0.6, 'yellow'], // yellow
          [0.9, '#DF5353'] // red
        ],
        length: 5,
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70
        },
        labels: {
          y: 16
        },
        min: 0,
        max: 200,
        plotBands: [
          { from: 0, to: 100, color: 'green' },
          { from: 100, to: 120, color: 'yellow' },
          { from: 120, to: 200, color: 'red' }
        ]
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      series: [
        {
          data: [80]
        }
      ]
    };
  }
}
