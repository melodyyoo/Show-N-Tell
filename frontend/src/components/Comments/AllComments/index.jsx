import SingleComment from "../SingleComment";

export default function AllComments({ comments, reviewOwner }) {
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
          {comments.length} Comments
        </p>
        {comments.map((comment) => {
          return <SingleComment reviewOwner={reviewOwner} comment={comment} key={comment.id} />;
        })}
      </div>
    </div>
  );
}
