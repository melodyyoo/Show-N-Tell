import { useSelector } from "react-redux";
import "./SingleComment.css";

export default function SingleComment({ comment }) {
  const sessionUser = useSelector((state) => state.session.user);

  console.log("session user: ", sessionUser);
  function convertDate() {
    return new Date(comment.createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div>
      {sessionUser.username === comment.User.username && <p className="comment-menu">...</p>}
      <div className="comment-box">
        <div >
          <p className="user-date-comment" >{comment.User.username}</p>
          <p className="user-date-comment">{convertDate()}</p>
        </div>
        <div style={{ width: "350px" }}>{comment.body}</div>
      </div>
    </div>
  );
}
