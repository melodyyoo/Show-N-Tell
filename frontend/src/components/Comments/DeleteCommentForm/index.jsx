import { useModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { thunkDeleteComment } from "../../../store/reviews";
import { useState } from "react";

export default function DeleteCommentForm({comment}) {
    const {closeModal} = useModal();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState();

    const handleClick = (e) =>{
      e.preventDefault();
      dispatch(thunkDeleteComment(comment.id))
      .then(closeModal)
      .catch(data=>{
        if(data && data.errors){
          setErrors({...data.errors, ...errors});
        }
      })
    }
  return (
    <form onSubmit={handleClick}>
      <div style={{margin:"30px 20px"}}>Are you sure you want to delete this comment?</div>
      <div style={{display:"flex", gap:"5px", justifyContent:'center'}}>
        <button className="cancel-button"onClick={closeModal}>CANCEL</button>
        <button style={{marginBottom:"10px"}} className="delete-button">DELETE</button>
      </div>
      <div className="errors">{errors}</div>
    </form>
  );
}
