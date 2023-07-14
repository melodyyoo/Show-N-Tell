import "./ShowPoster.css";

export default function ShowPoster({ show }) {
  return (
    <div className="poster-wrapper">
      <img className="poster" alt="poster" src={show?.image}></img>
      <div className="poster-stats">
        <div style={{display: "flex"}}>
          <i class="fa-solid fa-heart" style={{ color: "#EF8832" }}/>
          <p style={{margin:0, color:"gray"}}>{show?.showLikes}</p>
        </div>
        <div style={{display: "flex"}}>
          <i class="fa-solid fa-comment" style={{ color: "#66B9EF" }}/>
          <p style={{margin: 0, color:"gray"}}>{show?.reviewsCount}</p>
        </div>
        <div style={{display: "flex"}}>

        </div>
      </div>
    </div>
  );
}
