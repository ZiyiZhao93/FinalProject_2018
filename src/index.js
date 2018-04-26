import * as d3 from 'd3';
import {select} from 'd3';
import "./style/main.css";

import {parse} from '../utils';//array

import WineChart from './winebox.js';

import StateChart from './statebox.js';

//import SomeModule from './some-module';

import UsChart from './usbox.js';

import OtherChart from './otherbox.js';

import CountryChart from './countrybox.js';



Promise.all([
	d3.csv('../data/wine-data.csv', parse),
	d3.csv('../data/wine-data-us.csv', parse),
	d3.csv('../data/countrywithoutUS.csv', parse)
	]).then(([wineData, usData, otherData]) => {

	//console.log(wineData);
	console.log(usData);
	console.log(otherData);

//////////////////////////////////////////////////////////////////

	const circleDatabyCountry = d3.nest()
		.key(function(d){
			return d.country
		})
		// .rollup(function(v){
		// 	return v.length
		// })
		.entries(wineData);

	//console.log(circleDatabyCountry);

	const circleDatabyPlace = d3.nest()
		.key(function(d){	
			return d.place;
		})
		.key(function(d){
			return d.fill;
		})
		// .rollup(function(v){
		// 	return v.length
		// })
		.entries(wineData);

	//console.log(circleDatabyPlace);

	// const circleDatabyAsia = circleDatabyPlace.filter(d => d.key == '#91C5AA');

	// console.log(circleDatabyAsia);

	const circleDatabyColor = d3.nest()
		.key(function(d){
			return d.fill;
		})
		.entries(wineData);

	//console.log(circleDatabyColor);

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
		// .rollup(function(v){
		// 	return v.length
		// })
		.entries(wineData);

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



	

//////////////////////////////////////////////////////////////////

	d3.select('#statebox')
		.datum(wineData)
		.each(StateChart()
			.placename(circleDatabyPlace)
		);

	d3.select('#usbox')
		.datum(usData)
		.each(UsChart());

	d3.select('#otherbox')
		.datum(otherData)
		.each(OtherChart());


	d3.select('#countrybox')
		.datum(wineData)
		.each(CountryChart());

	d3.select('#winebox')
		.datum(wineData)
		.each(WineChart());

//////////////////////////////////////////////////////////////////
	




});










