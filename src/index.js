import * as d3 from 'd3';
import "./style/main.css";

import {parse} from '../utils';//array


Promise.all([
	d3.csv('./data/winemag-data_first150k.csv', parse)])
	.then(([wineData]) => {
	console.log(wineData);


  	//const points = d3.map(wineData, d => d.points);
  	//const price = d3.map(wineData, d => d.price);

  	const margin = {t:10,r:20,b:10,l:20};
  	const w_svg = document.getElementById('mainbox').clientWidth;
  	const h_svg = document.getElementById('mainbox').clientHeight;
	const w = document.getElementById('mainbox').clientWidth-margin.l-margin.r,
      	  h = document.getElementById('mainbox').clientHeight-margin.t-margin.b;

    console.log(w,h);

	let svgMain = d3.select('#mainbox')
		.append('svg')
		.attr('width', w_svg)
		.attr('height', h_svg);

	let plot = svgMain
		.append('g')
		.attr('width', w)
		.attr('height', h);

	const scaleX = d3.scaleLinear().domain([79,100]).range([0,w]);
	const maxVolume = 2500;
	const scaleY = d3.scaleLinear().domain([0, maxVolume]).range([h,0]);

	const axisY = d3.axisLeft()
		.scale(scaleY)
		.tickSize(-w)
		.ticks(5);

	const axisX = d3.axisBottom()
		.scale(scaleX)
		.ticks(5);

	const axisXNode = plot
		.selectAll('.axis-x')
		.data([1]);
	const axisXNodeEnter = axisXNode.enter()
		.append('g')
		.attr('class','axis axis-x');
		axisXNode.merge(axisXNodeEnter)
		.attr('transform',`translate(0,${h})`)
		.call(axisX);

	const axisYNode = plot
		.selectAll('.axis-y')
		.data([1]);
	const axisYNodeEnter = axisYNode.enter()
		.append('g')
		.attr('class','axis axis-y');
	axisYNode.merge(axisYNodeEnter)
	
		.call(axisY);

	const binsUpdate = plot
		.selectAll('.circle')
		.data(wineData);

		//Enter
	const binsEnter = binsUpdate.enter()
		.append('circle')
		.attr('class','circle') //If you forget this, what will happen if we re-run this the activityHistogram function?
		.attr('cx', function(d) {
			return scaleX(d.points)})
		.attr('cy', function(d){
			//console.log(d.price)
			return scaleY(d.price)})
		.attr('r', 5)
		.attr('fill', 'none')
		.attr('stroke', '#3C92BA')
  		.attr('stroke-width', 1);

		//Enter + update
	binsEnter.merge(binsUpdate);
		//.transition()
		//.duration(500)
		//.attr('r', 6)
		//.style('fill','rgba(0,0,0,.1)');

		//Exit
	binsUpdate.exit().remove();


});

















