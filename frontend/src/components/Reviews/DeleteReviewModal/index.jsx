import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { useState } from "react";
import { thunkDeleteReview } from "../../../store/shows";
import "./DeleteReviewModal.css"

export default function DeleteReviewModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const [errors, setErrors] = useState();
  const review = useSelector((state) => state.reviews.review);

  const handleClick = () => {
    dispatch(thunkDeleteReview(review.id, review.showId)).catch((data) => {
      if (data && data.errors) {
        setErrors({ ...data.errors, ...errors });
      }
    });
    history.push(`/shows`);
  };

  return (
    <div>
      <form style={{ width: "400px", margin: "0 20px" }} onSubmit={handleClick}>
        <p>
          Are you sure you want to delete this review? This will delete all associated likes and comments as
          well.
        </p>
        <div style={{display:"flex", gap:"5px"}}>
          <button className="cancel-button" onClick={closeModal}>
            CANCEL
          </button>
          <button className="delete-button" type="submit">DELETE</button>
        </div>
        <div className="errors">{errors}</div>
      </form>
    </div>
  );
}
