import { csrfFetch } from "./csrf"

//TYPES
const GET_ALL_SHOWS = 'shows/getAllShows'
// const GET_SHOW = "shows/getShow"




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
        default:
            return state
    }
}

export default showsReducer
