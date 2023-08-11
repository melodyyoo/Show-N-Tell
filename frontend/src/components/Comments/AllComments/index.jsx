import CommentForm from "../CommentForm";
import SingleComment from "../SingleComment";

export default function AllComments({ comments, reviewOwner, reviewId }) {
  if(!comments)return null
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{width:"600px"}}>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "18px",
            borderBottom: "#808080 1px solid",
          }}
        >
          {comments.length === 1 ? `${comments.length} Comment` : `${comments?.length} Comments`}
        </p>
        {comments.map((comment) => {
          return <SingleComment reviewId={reviewId} reviewOwner={reviewOwner} comment={comment} key={comment.id} />;
        })}
        <CommentForm reviewId={reviewId} reviewOwner={reviewOwner} formType="post"/>
      </div>
    </div>
  );
}
