import  { SEARCH_REVIEWS } from "../constants/action-types";

export const searchReviews = (searchTerm) => ({type: SEARCH_REVIEWS , payload: searchTerm}); 
