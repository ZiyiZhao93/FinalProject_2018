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


export function WineChart(_) {

	let _grapename,
		_colorname;

		function exports(data,i){

			const root = this;

			console.log(_grapename);
			console.log(_colorname);

			//console.log(root);
		
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

			const nodes = Array.from(_grapename)
				.map(v => {
					return {
						value: Math.random()
					}
				});			


			let elements = svgMain
				.selectAll('.element')
				.data(nodes);

			elements = elements.enter()
				.append('circle')
				.classed('element',true)
				.merge(elements)
				.attr('cx',-5)
				.attr('cy',-5)
				.attr('r', 3)
				.attr('fill', '#9ACD32')
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
					console.log('Simulation end')
				});


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