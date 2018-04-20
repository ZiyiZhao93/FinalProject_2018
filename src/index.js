import * as d3 from 'd3';
import {select} from 'd3';
import "./style/main.css";

import {parse} from '../utils';//array

import MainChart from './mainbox.js';

import WineChart from './winebox.js';

import SomeModule from './some-module';

//import PlaceChart from './rectbox.js';

//import CircleChart from './circlebox.js';



Promise.all([
	d3.csv('../data/wine-data-1.csv', parse)
	]).then(([wineData]) => {

		//console.log(wineData);

//////////////////////////////////////////////////////////////////

	const circleDatabyName = d3.nest()
		.key(function(d){
			return d.country
		})
		.rollup(function(v){
			return v.length
		})
		.entries(wineData);

		//console.log(circleDatabyName);

	const circleDatabyPlace = d3.nest()
		.key(function(d){	
			return d.place
		})
		.rollup(function(v){
			return v.length
		})
		.entries(wineData);

		//console.log(circleDatabyPlace);

	const circleDatabyWinename = d3.nest()
		.key(function(d){
			return d.winename
		})
		.rollup(function(v){
			return v.length
		})
		.entries(wineData);

	circleDatabyWinename.sort(function(a,b){
		return a["value"]-b["value"];
	})

		//console.log(circleDatabyWinename);

	const circleDatabyGrape = d3.nest()
		.key(function(d){
			return d.grape
		})
		.key(function(d){
			return d.fill
		})
		// .rollup(function(v){
		// 	return v.length
		// })
		.entries(wineData);

	//console.log(circleDatabyGrape);

// const len =	circleDatabyGrape.values.length;
// console.log(len);

		//console.log(circleDatabyGrape);

	const circleDatabyWinery = d3.nest()
		.key(function(d){
			return d.winery
		})
		.rollup(function(v){
			return v.length
		})
		.entries(wineData);

		//console.log(circleDatabyWinery);


	const circleDatabyColor = d3.nest()
		.key(function(d){
			return d.fill
		})
		.entries(wineData);

	//console.log(circleDatabyColor);

//////////////////////////////////////////////////////////////////


	d3.select('#winebox')
		.datum(wineData)
		.each(WineChart()
			.grapename(circleDatabyGrape)
			.colorname(circleDatabyColor)
		);


	d3.select('#mainbox')
		.datum(wineData)
		.each(MainChart()
			.countryname(circleDatabyName)
		);
/*

	d3.select('#rectbox')
		.datum(wineData)
		.each(PlaceChart());


	d3.select('#circlebox')
		.datum(wineData)
		.each(CircleChart()
			.countryname(circleDatabyName)
			.placename(circleDatabyPlace)
		);

*/

//////////////////////////////////////////////////////////////////
	
	const someModule = SomeModule();
	select('.app-container')
	.append('div')
	.attr('class','module')
	.each(someModule);

	const Scrollmagic = require('scrollmagic');

	const controller = new Scrollmagic.Controller();



	const scene1 = new Scrollmagic.Scene({
		triggerElement:'#scene-1'
	})
	.on('enter', () => {
		console.log('scene-1:enter')
	})
	.addTo(controller);



	const scene2 = new Scrollmagic.Scene({
		triggerElement:'#scene-2'
	})
	.on('enter', () => {
		console.log('scene-2:enter')
		select('.app-container')
			.style('background','lightblue');

		someModule.changeState({
			x:300,
			y:500,
			r:30
		});

	})
	.on('leave', () => {
		console.log('scene-2:end')
		select('.app-container')
			.style('background','pink');


		someModule.changeState({
			x:0,
			y:200,
			r:5
		});

	})
	.addTo(controller);

const scene3 = new Scrollmagic.Scene({
		triggerElement:'#scene-3'
	})
	.on('enter', () => {
		console.log('scene-3:enter')
		select('.app-container')
			.style('background','yellow');

	})
	.on('leave', () => {
		console.log('scene-3:end')
		select('.app-container')
			.style('background','lightblue');

	})
	.addTo(controller);

	





	




});










