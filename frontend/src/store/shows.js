import { csrfFetch } from "./csrf"

//TYPES
const GET_ALL_SHOWS = 'shows/getAllShows'
// const GET_SHOW = "shows/getShow"
const GET_SHOW_AND_REVIEWS = "shows/getShowsAndReviews"
const POST_SHOW = 'shows/postShow'
const EDIT_SHOW = 'shows/editShow'
const DELETE_SHOW = 'shows/deleteShow'




/*********************************************************************************************************** */
//ACTION CREATORS
const actionGetAllShows = (shows) => {
    return{
        type: GET_ALL_SHOWS,
        payload: shows
    }
}

// const actionGetShow = (show) =>{
//     return{
//         type: GET_SHOW,
//         payload: show
//     }
// }

const actionGetShowAndReviews = (show) =>{
    return{
        type: GET_SHOW_AND_REVIEWS,
        payload: show
    }
}

const actionPostShow = (show) =>{
    return{
        type: POST_SHOW,
        payload: show
    }
}

const actionEditShow = (show) =>{
    return{
        type: EDIT_SHOW,
        payload: show
    }
}

const actionDeleteShow = (showId) =>{
    return{
        type: DELETE_SHOW,
        payload: showId
    }
}

/*********************************************************************************************************** */
//THUNKS
export const thunkGetAllShows = () => async(dispatch) =>{
    const res = await csrfFetch('/api/shows');

    if(res.ok){
        const data = await res.json();
        dispatch(actionGetAllShows(data))
    }
}

// export const thunkGetShow = (showId) => async(dispatch) =>{
//     const res = await csrfFetch(`/api/shows/${showId}`);

//     if(res.ok){
//         const data = await res.json();
//         dispatch(actionGetShow(data));
//     }
// }

export const thunkGetShowAndReview = (showId) => async(dispatch) =>{
    const res = await csrfFetch(`/api/shows/${showId}`);

    if(res.ok){
        const data = await res.json();
        dispatch(actionGetShowAndReviews(data))
    }
}

export const thunkPostShow = (show) => async(dispatch) =>{
    const res = await csrfFetch(`/api/shows`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(show)
    })

    if(res.ok){
        const newShow = await res.json();
        dispatch(actionPostShow(newShow))
        return newShow
    }else{
        const errors = await res.json();
        return errors;
    }
}

export const thunkEditShow = (show, showId) => async(dispatch) =>{
    const res = await csrfFetch(`/api/shows/${showId}`, {
        method: "PUT",
        headers:  { "Content-Type": "application/json" },
        body: JSON.stringify(show)
    })

    if(res.ok){
        const updatedShow = await res.json();
        dispatch(actionEditShow(updatedShow))
        return updatedShow
    }else{
        const errors = await res.json();
        return errors;
    }
}

export const thunkDeleteShow = (showId) =>async(dispatch)=>{
    const res = await csrfFetch(`/api/shows/${showId}`, {
        method: "DELETE"
    });

    if(res.ok){
        dispatch(actionDeleteShow(showId))
    }else{
        const errors = await res.json();
        return errors;
    }
}


/*********************************************************************************************************** */
//REDUCER
const initialState = {allShows:{}, show:{}}
const showsReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_ALL_SHOWS:
            const allShowsState = {...state, allShows: {}};

            action.payload.forEach((show) =>{
                allShowsState.allShows[show.id] = show
            })
            return allShowsState

        // case GET_SHOW:
        //     const showState = {...state, show:{}};
        //     showState.show = action.payload;

        //     return showState;
        case GET_SHOW_AND_REVIEWS:
            const showAndReviewState = {...state, show:{}};
            showAndReviewState.show = action.payload;
            return showAndReviewState; 
        case POST_SHOW:
            const newShowState = {allShows:{...state.allShows}, show:action.payload};
            newShowState.allShows[action.payload.id] = action.payload;

            return newShowState;
        case EDIT_SHOW:
            const updatedShowState = {...state, show:{...state.show}}
            updatedShowState.show.Show = {...state.show.Show,...action.payload}
            return updatedShowState;
        case DELETE_SHOW:
            const currentAllShows = {...state.allShows};
            delete currentAllShows[action.payload];
            return {...state, allShows: currentAllShows}
        default:
            return state
    }
}

export default showsReducer
