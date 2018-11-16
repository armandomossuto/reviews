import  { UPDATE_SEARCHTERM } from "../constants/action-types";


const reducer = (state  = [], action) => {
	switch (action.type) {
		
		case UPDATE_SEARCHTERM:
			return {...state, searchTerm: action.payload};

		default:
			return state;
	}
};

export default reducer;