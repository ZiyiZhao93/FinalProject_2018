import * as d3 from 'd3';
import './style/main.css';


export function CircleChart(_) {

let _countryname,
	_placename;

	function exports(data,i){
		
		//console.log(_countryname);

		const svg = d3.select()
		.classed('circlebox', true)
		.selectAll('svg')
		.data([1]);



	}

	exports.countryname = function(_){
		_countryname = _;
		return this;
	}

	exports.placename = function(_){
		_placename = _;
		return this;
	}


	return exports;

}



export default CircleChart;