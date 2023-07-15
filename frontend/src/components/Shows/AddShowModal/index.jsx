import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import "./AddShowModal.css";
import { thunkPostShow } from "../../../store/shows";

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
  // const [validationObject, setValidationObject] = useState({});
  // const { closeModal } = useModal();
  const history = useHistory();
  const sessionUser = useSelector(state=>state.session.user);

  const characterCounter = () => {
    if (synopsis.length > 600) {
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
      endYear,
      genre,
      image,
      banner,
      userId:sessionUser.id
    };

    const tempErrors = {};

    if (synopsis.length > 600) tempErrors.synopsis = "Synopsis must be less than 600 characters.";
    if (startYear > endYear) tempErrors.endYear = "Start year must come before the end year.";

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      dispatch(thunkPostShow(newShow))
      .then((show) => history.push(`/shows/${show.id}`))
        .catch(async (res) => {
          const data = await res.json();
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
      <form onSubmit={handleSubmit}>
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
              <option value="null">Ongoing</option>
              {years.map((year, idx) => {
                return (
                  <option value={year} key={idx}>
                    {year}
                  </option>
                );
              })}
            </select>
          </label>
          <div className="errors">{errors.endYear}</div>
        </div>
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
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </label>
        <label>
          Banner image
          <input type="text" value={banner} onChange={(e) => setBanner(e.target.value)} required />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}