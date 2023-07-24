import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import "./AddShowModal.css";
import { thunkPostShow } from "../../../store/shows";
import LoadingSpinner from "../../LoadingScreen";

export default function AddShowModal() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoading, setIsLoading] = useState(false);

  const characterCounter = () => {
    if (synopsis?.length > 600) {
      return { color: "red" };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const newShow = {
      name,
      director,
      synopsis,
      startYear,
      endYear: endYear === "Ongoing" ? null : endYear,
      genre,
      images: [image, banner],
      userId: sessionUser.id,
    };

    const tempErrors = {};

    if (synopsis.length > 600) tempErrors.synopsis = "Synopsis must be less than 600 characters.";
    if (endYear && startYear > endYear) tempErrors.endYear = "Start year must come before the end year.";
    if (image.type !== "image/jpeg" && image.type !== "image/png")
      tempErrors.image = "Poster must be a JPEG, JPG, or PNG file.";
    if (banner.type !== "image/jpeg" && banner.type !== "image/png")
      tempErrors.banner = "Banner must be a JPEG, JPG, or PNG file.";

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      setIsLoading(true);
      dispatch(thunkPostShow(newShow))
        .then((show) => {
          closeModal();
          history.push(`/shows/${show.id}`);
          setIsLoading(false);
        })
        .catch((data) => {
          if (data && data.errors) {
            setErrors({ ...data.errors, ...errors });
          }
        });
    }
  };

  const years = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
    2006, 2005, 2004, 2003, 2002, 2001, 2000,
  ];

  const genres = ["Drama", "Romance", "Family", "Horror", "Sitcom", "Reality TV"];
  return (
    <div className="add-show-modal">
      <form style={{position: "relative"}} onSubmit={handleSubmit}>
        <label style={{ margin: "0 70px" }}>
          Title
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Director
          <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
        </label>
        <label htmlFor="synopsis" style={{ margin: "0 193px 0 0" }}>
          Synopsis
        </label>
        <textarea
          required
          id="synopsis"
          className="synopsis-input"
          style={{ resize: "none", color: "black" }}
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
        <p className="character-counter" style={characterCounter()}>
          {synopsis.length}/600
        </p>
        <div className="errors">{errors.synopsis}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label>
            Start Year
            <select
              required
              id="select"
              style={{ color: "black" }}
              onChange={(e) => setStartYear(e.target.value)}
            >
              <option defaultValue=" "></option>
              {years.map((year, idx) => {
                return (
                  <option value={year} key={idx}>
                    {year}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            End Year
            <select
              required
              id="select"
              style={{ color: "black" }}
              onChange={(e) => setEndYear(e.target.value)}
            >
              <option defaultValue=" "></option>
              <option label="Ongoing" value={"Ongoing"}></option>
              {years.map((year, idx) => {
                return (
                  <option value={year} key={idx}>
                    {year}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="errors">{errors.endYear}</div>
        <label>
          Genre
          <select required id="select" style={{ color: "black" }} onChange={(e) => setGenre(e.target.value)}>
            <option defaultValue=" "></option>
            {genres.map((genre, idx) => {
              return (
                <option value={genre} key={idx}>
                  {genre}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Show poster
          <input type="file" multiple onChange={(e) => setImage(e.target.files[0])} required />
        </label>
        <div className="errors">{errors.image}</div>
        <label>
          Banner image
          <input type="file" multiple onChange={(e) => setBanner(e.target.files[0])} required />
        </label>
        <div className="errors">{errors.banner}</div>
        {isLoading && (
          <div
            style={{
              width: "389.6px",
              height: "100%",
              position: "absolute",
              zIndex: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: " #12121280",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <LoadingSpinner />
          </div>
        )}
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
