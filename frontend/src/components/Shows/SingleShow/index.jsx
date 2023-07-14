import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetShowAndReview } from "../../../store/shows";
import { useParams } from "react-router-dom";
import "./SingleShow.css";

export default function SingleShow() {
  const dispatch = useDispatch();
  const { showId } = useParams();
  const show = useSelector((state) => state.shows.show);

  useEffect(() => {
    dispatch(thunkGetShowAndReview(showId));
  }, [dispatch, showId]);

  if (!show) return null;

  return (
    <div>
      <img className="show-banner" alt="show-banner" src={show.Show?.banner} />
      <div className="show-details-wrapper">
        <img className="show-image" alt="show-poster" src={show.Show?.image} />
        <div>
          <div className="show-text-wrapper">
            <p className="show-name">{show.Show?.name}</p>
            <p className="show-year">{show.Show?.year}</p>
            <p className="directed-by">Directed by {show.Show?.director}</p>
          </div>
            <p className="posted-by">Posted by {show.Show?.User?.username}</p>
            <p className="show-synopsis">{show.Show?.synopsis}</p>
        </div>
        <div>{/* <PostReview/> */}</div>
      </div>
    </div>
  );
}
