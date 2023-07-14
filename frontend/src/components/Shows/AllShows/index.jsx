import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllShows } from "../../../store/shows";
import ShowPoster from "../ShowPoster";
import "./AllShows.css";
import PopularReviews from "../../Reviews/PopularReviews";

export default function AllShows() {
  const dispatch = useDispatch();
  const showsState = useSelector((state) => state.shows.allShows);
  const shows = Object.values(showsState ||{})
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(thunkGetAllShows());
  }, [dispatch]);

  function randomShow() {
    return shows[Math.floor(Math.random() * shows.length)];
  }
  const show = randomShow();

  return (
    <div>
      {sessionUser ? (
        <h2 style={{ textAlign: "center", fontFamily: "'Lato',sans-serif" }}>
          Welcome Back, {sessionUser?.username}
        </h2>
      ): <h2 style={{visibility:"hidden"}}>asdf</h2>}
      <div className="posters-wrapper">
        <ShowPoster show={show} />
        <ShowPoster show={randomShow()} />
        <ShowPoster show={randomShow()} />
        <ShowPoster show={randomShow()} />
      </div>
      <PopularReviews/>
    </div>
  );
}
