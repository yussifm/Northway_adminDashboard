import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
	selector: "app-reports",
	templateUrl: "./reports.component.html",
	styleUrls: ["./reports.component.css"],
})
export class ReportsComponent implements OnInit {
	highcharts = Highcharts;

	chartOptions: Highcharts.Options = {
		title: {
			text: "Infosys stock value",
		},
		xAxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
		},
		yAxis: {
			title: {
				text: "Infosys Stock value in dollar",
			},
		},
		series: [
			{
				data: [12, 8, 43, 35, 20, 90, 100, 110],
				type: "line",
			},
		],
	};

	constructor() {}

	ngOnInit(): void {}
}
