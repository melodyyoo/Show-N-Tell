import "./PostReview.css";

export default function PostReview() {
  return (
    <div className="post-review-wrapper">
      <div className="post-review-review">
        <i className="fa-solid fa-face-smile fa-2xl"></i>
        <p>Review</p>
      </div>
      <div className="post-review-like">
        <i style={{color: "#EF8733"}}class="fa-solid fa-heart fa-2xl"></i>
        <p>Like</p>
      </div>
    </div>
  );
}
