import { useDispatch, useSelector } from "react-redux";
import "./PopularReviews.css";
import { thunkGetPopularReviews } from "../../../store/reviews";
import { useEffect } from "react";
import SingleReview from "../SingleReview";
import "./PopularReviews.css";

export default function PopularReviews() {
  const reviews = Object.values(useSelector((state) => state.reviews.popularReviews));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetPopularReviews());
  }, [dispatch]);

  return (
    <div className="popular-reviews-wrapper">
      <p className="pop-reviews-title">POPULAR REVIEWS</p>
      <div className="pop-reviews-inner-wrapper">
        {reviews.map((review) => {
          return <SingleReview review={review} key={review.id} />;
        })}
      </div>
    </div>
  );
}
