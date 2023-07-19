import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="landing-page-wrapper">
      <video autoPlay muted loop src="show-n-tell-movie.mp4"></video>
      <img className="landing-page-tv" alt="landing-page-tv" src="/landing-page-tv.svg"/>
      <h1 className="landing-page-text" style={{marginTop: "80px"}}>Like and review shows you've watched.</h1>
      <h1 className="landing-page-text">Tell your friends what's good.</h1>
    </div>
  );
}
