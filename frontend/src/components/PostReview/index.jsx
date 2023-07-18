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
        <p>Review</p>
      </div>
      <div className="post-review-like">
        <i style={{color: "#EF8733"}}className="fa-solid fa-heart fa-2xl"></i>
        <p>Like</p>
      </div>
    </div>
  );
}
