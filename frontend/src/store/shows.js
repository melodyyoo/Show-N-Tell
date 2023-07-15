import { csrfFetch } from "./csrf"

//TYPES
const GET_ALL_SHOWS = 'shows/getAllShows'
// const GET_SHOW = "shows/getShow"
const GET_SHOW_AND_REVIEWS = "shows/getShowsAndReviews"
const POST_SHOW = 'shows/postShow'




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
        const errors = res.json();
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
            return {show: action.payload}
        case POST_SHOW:
            const newShowState = {...state, show:action.payload};
            newShowState.allShows[action.payload.id] = action.payload;

            return newShowState; 
        default:
            return state
    }
}

export default showsReducer
