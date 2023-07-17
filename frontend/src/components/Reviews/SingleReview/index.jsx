import "./SingleReview.css";
import starIcons from "../../../hooks/starIcons";
import { useHistory } from "react-router-dom";

export default function SingleReview({ review }) {
  const history = useHistory();

  return (
    <div className="single-review">
      <div style={{ display: "flex" }}>
        <p className="review-user" onClick={()=>history.push(`/reviews/${review?.id}`)}>Review by {review?.User?.username}</p>
        <div style={{ margin: "11px 0 0 10px" }}>{starIcons(review)}</div>
      </div>
      <p>{review.body}</p>
      <div className="review-likes">
        <i className="fa-solid fa-heart" style={{ color: "gray", display: "flex", alignItems: "center" }}></i>
        <p style={{ fontSize: "13px", color: "gray", marginLeft: "5px" }}>{review.likes} likes</p>
      </div>
    </div>
  );
}
