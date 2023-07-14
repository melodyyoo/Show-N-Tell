import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetShowAndReview } from "../../../store/shows";
import { useParams } from "react-router-dom";
import "./SingleShow.css";
import AllReviews from "../../Reviews/AllReviews";
import PostReview from "../../PostReview";

export default function SingleShow() {
  const dispatch = useDispatch();
  const { showId } = useParams();
  const show = useSelector((state) => state.shows.show);
  const sessionUser = useSelector(state=> state.session.user);


  useEffect(() => {
    dispatch(thunkGetShowAndReview(showId));
  }, [dispatch, showId]);

  if (!show) return null;

  const checkUser = () =>{
    if(sessionUser?.id === show.Show?.User?.id){
      return <button className="review-button">Edit or Delete Show</button>
    }else if(!sessionUser){
      return <button className="review-button">Sign in to log, rate, or review</button>
    }else{
      return <PostReview/>
    }
  }

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
        {checkUser()}
      </div>
      {<AllReviews show={show}/>}
    </div>
  );
}
