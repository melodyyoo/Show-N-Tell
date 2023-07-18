import { useEffect } from "react";
import SingleShowLayout from "../../SingleShowLayout";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetReview } from "../../../store/reviews";
import { useParams } from "react-router-dom";
import starIcons from "../../../hooks/starIcons";

export default function SingleReviewPage() {
  const dispatch = useDispatch();
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews.review);

  useEffect(() => {
    dispatch(thunkGetReview(reviewId));
  }, [dispatch, reviewId]);

  if (!review?.id || review.id !== parseInt(reviewId)) return null;

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

  return (
    <SingleShowLayout showId={review.showId} reviewsOrComments={review.Comments}>
      <div>
        <p>Review by {review.User?.username}</p>
        <div>
          <h1>{review.Show?.name}</h1>
          {ongoingShow}
          <div className="star-icons">{starIcons(review)}</div>
        </div>
        <p>Watched {review.watchedDate}</p>
        <p>{review.body}</p>
        <div className="review-likes">
          <i
            className="fa-solid fa-heart"
            style={{ color: "gray", display: "flex", alignItems: "center" }}
          ></i>
          <p style={{ fontSize: "13px", color: "gray", marginLeft: "5px" }}>
            {review.ReviewLikes?.length} likes
          </p>
        </div>
      </div>
    </SingleShowLayout>
  );
}
