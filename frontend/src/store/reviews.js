import { csrfFetch } from "./csrf"
//TYPES
const GET_POPULAR_REVIEWS = "reviews/getPopularReviews"


/*********************************************************************************************************** */
//ACTION CREATORS
const actionGetPopularReviews = (reviews) =>{
    return{
        type: GET_POPULAR_REVIEWS,
        payload: reviews
    }
}






/*********************************************************************************************************** */
//THUNKS
export const thunkGetPopularReviews = () => async(dispatch) =>{
    const res = await csrfFetch('/api/reviews/popular');

    if(res.ok){
        const data = await res.json();
        dispatch(actionGetPopularReviews(data))
    }
}







/*********************************************************************************************************** */
//REDUCER
const initialState = {popularReviews:{}}
const reviewsReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_POPULAR_REVIEWS:
            const popularReviewsState = {...state, popularReviews:{}};

            action.payload.forEach((review)=>{
                popularReviewsState.popularReviews[review.id] = review
            });

            return popularReviewsState;
        default:
            return state
    }
}

export default reviewsReducer;
