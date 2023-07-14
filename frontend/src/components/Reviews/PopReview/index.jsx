import starIcons from "../../../hooks/starIcons";
import "./PopReview.css";

export default function PopReview({ review }) {
  if (!review) return null;

  const ongoingShow = () =>{
    if(!review?.Show?.endYear){
      return <p style={{ margin: "2px 0 0 10px", fontFamily:"Lato" }}>{review?.Show?.startYear}-</p>
    }else if(review?.Show?.startYear === review?.Show?.endYear){
      return <p style={{ margin: "2px 0 0 10px", fontFamily:"Lato" }}>{review?.Show?.startYear}</p>
    }else{
      return  <p style={{ margin: "2px 0 0 10px", fontFamily:"Lato" }}>{review?.Show?.startYear}-{review?.Show?.endYear}</p>
    }
  }

  return (
    <div className="single-review-wrapper">
      <img className="review-poster" alt="review-poster" src={review.Show?.image}></img>
      <div>
        <div style={{ display: "flex" }}>
          <p className="review-name">{review.Show?.name}</p>
          {ongoingShow()}
        </div>
        <div className="user-of-review">
            <p style={{fontFamily:"'Open Sans', sans-serif", fontSize: "13px"}}>{review.User?.username}</p>
            <div className="star-icons">{starIcons(review)}</div>
        </div>
        <p style={{ fontSize: "13px" }}>{review.body}</p>
        <div className="review-likes">
          <i className="fa-solid fa-heart" style={{ color: "gray", display: "flex", alignItems: "center" }}></i>
          <p style={{ fontSize: "13px", color: "gray", marginLeft: "5px" }}>{review.likes} likes</p>
        </div>
      </div>
    </div>
  );
}
