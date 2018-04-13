import * as d3 from 'd3';
import csv from 'd3';
import "./style/main.css";

import {parse} from '../utils';//array

import PlaceChart from './rectbox.js';

//import MainChart from './mainbox.js';

import CircleChart from './circlebox.js';

//const circlechartTest = CircleChart();




Promise.all([
	d3.csv('../data/wine-data.csv', parse)
	]).then(([wineData]) => {

		//console.log(wineData);

		const circleDatabyPoints = d3.nest()
		.key(function(d){
			return d.points
		})
		.entries(wineData);

		//console.log(circleDatabyPoints);

		const circleDatabyEighty = circleDatabyPoints.filter(d => d.key == 80);

		//console.log(circleDatabyEighty);

		const circleDatabyPlace = d3.nest()
		.key(function(d){	
			return d.place
		})
		.entries(wineData);

		//console.log(circleDatabyPlace);

		const circleDatabyName = d3.nest()
			.key(function(d){
				return d.country
			})
			.entries(wineData);

		//console.log(circleDatabyName);



/////////////////////////////////////////////////////////////////////////////////
		// d3.select('#mainbox')
		// 	.datum(wineData)
		// 	.each(MainChart);


/////////////////////////////////////////////////////////////////////////////////

		d3.select('#rectbox')
			.datum(wineData)
			.each(PlaceChart);


/////////////////////////////////////////////////////////////////////////////////

	/*
		d3.select('#circlebox')
			.datum(wineData)
			.each(CircleChart);
	*/











});

