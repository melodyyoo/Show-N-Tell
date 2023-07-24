import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReviewRatingInput from "../ReviewRatingInput";
import "./EditReviewModal.css";
import { thunkEditReview } from "../../../store/reviews";
import OpenModalButton from "../../OpenModalButton";
import DeleteReviewModal from "../DeleteReviewModal";

export default function EditReviewModal({ review }) {
  const [body, setBody] = useState(review?.body);
  const [rating, setRating] = useState(review?.rating);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  if (!review) return null;

  const characterCounter = () => {
    if (body?.length > 600) {
      return { color: "red" };
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setErrors({});

    const tempErrors = {};

    if (body?.length > 600) tempErrors.body = "Review must be 600 characters or less.";

    const updatedReview = {
      body,
      userId: sessionUser?.id,
      showId: review.showId,
      rating,
    };

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      dispatch(thunkEditReview(updatedReview, review?.id))
        .then((review) => {
          closeModal();
          history.push(`/reviews/${review?.id}`);
        })
        .catch((data) => {
          if (data && data.errors) {
            setErrors({ ...data.errors, ...errors });
          }
        });
    }
  };

  let ongoingShow;
  if (!review.Show?.endYear) {
    ongoingShow = <p className="show-year">{review.Show?.startYear}-</p>;
  } else if (review.Show?.startYear === review.Show?.endYear) {
    ongoingShow = <p className="show-year">{review.Show?.startYear}</p>;
  } else {
    ongoingShow = (
      <p className="show-year">
        {review.Show?.startYear}-{review.Show?.endYear}
      </p>
    );
  }

  const onChange = (number) => {
    setRating(parseInt(number));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="review-input-wrapper" style={{ display: "flex" }}>
        <img className="show-poster" alt="show-poster" src={review.Show?.image}></img>
        <form className="edit-review-form" onSubmit={handleClick}>
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <div style={{ display: "flex" }}>
              <div className="show-name" style={{ fontSize: "20px" }}>
                {review.Show?.name}
              </div>
              <div>{ongoingShow}</div>
            </div>
            <textarea
              className="review-input-body"
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <p className="review-character-counter" style={characterCounter()}>
            {body?.length}/600
          </p>
          <div className="errors">{errors.body}</div>
          <div style={{ display: "flex", flexDirection:"column", gap:"15px"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", textAlign:"center" }}>Rating</div>
              <ReviewRatingInput required disabled={false} rating={rating} onChange={onChange} />
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <button className="submit-button" type="submit">
                SAVE
              </button>
              <OpenModalButton
                style={{
                  color: " white",
                  border: "none",
                  backgroundColor: "gray",
                  fontFamily: "'Open Sans', sans-serif",
                  width: "70px",
                  borderRadius: "5px",
                  height: "2rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
                buttonText="DELETE"
                modalComponent={<DeleteReviewModal />}
                title="PLEASE CONFIRM"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
