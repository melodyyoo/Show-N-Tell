import { useEffect, useRef, useState } from "react";
import "./CommentMenu.css";
import OpenModalButton from "../../OpenModalButton";
import CommentForm from "../CommentForm";
import DeleteCommentForm from "../DeleteCommentForm";

export default function CommentMenu({ reviewOwner , comment, reviewId}) {
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div ref={ulRef} style={{ position: "relative" }}>
      <p className="comment-menu-button" onClick={openMenu}>
        ...
      </p>
      {showMenu && (
        <div className="user-info">
          <OpenModalButton
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "'Open Sans', sans-serif",
              cursor: "pointer",
              margin: "10px 0",
              borderBottom: "1px solid gray",
              paddingBottom: "10px",
            }}
            buttonText="Edit Comment"
            title="EDIT YOUR COMMENT"
            modalComponent={<CommentForm formType="edit" reviewId={reviewId} reviewOwner={reviewOwner} comment={comment}/>}
          />
          <OpenModalButton
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "'Open Sans', sans-serif",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            buttonText="Delete Comment"
            title="PLEASE CONFIRM"
            modalComponent={<DeleteCommentForm reviewId={reviewId} />}
          />
        </div>
      )}
    </div>
  );
}
