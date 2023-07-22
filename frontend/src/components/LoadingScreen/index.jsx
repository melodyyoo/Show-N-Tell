import "./LoadingScreen.css";

export default function LoadingSpinner() {
  return (
    <>
      <div className="la-ball-pulse-sync la-2x">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Large files may take some time :)</p>
    </>
  );
}
