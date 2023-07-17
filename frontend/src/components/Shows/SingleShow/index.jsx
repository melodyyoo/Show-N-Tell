import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetShowAndReview } from "../../../store/shows";
import { useParams } from "react-router-dom";
import "./SingleShow.css";
import AllReviews from "../../Reviews/AllReviews";
import SingleShowLayout from "../../SingleShowLayout";

export default function SingleShow() {
  const dispatch = useDispatch();
  const { showId } = useParams();
  const show = useSelector((state) => state.shows.show);

  useEffect(() => {
    dispatch(thunkGetShowAndReview(showId));
  }, [dispatch, showId]);

  if (!show) return null;

  let ongoingShow;
    if (!show.Show?.endYear) {
      ongoingShow = <p className="show-year">{show?.Show?.startYear}-</p>;
    } else if (show?.Show?.startYear === show?.Show?.endYear) {
      ongoingShow = <p className="show-year">{show?.Show?.startYear}</p>;
    } else {
      ongoingShow =  (
        <p className="show-year">
          {show?.Show?.startYear}-{show?.Show?.endYear}
        </p>
      );
    }


  return (
    <SingleShowLayout reviewsOrComments={<AllReviews show={show}/>}>
      <div>
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
