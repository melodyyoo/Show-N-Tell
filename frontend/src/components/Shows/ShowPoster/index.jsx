import { useHistory } from "react-router-dom";
import "./ShowPoster.css";

export default function ShowPoster({ show }) {
  const history = useHistory()
  return (
    <div className="poster-wrapper" onClick={()=>history.push(`/shows/${show.id}`)}>
      <img className="poster" alt="poster" src={show?.image}></img>
      <div className="poster-stats">
        <div style={{display: "flex"}}>
          <i className="fa-solid fa-heart" style={{ color: "#EF8832" }}/>
          <p style={{margin:0, color:"gray"}}>{show?.showLikes}</p>
        </div>
        <div style={{display: "flex"}}>
          <i className="fa-solid fa-comment" style={{ color: "#66B9EF" }}/>
          <p style={{margin: 0, color:"gray"}}>{show?.reviewsCount}</p>
        </div>
        <div style={{display: "flex"}}>
        </div>
      </div>
    </div>
  );
}
