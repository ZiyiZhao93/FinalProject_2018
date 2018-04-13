import {csv} from 'd3';

export const parse = d => {

	return {
		country: d.country,
		winename: d.designation,
		points: d.points,
		price: d.price,
		place: d.province,
		grape: d.variety,
		winery: d.winery

	};
}


/*
export const parse2 = d => {
	const t0 = new Date(d.starttime);
	const t1 = new Date(d.stoptime);

	return {
		t0,
		t1,
		time_of_day0: t0.getHours() + t0.getMinutes()/60,
		time_of_day1: t1.getHours() + t1.getHours()/60,
		station0: d['start station id'],
		station1: d['end station id'],
		duration: +d.tripduration,
		bike_nr: d.bikeid,
		subsc_type: d.usertype
	}
}
*/

export const fetchCsv = (url, parse) => {
	return new Promise((resolve, reject) => {
		csv(url, parse, (err, data) => {
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		})
	});
}