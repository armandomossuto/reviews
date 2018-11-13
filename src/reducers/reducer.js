import  { SEARCH_REVIEWS } from "../constants/action-types";


const reducer = (state  = [], action) => {
	switch (action.type) {
		
		case SEARCH_REVIEWS:
			return {...state, searchTerm: action.payload};

		default:
			return state;
	}
};

export default reducer;