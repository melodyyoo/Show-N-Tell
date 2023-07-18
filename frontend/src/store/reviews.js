import { csrfFetch } from "./csrf";
//TYPES
const GET_POPULAR_REVIEWS = "reviews/getPopularReviews";
const GET_REVIEW = "reviews/getReview";
const POST_REVIEW = "reviews/postReview";
const EDIT_REVIEW = "reviews/editReview";

/*********************************************************************************************************** */
//ACTION CREATORS
const actionGetPopularReviews = (reviews) => {
  return {
    type: GET_POPULAR_REVIEWS,
    payload: reviews,
  };
};

const actionGetReview = (review) => {
  return {
    type: GET_REVIEW,
    payload: review,
  };
};

const actionPostReview = (review) => {
  return {
    type: POST_REVIEW,
    payload: review,
  };
};

const actionEditReview = (review) => {
  return {
    type: "reviews/editReview",
    payload: review,
  };
};


/*********************************************************************************************************** */
//THUNKS
export const thunkGetPopularReviews = () => async (dispatch) => {
  const res = await csrfFetch("/api/reviews/popular");

  if (res.ok) {
    const data = await res.json();
    dispatch(actionGetPopularReviews(data));
  }
};

export const thunkGetReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(actionGetReview(data));
  }
};

export const thunkPostReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const newReview = await res.json();
    dispatch(actionPostReview(newReview));
    return newReview;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkEditReview = (review, reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const updatedReview = await res.json();
    dispatch(actionEditReview(updatedReview));
    return updatedReview;
  } else {
    const errors = await res.json();
    return errors;
  }
};



/*********************************************************************************************************** */
//REDUCER
const initialState = { popularReviews: {}, review: {} };
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_REVIEWS:
      const popularReviewsState = { ...state, popularReviews: {} };

      action.payload.forEach((review) => {
        popularReviewsState.popularReviews[review.id] = review;
      });
      return popularReviewsState;

    case GET_REVIEW:
      const reviewState = { ...state, review: {} };
      reviewState.review = action.payload;
      return reviewState;
    case POST_REVIEW:
      const postReviewState = { ...state, review: {} };
      postReviewState.review = action.payload;
      return postReviewState;
    case EDIT_REVIEW:
        const editReviewState = { ...state, review: {} };
        editReviewState.review = action.payload;
        return editReviewState;


    default:
      return state;
  }
};

export default reviewsReducer;
