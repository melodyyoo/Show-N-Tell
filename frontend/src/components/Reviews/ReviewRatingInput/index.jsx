import { useState } from "react";
import './ReviewRatingInput.css';

export default function ReviewRatingInput({onChange, disabled, rating}) {
  const [activeRating, setActiveRating] = useState();

  return (
    <div className="rating-input">
      <div
        className={activeRating >= 1 ? "filled each-star" : "empty each-star"}
        onMouseEnter={() => {
          if (!disabled) setActiveRating(1);
        }}
        onMouseLeave={() => {
          if (!disabled) setActiveRating(rating);
        }}
        onClick={() => {
          if (!disabled) onChange(1);
        }}
      >
         <i className="fa-solid fa-face-smile" />
      </div>
      <div
        className={activeRating >= 2 ? "filled each-star" : "empty each-star"}
        onMouseEnter={() => {
          if (!disabled) setActiveRating(2);
        }}
        onMouseLeave={() => {
          if (!disabled) setActiveRating(rating);
        }}
        onClick={() => {
          if (!disabled) onChange(2);
        }}
      >
        <i className="fa-solid fa-face-smile"/>
      </div>
      <div
        className={activeRating >= 3 ? "filled each-star" : "empty each-star"}
        onMouseEnter={() => {
          if (!disabled) setActiveRating(3);
        }}
        onMouseLeave={() => {
          if (!disabled) setActiveRating(rating);
        }}
        onClick={() => {
          if (!disabled) onChange(3);
        }}
      >
        <i className="fa-solid fa-face-smile"/>
      </div>
      <div
        className={activeRating >= 4 ? "filled each-star" : "empty each-star"}
        onMouseEnter={() => {
          if (!disabled) setActiveRating(4);
        }}
        onMouseLeave={() => {
          if (!disabled) setActiveRating(rating);
        }}
        onClick={() => {
          if (!disabled) onChange(4);
        }}
      >
        <i className="fa-solid fa-face-smile"/>
      </div>
      <div
        className={activeRating >= 5 ? "filled each-star" : "empty each-star"}
        onMouseEnter={() => {
          if (!disabled) setActiveRating(5);
        }}
        onMouseLeave={() => {
          if (!disabled) setActiveRating(rating);
        }}
        onClick={() => {
          if (!disabled) onChange(5);
        }}
      >
        <i className="fa-solid fa-face-smile"/>
      </div>
    </div>
  );
}
