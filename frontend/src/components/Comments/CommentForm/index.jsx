import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { thunkPostComment } from "../../../store/reviews";
import { thunkEditComment } from "../../../store/comments";

export default function CommentForm({ reviewOwner, comment, formType , reviewId}) {
  const { closeModal } = useModal();
  const [body, setBody] = useState(formType==="edit" ? comment.body: "");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const sessionUser = useSelector((state)=> state.session.user);
  const commentId = comment?.id;

  const handleClick = (e) => {
    e.preventDefault();
    setErrors({});

    const tempErrors = {};

    if(body?.length > 200)tempErrors.body = 'Comment must be 200 characters or less.'

    const comment = {
        body,
        reviewId,
        userId: sessionUser.id
    }

    const tempErrorsArray = Object.values(tempErrors);
    if(tempErrorsArray.length > 0){
        setErrors(tempErrors)
    }else if(formType==="edit"){
        dispatch(thunkEditComment(comment, commentId))
        .then(closeModal)
        .catch((data)=> {
            if(data && data.errors){
                setErrors({...data.errors, ...errors})
            }
        })
    }else{
        dispatch(thunkPostComment(comment))
        .then(setBody(''))
        .catch((data)=> {
            if(data && data.errors){
                setErrors({...data.errors, ...errors})
            }
        })
    }
  };
  return (
    <form onSubmit={handleClick}>
      <textarea
        placeholder={`Reply to ${reviewOwner}...`}
        style={{ color: "black", resize: "none", width: "400px", height: "106px", margin: "0 25px" }}
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginRight: "52px" }}>
        <p
          className="review-character-counter"
          style={body.length > 200 ? { color: "red", margin: "0" } : { margin: "0" }}
        >
          {body.length}/200
        </p>
      </div>
      <div className="errors">{errors.body}</div>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
       {formType==='edit' && <button onClick={closeModal} className="cancel-button">
          CANCEL
        </button>}
        <button className="submit-button">{formType==='edit' ? "UPDATE" : "POST"}</button>
      </div>
    </form>
  );
}
