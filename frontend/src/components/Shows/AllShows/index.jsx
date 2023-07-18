import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllShows } from "../../../store/shows";
import ShowPoster from "../ShowPoster";
import "./AllShows.css";
import PopularReviews from "../../Reviews/PopularReviews";
import SwiperCarousel from "../../SwiperCarousel";


export default function AllShows() {
  const dispatch = useDispatch();
  const showsState = useSelector((state) => state.shows.allShows);
  const shows = Object.values(showsState ||{})
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(thunkGetAllShows());
  }, [dispatch]);


  return (
    <div>
      {sessionUser ? (
        <h2 style={{ textAlign: "center", fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, marginTop:"30px"}}>
          Welcome Back, {sessionUser?.username}
        </h2>
      ): <h2 style={{visibility:"hidden"}}>asdf</h2>}
      <SwiperCarousel shows={shows}/>
      <PopularReviews/>
    </div>
  );
}
