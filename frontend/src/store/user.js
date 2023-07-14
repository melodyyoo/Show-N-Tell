import { csrfFetch } from "./csrf"

//TYPE
const GET_USER = "users/getUser"



/*************************************************************************** */
//ACTION CREATORS
const actionGetUser=(user)=>{
    return{
        type: GET_USER,
        payload:user
    }
}






/*************************************************************************** */
//THUNKS
export const thunkGetUser = (userId) => async(dispatch) =>{
    const res = await csrfFetch(`/api/users/${userId}`);

    if(res.ok){
        const data = await res.json();
        dispatch(actionGetUser(data))
    }
}






/**************************************************************************** */
//REDUCER
const initialState = {user: {}}
const userReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_USER:

            return {user: action.payload}
        default:
            return state
    }
}

export default userReducer;
