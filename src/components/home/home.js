import React, {Component} from 'react';
import Find from './find.js';
import Create from './create.js';
import List from './list.js'

export default class Home extends Component {
	render() {
		return (
			<div className="home-page"> 
				<Find />
				<Create />
				<List />
			</div>
			);
	}
}