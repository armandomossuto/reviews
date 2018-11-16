import React, {Component} from 'react';
import DisplayCategories from './display_categories.js'

export default class Find extends Component {
	render() {
		return (
			<div> 
				<h2> Most popular categogies </h2>
				<DisplayCategories />
			</div>
			);
	}
}