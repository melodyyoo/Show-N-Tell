import { useModal } from "../../context/Modal";
import "./PostReview.css";
import AddReviewModal from "../Reviews/AddReviewModal";

export default function PostReview() {
  const {setModalContent, setTitle} = useModal();

  return (
    <div className="post-review-wrapper">
      <div className="post-review-review">
        <i onClick={()=>{
          setModalContent(<AddReviewModal/>)
          setTitle("ADD REVIEW")
          }}className="fa-solid fa-face-smile fa-2xl"></i>
        <p style={{fontFamily: "'Open Sans', sans-serif"}}>Review</p>
      </div>
      <div className="post-review-like" onClick={()=> window.alert("Likes feature coming soon")}>
        <i style={{color: "#EF8733"}}className="fa-solid fa-heart fa-2xl"></i>
        <p style={{fontFamily: "'Open Sans', sans-serif"}}>Like</p>
      </div>
    </div>
  );
}
