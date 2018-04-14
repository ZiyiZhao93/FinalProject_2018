import {select} from 'd3';

function SomeModule(){

	let svg;

	function exports(){
		const root = this;
		const width = this.clientWidth;
		const height = this.clientHeight;

		svg = select(root)
			.selectAll('svg')
			.data([1]);
		svg = svg
			.enter()
			.append('svg')
			.merge(svg)
			.attr('width',width)
			.attr('height',height);

		
	}

	exports.changeState = state => {
		
	}

	return exports;

}

export default SomeModule;