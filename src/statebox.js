import * as d3 from 'd3';
import {select,path,event,mouse,dispatch,
	forceSimulation,
	forceManyBody,
	forceCenter,
	forceCollide,
	forceX,
	forceY
} from 'd3';
import './style/main.css';

	let _placename;


	export function StateChart(_) {

		function exports(data,i){

			const root = this;

			//console.log(data);

		
			const margin = {t:0,r:0,b:0,l:0};
			const w = root.clientWidth+margin.l+margin.r;
  			const h = root.clientHeight+margin.t+margin.b;

  			const svg = d3.select(root)
				.classed('winebox', true)
				.selectAll('svg')
				.data([1]);

			const svgMain = svg.enter().append('svg')
				.attr('width', w)
				.attr('height', h);

			//svgMain.append('g').attr('transform',`translate(0,0)`);

			const nodes = Array.from(_placename)
				.map(v => {
					return {
						//fill: v.values.fill,
						value: Math.random()
					}
				});			

				//console.log(nodes);

			// const ColorScale = d3.scaleOrdinal()
			// 				.range([0,1])
			// 				.domain(['#91C5AA','#87CEFA','#765DA1','#F7E1B7','#F78A63']);

			let elements = svgMain
				.selectAll('.element')
				.data(nodes);

			//console.log(nodes);

			elements = elements.enter()
				.append('circle')
				.classed('element',true)
				.merge(elements)
				.attr('cx',-5)
				.attr('cy',-5)
				.attr('r', 3)
				.attr('fill', function(d,i){
					if(i<258){
						return '#91C5AA';
					}
					else if(i <276){
						return '#87CEFA'
					}
					else if(i<497){
						return '#765DA1'
					}
					else if(i < 500){
						return '#F7E1B7'
					}
					else {
						return '#F78A63'
					}
				})
				.attr('stroke', '#228B22')
  				.attr('stroke-width', 0.5)
				.attr('width',10)
				.attr('height',10);


			const simulation = forceSimulation();

			const center = forceCenter(w/2,h/2);
			const xPos = forceX().x(d => d.value>1?w*1/2:w/2);
			const yPos = forceY().y(h/2);
			const charge = forceManyBody().strength(.2);
			const collide = forceCollide().radius(d => d.value*20);


			simulation
				.force('charge',charge)
				.force('collide',collide)
				.force('xPos',xPos)
				.force('yPos',yPos)
				.force('center',center)
				.nodes(nodes)
				.on('tick', () => {
					elements
						.attr('transform', d => `translate(${d.x},${d.y})`);
				})
				.on('end', () => {
					//console.log('Simulation end')
				});


		}


	exports.placename = function(_){
		_placename = _;
		return this;
	}


	return exports;

}


export default StateChart;