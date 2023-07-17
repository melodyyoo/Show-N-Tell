import { csrfFetch } from "./csrf"
//TYPES
const GET_POPULAR_REVIEWS = "reviews/getPopularReviews";
const GET_REVIEW = "reviews/getReview";


/*********************************************************************************************************** */
//ACTION CREATORS
const actionGetPopularReviews = (reviews) =>{
    return{
        type: GET_POPULAR_REVIEWS,
        payload: reviews
    }
}

const actionGetReview = (review) =>{
    return{
        type: GET_REVIEW,
        payload: review
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

export const thunkGetReview = (reviewId) =>async(dispatch) =>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`);

    if(res.ok){
        const data = await res.json();
        dispatch(actionGetReview(data))
    }
}





/*********************************************************************************************************** */
//REDUCER
const initialState = {popularReviews:{}, review:{}}
const reviewsReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_POPULAR_REVIEWS:
            const popularReviewsState = {...state, popularReviews:{}};

            action.payload.forEach((review)=>{
                popularReviewsState.popularReviews[review.id] = review
            });

            return popularReviewsState;

        case GET_REVIEW:
            const reviewState = {...state, review:{}};
            reviewState.review = action.payload;
            return reviewState; 
        default:
            return state
    }
}

export default reviewsReducer;
