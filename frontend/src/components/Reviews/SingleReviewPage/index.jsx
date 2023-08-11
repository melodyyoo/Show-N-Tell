import { useEffect } from "react";
import SingleShowLayout from "../../SingleShowLayout";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetReview } from "../../../store/reviews";
import { useParams } from "react-router-dom";
import starIcons from "../../../hooks/starIcons";
import "./SingleReviewPage.css";
import AllComments from "../../Comments/AllComments";

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
    <SingleShowLayout showId={review.showId} reviewsOrComments={<AllComments comments={review?.Comments} reviewOwner={review?.User.username} reviewId={review?.id}/>}>
      <div>
        <p className="posted-by review-by">Review by {review.User?.username}</p>
        <div className="single-review-page-text">
          <div className="show-text-wrapper">
            <h1 className="show-name">{review.Show?.name}</h1>
            {ongoingShow}
            <div style={{ marginBottom: "10px" }} className="star-icons">
              {starIcons(review)}
            </div>
          </div>
          <p style={{fontFamily: "'Open Sans', sans-serif"}}>Watched {convertDate(review)}</p>
          <p style={{wordBreak: "break-word"}}>{review.body}</p>
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
      </div>
    </SingleShowLayout>
  );
}

function convertDate(review){
  return new Date(review?.watchedDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

}
