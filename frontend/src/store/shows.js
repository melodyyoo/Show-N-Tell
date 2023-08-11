import { csrfFetch } from "./csrf";

//TYPES
const GET_ALL_SHOWS = "shows/getAllShows";
// const GET_SHOW = "shows/getShow"
const GET_SHOW_AND_REVIEWS = "shows/getShowsAndReviews";
const POST_SHOW = "shows/postShow";
const EDIT_SHOW = "shows/editShow";
const DELETE_SHOW = "shows/deleteShow";
const DELETE_REVIEW = "reviews/deleteReview";

/*********************************************************************************************************** */
//ACTION CREATORS
const actionGetAllShows = (shows) => {
  return {
    type: GET_ALL_SHOWS,
    payload: shows,
  };
};

// const actionGetShow = (show) =>{
//     return{
//         type: GET_SHOW,
//         payload: show
//     }
// }

const actionGetShowAndReviews = (show) => {
  return {
    type: GET_SHOW_AND_REVIEWS,
    payload: show,
  };
};

const actionPostShow = (show) => {
  return {
    type: POST_SHOW,
    payload: show,
  };
};

const actionEditShow = (show) => {
  return {
    type: EDIT_SHOW,
    payload: show,
  };
};

const actionDeleteShow = (showId) => {
  return {
    type: DELETE_SHOW,
    payload: showId,
  };
};

const actionDeleteReview = (reviewId, showId) => {
  return {
    type: DELETE_REVIEW,
    payload: { reviewId, showId },
  };
};

/*********************************************************************************************************** */
//THUNKS
export const thunkGetAllShows = () => async (dispatch) => {
  const res = await csrfFetch("/api/shows");

  if (res.ok) {
    const data = await res.json();
    dispatch(actionGetAllShows(data));
  }
};

// export const thunkGetShow = (showId) => async(dispatch) =>{
//     const res = await csrfFetch(`/api/shows/${showId}`);

//     if(res.ok){
//         const data = await res.json();
//         dispatch(actionGetShow(data));
//     }
// }

export const thunkGetShowAndReview = (showId) => async (dispatch) => {
  const res = await csrfFetch(`/api/shows/${showId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(actionGetShowAndReviews(data));
  }
};

export const thunkPostShow = (show) => async (dispatch) => {
  const { name, director, synopsis, startYear, endYear, genre, userId, images } = show;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("director", director);
  formData.append("synopsis", synopsis);
  formData.append("startYear", startYear);
  if(endYear)formData.append("endYear", endYear);
  formData.append("genre", genre);
  formData.append("userId", userId);

  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  const res = await csrfFetch(`/api/shows`, {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  });

  if (res.ok) {
    const newShow = await res.json();
    dispatch(actionPostShow(newShow));
    return newShow;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkEditShow = (show, showId) => async (dispatch) => {
  const { name, director, synopsis, startYear, endYear, genre, userId, images } = show;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("director", director);
  formData.append("synopsis", synopsis);
  formData.append("startYear", startYear);
  if (endYear) formData.append("endYear", endYear);
  formData.append("genre", genre);
  formData.append("userId", userId);
  if (images[0]?.name)formData.append("poster", images[0].name);
  if (images[1]?.name)formData.append("biggerPoster", images[1].name);

  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  const res = await csrfFetch(`/api/shows/${showId}`, {
    method: "PUT",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  });

  if (res.ok) {
    const updatedShow = await res.json();
    dispatch(actionEditShow(updatedShow));
    return updatedShow;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkDeleteShow = (showId) => async (dispatch) => {
  const res = await csrfFetch(`/api/shows/${showId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(actionDeleteShow(showId));
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkDeleteReview = (reviewId, showId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(actionDeleteReview(reviewId, showId));
  }
};

/*********************************************************************************************************** */
//REDUCER
const initialState = { allShows: {}, show: {} };
const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SHOWS:
      const allShowsState = { ...state, allShows: {} };

      action.payload.forEach((show) => {
        allShowsState.allShows[show.id] = show;
      });
      return allShowsState;

    case GET_SHOW_AND_REVIEWS:
      const showAndReviewState = { ...state, show: {} };
      showAndReviewState.show = action.payload;
      return showAndReviewState;
    case POST_SHOW:
      const newShowState = { allShows: { ...state.allShows }, show: action.payload };
      newShowState.allShows[action.payload.id] = action.payload;

      return newShowState;
    case EDIT_SHOW:
      const updatedShowState = { ...state, show: { ...state.show } };
      updatedShowState.show.Show = { ...state.show.Show, ...action.payload };
      return updatedShowState;
    case DELETE_SHOW:
      const currentAllShows = { ...state.allShows };
      delete currentAllShows[action.payload];
      return { ...state, allShows: currentAllShows };
    default:
      return state;
  }
};

export default showsReducer;
