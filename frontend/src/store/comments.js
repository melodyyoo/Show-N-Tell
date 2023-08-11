import { csrfFetch } from "./csrf";

//TYPES
const POST_COMMENT = 'comments/postComment';
const EDIT_COMMENT = 'comments/editComment';
const DELETE_COMMENT = 'comments/deleteComment';

/****************************************************************************************** */
//ACTION CREATORS
const actionPostComment = (comment) =>{
    return {
        type: POST_COMMENT,
        payload: comment
    }
}

const actionEditComment = (comment) =>{
    return {
        type: EDIT_COMMENT,
        payload: comment
    }
}

const actionDeleteComment = (commentId) =>{
    return{
        type: DELETE_COMMENT,
        payload: commentId
    }
}

/***************************************************************************************** */
//THUNKS
// export const thunkPostComment = (comment) => async(dispatch)=>{
//     const res = await csrfFetch("/api/comments", {
//         method:"POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(comment)
//     });

//     if(res.ok){
//         const newComment = await res.json();
//         dispatch(actionPostComment(newComment));
//         return newComment;
//     }else{
//         const errors = await res.json();
//         return errors;
//     }
// }

export const thunkEditComment = (comment, commentId) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });

    if (res.ok) {
      const updatedComment = await res.json();
      dispatch(actionEditComment(updatedComment));
      return updatedComment;
    } else {
      const errors = await res.json();
      return errors;
    }
  };

  export const thunkDeleteComment = (commentId) => async(dispatch) =>{
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: "DELETE"
    });

    if(res.ok){
        dispatch(actionDeleteComment())
    }
  }

  /*********************************************************************************** */
//REDUCER
const initialState = {comment: {}};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT:
      const postCommentState = { ...state, comment: {} };
      postCommentState.comment = action.payload;
      return postCommentState;
    case EDIT_COMMENT:
        const editCommentState = { ...state, comment: {} };
        editCommentState.comment = action.payload;
        return editCommentState;
    default:
      return state;
  }
};

export default commentsReducer;
