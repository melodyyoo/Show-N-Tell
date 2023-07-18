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
    if (body.length > 600) {
      return { color: "red" };
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setErrors({});

    const tempErrors = {};

    if (body.length > 600) tempErrors.body = "Review must be 600 characters or less.";

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
    <div className="review-input-wrapper" style={{ display: "flex" }}>
      <img className="show-poster" alt="show-poster" src={review.Show?.image}></img>
      <form onSubmit={handleClick}>
        <div style={{ display: "flex" }}>
          {review.Show?.name}
          {ongoingShow}
        </div>
        <textarea
          className="review-input-body"
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <p className="character-counter" style={characterCounter()}>
          {body.length}/600
        </p>
        <div className="errors">{errors.body}</div>
        <div>
          Rating
          <ReviewRatingInput required disabled={false} rating={rating} onChange={onChange} />
        </div>
        <button type="submit">SAVE</button>
      </form>
      <OpenModalButton buttonText="DELETE" modalComponent={<DeleteReviewModal/>} title="PLEASE CONFIRM"/>
    </div>
  );
}
