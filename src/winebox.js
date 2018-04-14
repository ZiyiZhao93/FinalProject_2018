import * as d3 from 'd3';
import './style/main.css';


export function WineChart(_) {

	let _grapename,
		_colorname;

		function exports(data,i){

			const root = this;

			//console.log(root);
		
			const margin = {t:0,r:0,b:0,l:0};
			const width = root.clientWidth+margin.l+margin.r;
  			const height = root.clientHeight+margin.t+margin.b;

  			const svg = d3.select(root)
				.classed('winebox', true)
				.selectAll('svg')
				.data([1]);

			const svgMain = svg.enter().append('svg')
				.attr('width', width)
				.attr('height', height);

			svgMain.append('g').attr('transform',`translate(0,0)`);

			console.log(_grapename);


			svgMain.selectAll('circle')
				.data(_grapename)
				.enter()
				.append('circle')
				.attr('cx', function(d,i){
					return (Math.random()* width);
				})
				.attr('cy', function(d,i){
					return (Math.random()* height);
				})
				// .attr('cy', function(d,i){
				// 	return (.5+i)
				// })
				.attr('r',5)
				.style('fill','#9ACD32')
    			// .style('stroke', '#9ACD32')
    			// .style('stroke-width', 1)
    			.style('opacity', .5);



    			//console.log(_grapename);


		}


	exports.grapename = function(_){
		_grapename = _;
		return this;
	}

	exports.colorname = function(_){
		_colorname = _;
		return this;
	}


	return exports;

}


export default WineChart;