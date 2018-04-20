import * as d3 from 'd3';
import './style/main.css';


export function MainChart(_) {

	let _countryname;

	function exports(data,i){



		//console.log(data);
		const root = this;


  		const margin = {t:10,r:20,b:10,l:20};
  		const w_svg = root.clientWidth+margin.l*2+margin.r*10;
  		const h_svg = root.clientHeight+margin.t*8+margin.b*6;
		const w = w_svg-margin.l-margin.r;
    	const h = h_svg-margin.t*2-margin.b*2;

		const svg = d3.select(root)
			.classed('mainbox', true)
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
			.attr('transform',`translate(20,6)`);

////////////////////////////////////////////////////////////////////

		const text = svgMain
			.append('text')
			.attr('x', '690px')
			.attr('y', '400px')
			.style('font-size', '10px')
			.style('font-color', 'black')
			.text('Price');

		const text1 = svgMain
			.append('text')
			.attr('x', '30px')
			.attr('y', '16px')
			.style('font-size', '10px')
			.style('font-color', 'black')
			.text('Points');
	


		const scaleX = d3.scaleLog().domain([1,1500]).range([0,w]).nice();
		const maxVolume = 100;
		const scaleY = d3.scaleLinear().domain([79, maxVolume]).range([h,0]);

////////////////////////////////////////////////////////////////////

		const axisX = d3.axisBottom()
			.scale(scaleX)
			.ticks(20, ",.1s")
			.tickSize(6,0);
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
			.attr('stroke', '#B22222')
  			.attr('stroke-width', .8);

		//Enter + update
		binsEnter.merge(binsUpdate);
		//.transition()
		//.duration(500)
		//.attr('r', 6)
		//.style('fill','rgba(0,0,0,.1)');

		//Exit
		binsUpdate.exit().remove();


//////////////////////////////////////////////////////////////////

//const circleDatabyEighty = circleDatabyPoints.filter(d => d.key == 80);

//////////////////////////////////////////////////////////////////


	}

	exports.countryname = function(_){
		_countryname = _;
		return this;
	}

	return exports;


}



export default MainChart;





