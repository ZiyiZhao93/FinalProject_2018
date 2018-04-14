import * as d3 from 'd3';
import csv from 'd3';
import "./style/main.css";

import {parse} from '../utils';//array

import PlaceChart from './rectbox.js';

import MainChart from './mainbox.js';

import CircleChart from './circlebox.js';

import WineChart from './winebox.js';

import SomeModule from './some-module';



Promise.all([
	d3.csv('../data/wine-data.csv', parse)
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
			return d.winename
		})
		// .rollup(function(v){
		// 	return v.length
		// })
		.entries(wineData);

// const len =	circleDatabyGrape.values.length;
// console.log(len);

		console.log(circleDatabyGrape);

	const circleDatabyWinery = d3.nest()
		.key(function(d){
			return d.winery
		})
		.rollup(function(v){
			return v.length
		})
		.entries(wineData);

		//console.log(circleDatabyWinery);

//////////////////////////////////////////////////////////////////

	const someModule = someModule();
	select('.winebox')
		.append('div')
		.attr('class', 'module')
		.each(someModule);

	const Scrollmagic = require('scrollmagic');

	const controller = new Scrollmagic.Controller();

	const scene1 = new Scrollmagic.Scene({
		triggerElement:'#mainbox'
		})
		.on('enter', () => {

		})
		.addTo(controller);

	const scene2 = new Scrollmagic.Scene({
		triggerElement:'#rectbox'
		})
		.on('enter', () => {
		select('.winebox')
			.style('background', 'lightblue');
		})
		.on('leave', () => {
			select('.winebox')
				.style('background', 'pink');
		})
		.addTo(controller);

	const scene3 = new Scrollmagic.Scene({
		triggerElement:'#circlebox'
		})
		.on('enter', () => {
			select('.winebox')
				.style('background','yellow');

		})
		.on('leave', () => {
			select('.winebox')
				.style('background','lightblue');

		})
		.addTo(controller);




	d3.select('#winebox')
		.datum(wineData)
		.each(WineChart()
			.grapename(circleDatabyGrape)
		);


	d3.select('#mainbox')
		.datum(wineData)
		.each(MainChart()
			.countryname(circleDatabyName)
		);


	d3.select('#rectbox')
		.datum(wineData)
		.each(PlaceChart());


	d3.select('#circlebox')
		.datum(wineData)
		.each(CircleChart()
			.countryname(circleDatabyName)
			.placename(circleDatabyPlace)
		);

//////////////////////////////////////////////////////////////////










});

