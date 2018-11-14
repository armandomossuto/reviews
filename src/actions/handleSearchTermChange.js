import  { UPDATE_SEARCHTERM } from "../constants/action-types";

export const handleSearchTermChange = (searchTerm) => ({type: UPDATE_SEARCHTERM , payload: searchTerm}); 
