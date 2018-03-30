import * as d3 from 'd3';
import "./style/main.css";

import {parse, parse2, parseStation, fetchCsv} from '../utils';

import Histogram, {activityHistogram} from './components/Histogram';


d3.csv('/data/hubway_trips_reduced.csv', parse, function(err,trips){
	const t0 = d3.min(trips, d => d.t0);
		const t1 = d3.max(trips, d => d.t1);

		console.log(trips);
/*

		d3.select('#mainbox')
			.datum(trips)
			.each(activityHistogram);*/



		

});


		


	

	































