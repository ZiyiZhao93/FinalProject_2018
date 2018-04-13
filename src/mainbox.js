import * as d3 from 'd3';
import './style/main.css';


function MainChart(_) {

	console.log('here');


	function exports(data,i){

		//console.log(data);
		const root = this;
		console.log(root);

	//const points = d3.map(data, d => d.points);
	//const price = d3.map(data, d => d.price);

  	const margin = {t:10,r:20,b:10,l:20};
  	const w_svg = document.getElementById('#mainbox').clientWidth+margin.l*2+margin.r*2;
  	const h_svg = document.getElementById('#mainbox').clientHeight+margin.l*2+margin.r*2;
	const w = width-margin.l-margin.r;
    const h = height-margin.t-margin.b;

	const svgMain = d3.select(root)
		.selectAll('svg')
		.
		.attr('width', w_svg)
		.attr('height', h_svg);

	const text = svgMain
		.append('text')
		.attr('x', '370px')
		.attr('y', '450px')
		.style('font-size', '10px')
		.style('font-color', 'black')
		.text('Price');

	const text1 = svgMain
		.append('text')
		.attr('x', '60px')
		.attr('y', '10px')
		.style('font-size', '10px')
		.style('font-color', 'black')
		.text('Points');



	let plot = svgMain
		.append('g')
		.attr('width', w)
		.attr('height', h)
		.attr('transform',`translate(70,30)`);

	const scaleX = d3.scaleLog().domain([1,2500]).range([0,w]);
	const maxVolume = 100;
	const scaleY = d3.scaleLinear().domain([79, maxVolume]).range([h,0]);

////////////////////////////////////////////////////////////////////

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
	
////////////////////////////////////////////////////////////////////

	const axisY = d3.axisLeft()
		.scale(scaleY)
		.tickSize(-w)
		.ticks(5);
	const axisYNode = plot
		.selectAll('.axis-y')
		.data([1]);
	const axisYNodeEnter = axisYNode.enter()
		.append('g')
		.attr('class','axis axis-y');
	axisYNode.merge(axisYNodeEnter)
		.call(axisY);
	
////////////////////////////////////////////////////////////////////

	const binsUpdate = plot
		.selectAll('.circle')
		.data(wineData);



		//Enter
	const binsEnter = binsUpdate.enter()
		.append('circle')
		.attr('class','circle') //If you forget this, what will happen if we re-run this the activityHistogram function?
		.attr('cx', function(d) {
			return scaleX(d.price)})
		.attr('cy', function(d){
			//console.log(d.price)
			return scaleY(d.points)})
		.attr('r', 5)
		.attr('fill', 'none')
		.attr('stroke', '#9ACD32')
  		.attr('stroke-width', 0.5);

		//Enter + update
	binsEnter.merge(binsUpdate);
		//.transition()
		//.duration(500)
		//.attr('r', 6)
		//.style('fill','rgba(0,0,0,.1)');

		//Exit
	binsUpdate.exit().remove();



//////////////////////////////////////////////////////////////////

	}

	return exports;


}



export default MainChart;





