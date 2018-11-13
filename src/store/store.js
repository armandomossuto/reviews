import { createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer.js' 

const initialstate = {
	searchData: null,
	searchTerm: "",
}

export const store = createStore(reducer, initialstate);

window.store = store;
