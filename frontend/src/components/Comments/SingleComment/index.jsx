import { useSelector } from "react-redux";
import "./SingleComment.css";
import CommentMenu from "../CommentMenu";

export default function SingleComment({ comment , reviewOwner, reviewId}) {
  const sessionUser = useSelector((state) => state.session.user);
  if(!comment)return null;

  function convertDate() {
    return new Date(comment.createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div>
      {sessionUser?.username === comment.User?.username && <CommentMenu comment={comment} reviewOwner={reviewOwner} reviewId={reviewId}/>}
      <div className="comment-box">
        <div>
          <p className="user-date-comment" >{comment.User?.username}</p>
          <p className="user-date-comment">{convertDate()}</p>
        </div>
        <div style={{ width: "350px" }}>{comment.body}</div>
      </div>
    </div>
  );
}
