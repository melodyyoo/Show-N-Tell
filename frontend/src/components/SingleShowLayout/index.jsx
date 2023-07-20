import LoginFormModal from "../LoginFormModal";
import OpenModalButton from "../OpenModalButton";
import PostReview from "../PostReview";
import EditShowModal from "../Shows/EditShowModal";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetShowAndReview } from "../../store/shows";
import { useEffect } from "react";
import EditReviewModal from "../Reviews/EditReviewModal";
import { useLocation } from "react-router-dom/";
import "./SingleShowLayout.css";
import { useHistory } from "react-router-dom";

export default function SingleShowLayout({ showId, children, reviewsOrComments }) {
  const show = useSelector((state) => state.shows.show);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(thunkGetShowAndReview(showId));
  }, [dispatch, showId]);

  return (
    <div>
      <img className="show-banner" alt="show-banner" src={show.Show?.banner} />
      <div style={{position:"relative"}}>
        <img className="banner-frame" alt="banner-frame" src="/banner-frame.svg"/>
      </div>
      <div className="show-details-wrapper">
        <img className="show-image" alt="show-poster" src={show.Show?.image} onClick={()=>history.push(`/shows/${showId}`)}/>
        {children}
        <EditOrReviewButton show={show} />
      </div>
      {reviewsOrComments}
    </div>
  );
}

function EditOrReviewButton({ show }) {
  const sessionUser = useSelector((state) => state.session.user);
  const review = useSelector((state) => state.reviews.review);
  const { pathname } = useLocation();

  if (sessionUser?.id === show.Show?.User?.id) {
    return (
      <OpenModalButton
        style={{
          height: " 50px",
          width: " 250px",
          backgroundColor: "#445566",
          border: "none",
          cursor: "pointer",
          marginTop: "50px",
          borderRadius: "5px",
          fontFamily: "'Open Sans', sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        buttonText="Edit or Delete Show"
        title="Edit show"
        modalComponent={<EditShowModal show={show} />}
      />
    );
  } else if (!sessionUser) {
    return (
      <OpenModalButton
        style={{
          height: " 50px",
          width: " 250px",
          backgroundColor: "#445566",
          border: "none",
          cursor: "pointer",
          marginTop: "50px",
          borderRadius: "5px",
          fontFamily: "'Open Sans', sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        title="SIGN IN"
        buttonText="Sign in to log, rate, or review"
        modalComponent={<LoginFormModal />}
      />
    );
  } else if (pathname.includes("reviews") && sessionUser?.id === review?.userId) {
    return (
      <OpenModalButton
        style={{
          height: " 50px",
          width: " 250px",
          backgroundColor: "#445566",
          border: "none",
          cursor: "pointer",
          marginTop: "50px",
          borderRadius: "5px",
          fontFamily: "'Open Sans', sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        title="EDIT REVIEW"
        buttonText="Edit or Delete Review"
        modalComponent={<EditReviewModal review={review} />}
      />
    );
  } else if (
    pathname.includes("shows") &&
    show?.Reviews?.find((review) => review?.userId === sessionUser?.id)
  ) {
    return (
      <OpenModalButton
        style={{
          height: " 50px",
          width: " 250px",
          backgroundColor: "#445566",
          border: "none",
          cursor: "pointer",
          marginTop: "50px",
          borderRadius: "5px",
          fontFamily: "'Open Sans', sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        title="EDIT REVIEW"
        buttonText="Edit or Delete Review"
        modalComponent={<EditReviewModal review={review} />}
      />
    );
  } else {
    return <PostReview />;
  }
}
