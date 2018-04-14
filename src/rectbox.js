import * as d3 from 'd3';
import './style/main.css';


function PlaceChart(_) {



	function exports(data,i){
		
		const circleDatabyPlace = d3.nest()
		.key(function(d){	
			return d.place
		})
		.entries(data);

		//console.log(circleDatabyPlace);

		const circleDatabyName = d3.nest()
			.key(function(d){
				return d.country
			})
			.entries(data);

		//console.log(circleDatabyName);

		};


	return exports;

};



export default PlaceChart;