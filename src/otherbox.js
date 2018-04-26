import * as d3 from 'd3';
import './style/main.css';


function OtherChart(_) {


	function exports(data,i){
		
		const root = this;

		const margin = {t:10,r:30,b:30,l:10};
		const w_svg = root.clientWidth - margin.l*10 + margin.r;
  		const h_svg = root.clientHeight - margin.t*4 + margin.b;
		const w = w_svg-margin.l*5-margin.r;
    	const h = h_svg-margin.t-margin.b*3;

    	const svg = d3.select(root)
			.classed('comparebox', true)
			.selectAll('svg')
			.data([1]);

		const svgMain = svg.enter().append('svg')
			.attr('width', w_svg)
			.attr('height', h_svg);

		svgMain.append('g').attr('class', 'plot');

		const plot = svg.merge(svgMain)
			.select('.plot')
			.attr('width', w)
			.attr('height', h)
			.attr('transform',`translate(35,70)`);

		const scaleX = d3.scaleLinear().domain([79,100]).range([0,w]);

		const scaleY = d3.scaleLinear().domain([0,2013]).range([h,0]);

////////////////////////////////////////////////////////////////////

		const axisX = d3.axisBottom()
			.scale(scaleX)
			.ticks(20)
			.tickSize(3,0);
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
			.ticks(10);
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
			.data(data);


		const binsEnter = binsUpdate.enter()
			.append('circle')
			.attr('class','circle')
			.attr('cx', function(d) {
				return scaleX(d.points)})
			.attr('cy', function(d){
				return scaleY(d.price)})
			.attr('r', 1)
			.attr('fill', '#B22222');


  		binsEnter.merge(binsUpdate);


  		binsUpdate.exit().remove();


		

		};

	return exports;

};



export default OtherChart;