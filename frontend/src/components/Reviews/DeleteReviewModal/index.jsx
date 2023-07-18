import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { useState } from "react";
import { thunkDeleteReview } from "../../../store/shows";

export default function DeleteReviewModal(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {closeModal} = useModal();
    const [errors, setErrors] = useState();
    const review = useSelector(state=>state.reviews.review);

    const handleClick = () =>{
        dispatch(thunkDeleteReview(review.id, review.showId))
        .catch(data=>{
            if(data && data.errors){
                setErrors({...data.errors, ...errors})
            }
        })
        history.push(`/shows`)
    }

    return(
        <div>
            <form onSubmit={handleClick}>
                <p>Are you sure you want to delete this review? This will delete all associated likes and comments as well.</p>
                <button onClick={closeModal}>CANCEL</button>
                <button type='submit'>DELETE</button>
                <div className="errors">{errors}</div>
            </form>
        </div>
    )
}
