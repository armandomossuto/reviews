import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { handleSearchTermChange } from '../../actions/handleSearchTermChange.js'

class SearchReview extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      redirect: false,
    };

    this.checkKey = this.checkKey.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  checkKey(event) {
    // This event handler just checks if key pressed was Enter to excute onSubmit 
    if(event.key==="Enter") {
      this.onSubmit();
    }
  }

  onChange(event) {
    // Handles change of value of the input. This is the only way to handle it with React.
    this.props.handleSearchTermChange(event.target.value);
  }

  onSubmit() {
    // Handles when user submits the search. Changes redirect to TRUE, so next time render is excuted it will redirect to Search component
   this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    const { searchTerm } = this.props;
    // Checks if user submitted the search query. If true redirects to Search component
    if(redirect) {
      return <Redirect push to={"/search?query="+searchTerm+"?page=1"} />;
    }
  // If not, renders this component normally
    return (
        <div>
          < input 
            type="text" 
            placeholder="Product name, type, ..." 
            value={searchTerm} 
            onChange={this.onChange} 
            onKeyDown={this.checkKey} 
          />
          < button
            type="submit" 
            onClick={this.onSubmit} 
          > 
            <img src="search_icon.png" alt="" /> 
          </button>
        </div>
      );
  }
}

export default connect(state => ({ searchTerm: state.searchTerm }), { handleSearchTermChange })(SearchReview);