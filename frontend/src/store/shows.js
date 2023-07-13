import { csrfFetch } from "./csrf"

//TYPES
const GET_ALL_SHOWS = 'shows/getAllShows'





/*********************************************************************************************************** */
//ACTION CREATORS
const actionGetAllShows = (shows) => {
    return{
        type: GET_ALL_SHOWS,
        payload: shows
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






/*********************************************************************************************************** */
//REDUCER
const initialState = {allShows:{}}
const showsReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_ALL_SHOWS:
            const allShowsState = {...state, allShows: {}};

            action.payload.forEach((show) =>{
                allShowsState.allShows[show.id] = show
            })

            return allShowsState
        default:
            return state
    }
}

export default showsReducer
