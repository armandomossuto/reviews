import { createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer.js' 

const initialstate = {
	section: 'frontpage',
	searchresults: [{company:'Company Name', company_logo:'', location: 'Location', position:'Position', description:'Description'}, {company:'Company Name', company_logo:'', location: 'Location', position:'Position', description:'Description'},{company:'', company_logo:'', location: '', position:'', description:''}],
	menuclass: 'menu-initial',
	data: null,
	searchterms: {keywords: "", location: ""},
	page: 0,
	job_index: null,
}

export const store = createStore(reducer, initialstate);

window.store = store;
