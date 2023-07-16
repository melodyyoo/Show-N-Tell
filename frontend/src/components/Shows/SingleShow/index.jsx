import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetShowAndReview } from "../../../store/shows";
import { useParams } from "react-router-dom";
import "./SingleShow.css";
import AllReviews from "../../Reviews/AllReviews";
import PostReview from "../../PostReview";
import OpenModalButton from "../../OpenModalButton";
import EditShowModal from "../EditShowModal";
import LoginFormModal from "../../LoginFormModal";

export default function SingleShow() {
  const dispatch = useDispatch();
  const { showId } = useParams();
  const show = useSelector((state) => state.shows.show);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(thunkGetShowAndReview(showId));
  }, [dispatch, showId]);

  if (!show) return null;

  const checkUser = () => {
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
          modalComponent={<EditShowModal show={show}/>}
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
    } else {
      return <PostReview />;
    }
  };

  const ongoingShow = () => {
    if (!show.Show?.endYear) {
      return <p className="show-year">{show?.Show?.startYear}-</p>;
    } else if (show?.Show?.startYear === show?.Show?.endYear) {
      return <p className="show-year">{show?.Show?.startYear}</p>;
    } else {
      return (
        <p className="show-year">
          {show?.Show?.startYear}-{show?.Show?.endYear}
        </p>
      );
    }
  };

  return (
    <div>
      <img className="show-banner" alt="show-banner" src={show.Show?.banner} />
      <div className="show-details-wrapper">
        <img className="show-image" alt="show-poster" src={show.Show?.image} />
        <div>
          <div className="show-text-wrapper">
            <p className="show-name">{show.Show?.name}</p>
            {ongoingShow()}
            <p className="directed-by">Directed by {show.Show?.director}</p>
          </div>
          <p className="posted-by">Posted by {show.Show?.User?.username}</p>
          <p className="show-synopsis">{show.Show?.synopsis}</p>
        </div>
        {checkUser()}
      </div>
      {<AllReviews show={show} />}
    </div>
  );
}
