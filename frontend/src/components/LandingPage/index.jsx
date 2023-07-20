import { useState } from "react";
import "./LandingPage.css";
import LandingPageTV from "./LandingPageTV";

export default function LandingPage() {
  const [src, setSrc] = useState("succession.mp4");


  return (
    <div className="landing-page-wrapper">
      <video autoPlay muted loop src={src}></video>
      <LandingPageTV setSrc={setSrc} src={src}/>
      <h1 className="landing-page-text" style={{ marginTop: "80px" }}>
        Like and review shows you've watched.
      </h1>
      <h1 className="landing-page-text">Tell your friends what's good.</h1>
    </div>
  );
}
