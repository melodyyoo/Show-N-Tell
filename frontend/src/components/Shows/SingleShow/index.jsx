import { useDispatch, useSelector } from "react-redux";
import "./SingleShow.css";
import AllReviews from "../../Reviews/AllReviews";
import SingleShowLayout from "../../SingleShowLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { thunkGetReview } from "../../../store/reviews";

export default function SingleShow() {
  const show = useSelector((state) => state.shows.show);
  const { showId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    const userReview = show?.Reviews?.find((review) => review?.userId === sessionUser?.id);
    if (userReview) {
      dispatch(thunkGetReview(userReview.id));
    }
  });
  if (!show) return null;


  let ongoingShow;
  if (!show.Show?.endYear) {
    ongoingShow = <p className="show-year">{show?.Show?.startYear}-</p>;
  } else if (show?.Show?.startYear === show?.Show?.endYear) {
    ongoingShow = <p className="show-year">{show?.Show?.startYear}</p>;
  } else {
    ongoingShow = (
      <p className="show-year">
        {show?.Show?.startYear}-{show?.Show?.endYear}
      </p>
    );
  }

  return (
    <SingleShowLayout showId={showId} reviewsOrComments={<AllReviews show={show} />}>
      <div className="show-info-wrapper">
        <div className="show-text-wrapper">
          <p className="show-name">{show.Show?.name}</p>
          {ongoingShow}
          <p className="directed-by">Directed by {show.Show?.director}</p>
        </div>
        <p className="posted-by">Posted by {show.Show?.User?.username}</p>
        <p className="show-synopsis">{show.Show?.synopsis}</p>
      </div>
    </SingleShowLayout>
  );
}
