import "./LandingPage.css";

export default function LandingPageTV({setSrc}) {
  return (
    <svg
      className="landing-page-tv"
      width="781"
      height="624"
      viewBox="0 0 781 624"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="171.843"
        height="45.864"
        rx="16.0456"
        transform="matrix(0.691158 0.722704 -0.732621 0.680637 262.454 11.6169)"
        fill="#526FA8"
      />
      <path
        d="M478.65 13.5675C485.701 17.58 488.093 26.5076 483.993 33.5079L419.58 143.47C415.479 150.47 406.439 152.892 399.388 148.88L388.313 142.578C381.261 138.565 378.87 129.638 382.97 122.637L447.383 12.6752C451.484 5.67487 460.524 3.25274 467.575 7.26522L478.65 13.5675Z"
        fill="#526FA8"
      />
      <rect y="124" width="49" height="439" rx="17" fill="#526FA8" />
      <rect y="123" width="780" height="44" rx="11" fill="#526FA8" />
      <path
        d="M0.5 534C0.5 525.716 7.21573 519 15.5 519H765.5C773.784 519 780.5 525.716 780.5 534V548C780.5 556.284 773.784 563 765.5 563H15.5C7.21574 563 0.5 556.284 0.5 548V534Z"
        fill="#526FA8"
      />
      <rect x="670" y="123" width="110" height="433" rx="16" fill="#526FA8" />
      <ellipse onClick={()=>setSrc("himym.mp4")} className="tv-button orange" cx="725.5" cy="221" rx="18.5" ry="18" fill="#EF8733" />
      <circle onClick={()=>setSrc("bridgerton.mp4")} className="tv-button green" cx="725.5" cy="311.5" r="18.5" fill="#66DD67" />
      <ellipse onClick={()=>setSrc("the-bear.mp4")} className="tv-button blue" cx="725.5" cy="402" rx="18.5" ry="18" fill="#66B9EF" />
    </svg>
  );
}
