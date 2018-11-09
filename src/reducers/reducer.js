import  { CHANGE_SECTION, MOVE_MENU, RETRIEVE_JOBS, CHANGE_KEYWORDS, CHANGE_LOCATION, CHANGE_PAGE, SELECT_JOB } from "../constants/action-types";


const reducer = (state  = [], action) => {
	switch (action.type) {
		
		case CHANGE_SECTION:
			return {...state, section: action.payload};


		case MOVE_MENU:
			return {...state, menuclass: action.payload}

		case RETRIEVE_JOBS:
			console.log(action.payload);
			let newdata = [...Array((1+parseInt(action.payload.length-1))/8)].map(e => Array(0));
			console.log(newdata);
			action.payload.map((job, i) => {
					newdata[parseInt(i/8)].push(job);
					})
			console.log(newdata);
			return {...state, data: newdata}

		case CHANGE_KEYWORDS:
			let newsearchtermsa = state.searchterms;
			newsearchtermsa.keywords = action.payload;
			return {...state, searchterms: newsearchtermsa}
			
		case CHANGE_LOCATION:
			let newsearchtermsb = state.searchterms;
			newsearchtermsb.location = action.payload;
			return {...state, searchterms: newsearchtermsb}
		
		case CHANGE_PAGE:
			return {...state, page: action.payload}

		case SELECT_JOB:
			return {...state, job_index: action.payload}

		default:
			return state;

	}
};

export default reducer;