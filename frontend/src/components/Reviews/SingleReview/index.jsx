import starIcons from "../../../hooks/starIcons";
import "./SingleReview.css";

export default function SingleReview({ review }) {
  if (!review) return null;

  return (
    <div className="single-review-wrapper">
      <img className="review-poster" alt="review-poster" src={review.Show?.image}></img>
      <div>
        <div style={{ display: "flex" }}>
          <p className="review-name">{review.Show?.name}</p>
          <p style={{ margin: "0 0 0 10px" }}>{review.Show?.year}</p>
        </div>
        <div className="user-of-review">
            <p style={{fontFamily:"Lato", fontSize: "13px"}}>{review.User?.username}</p>
            <div className="star-icons">{starIcons(review)}</div>
        </div>
        <p style={{ fontSize: "13px" }}>{review.body}</p>
        <div className="review-likes">
          <i class="fa-solid fa-heart" style={{ color: "gray", display: "flex", alignItems: "center" }}></i>
          <p style={{ fontSize: "13px", color: "gray", marginLeft: "5px" }}>{review.likes} likes</p>
        </div>
      </div>
    </div>
  );
}