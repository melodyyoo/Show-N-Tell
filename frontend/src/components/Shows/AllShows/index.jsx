import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllShows } from "../../../store/shows";
import ShowPoster from "../ShowPoster";
import "./AllShows.css";
import PopularReviews from "../../Reviews/PopularReviews";

export default function AllShows() {
  const dispatch = useDispatch();
  const shows = useSelector((state) => Object.values(state.shows.allShows));
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(thunkGetAllShows());
  }, [dispatch]);

  function randomShow() {
    return shows[Math.floor(Math.random() * shows.length)];
  }

  return (
    <div>
      {sessionUser ? (
        <h2 style={{ textAlign: "center", fontFamily: "'Lato',sans-serif" }}>
          Welcome Back, {sessionUser?.username}
        </h2>
      ): <h2 style={{visibility:"hidden"}}>asdf</h2>}
      <div className="posters-wrapper">
        <ShowPoster show={randomShow()} />
        <ShowPoster show={randomShow()} />
        <ShowPoster show={randomShow()} />
        <ShowPoster show={randomShow()} />
      </div>
      <PopularReviews/>
    </div>
  );
}
