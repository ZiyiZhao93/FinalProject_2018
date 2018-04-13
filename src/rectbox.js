import * as d3 from 'd3';
import './style/main.css';


function PlaceChart(_) {

	//console.log(_);

	const circleDatabyPlace = d3.nest()
		.key(function(d){	
			return d.place
		})
		.entries(_);

	//console.log(circleDatabyPlace);

	const circleDatabyName = d3.nest()
		.key(function(d){
			return d.country
		})
		.entries(_);

	//console.log(circleDatabyName);


	


//var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);




	//console.log(circleDatabyPlace);

	//console.log(circleDatabyName);

	//console.log(circleDatabyEighty);




	function exports(data,i){
		


	};


	return exports;

};



export default PlaceChart;