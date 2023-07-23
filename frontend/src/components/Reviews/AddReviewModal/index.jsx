import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import ReviewRatingInput from "../ReviewRatingInput/";
import "./AddReviewModal.css";
import { thunkPostReview } from "../../../store/reviews";
import { useHistory } from "react-router-dom";

export default function AddReviewModal() {
  const show = useSelector((state) => state.shows.show);
  const sessionUser = useSelector((state) => state.session.user);
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();

  if (!show) return null;

  const characterCounter = () => {
    if (body?.length > 600) {
      return { color: "red" };
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    setErrors({});

    const tempErrors = {};

    if (body.length > 600) tempErrors.body = "Review must be 600 characters or less.";

    const newReview = {
      body,
      userId: sessionUser?.id,
      showId: show.Show?.id,
      rating,
    };

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      dispatch(thunkPostReview(newReview))
        .then((review) => {
          closeModal();
          history.push(`/reviews/${review.id}`);
        })
        .catch((data) => {
          if (data && data.errors) {
            setErrors({ ...data.errors, ...errors });
          }
        });
    }
  };

  let ongoingShow;
  if (!show.Show?.endYear) {
    ongoingShow = <p className="show-year">{show.Show?.startYear}-</p>;
  } else if (show.Show?.startYear === show.Show?.endYear) {
    ongoingShow = <p className="show-year">{show.Show?.startYear}</p>;
  } else {
    ongoingShow = (
      <p className="show-year">
        {show.Show?.startYear}-{show.Show?.endYear}
      </p>
    );
  }

  const onChange = (number) => {
    setRating(parseInt(number));
  };

  return (
    <div className="review-input-wrapper" style={{ display: "flex" }}>
      <img className="show-poster" alt="show-poster" src={show.Show?.image}></img>
      <form onSubmit={handleClick}>
        <div style={{ display: "flex" }}>
          {show.Show?.name}
          {ongoingShow}
        </div>
        <textarea className="review-input-body" required onChange={(e) => setBody(e.target.value)}></textarea>
        <p className="character-counter" style={characterCounter()}>
          {body.length}/600
        </p>
        <div className="errors">{errors.body}</div>
        <div>
          Rating
          <ReviewRatingInput required disabled={false} rating={rating} onChange={onChange} />
        </div>
        <button style={{cursor:"pointer"}} type="submit">SAVE</button>
      </form>
    </div>
  );
}
