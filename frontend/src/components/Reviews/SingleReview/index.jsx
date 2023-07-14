import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetUser } from "../../../store/user";
import "./SingleReview.css";
import starIcons from "../../../hooks/starIcons";

export default function SingleReview({ review }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetUser(review.userId));
  }, [dispatch, review.userId]);

  return (
    <div className="single-review">
      <div style={{ display: "flex" }}>
        <p className="review-user">Review by {user.username}</p>
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
