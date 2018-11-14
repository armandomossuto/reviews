import React, {Component} from 'react';
import SearchReview from './search_review.js';
import { connect } from 'react-redux';

class Search extends Component {
	render() {
		return (
			<div>
				<div> Perform a search </div>
				<SearchReview />
				<p> Displaying results for {this.props.searchTerm} </p>
			</div>
			);
	}
}

export default connect(state => ({ searchTerm: state.searchTerm }))(Search);