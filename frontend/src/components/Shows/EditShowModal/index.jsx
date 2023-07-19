import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { thunkEditShow } from "../../../store/shows";
import OpenModalButton from "../../OpenModalButton";
import DeleteShowModal from "../DeleteShowModal";

export default function EditShowModal({ show }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(show.Show.name);
  const [director, setDirector] = useState(show.Show.director);
  const [synopsis, setSynopsis] = useState(show.Show.synopsis);
  const [startYear, setStartYear] = useState(show.Show.startYear);
  const [endYear, setEndYear] = useState(show.Show.endYear);
  const [genre, setGenre] = useState(show.Show.genre);
  const [image, setImage] = useState(show.Show.image);
  const [banner, setBanner] = useState(show.Show.banner);
  const [errors, setErrors] = useState({});
  // const [validationObject, setValidationObject] = useState({});
  const { closeModal } = useModal();
  //   const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const characterCounter = () => {
    if (synopsis?.length > 600) {
      return { color: "red" };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const updatedShow = {
      name,
      director,
      synopsis,
      startYear,
      endYear,
      genre,
      image,
      banner,
      userId: sessionUser.id,
    };

    const tempErrors = {};

    if (synopsis.length > 600) tempErrors.synopsis = "Synopsis must be less than 600 characters.";
    if (endYear && startYear > endYear) tempErrors.endYear = "Start year must come before the end year.";

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      dispatch(thunkEditShow(updatedShow, show?.Show?.id))
        .then((show) => {
          closeModal();
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
    <div className="edit-show-modal">
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
              value={startYear}
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
              value={endYear ? endYear : null}
              style={{ color: "black" }}
              onChange={(e) => setEndYear(e.target.value)}
            >
              <option defaultValue=" "></option>
              <option label="Ongoing" value={""}></option>
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
          <select
            value={genre}
            required
            id="select"
            style={{ color: "black" }}
            onChange={(e) => setGenre(e.target.value)}
          >
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
        <div>
          <button className="submit-button" type="submit">
            SAVE
          </button>
          <OpenModalButton
            buttonText="DELETE"
            style={{cursor:"pointer", backgroundColor: "gray", borderRadius: "10px", width: "70px", height: "30px",fontFamily:"'Open Sans', sans-serif", fontSize:"13px", display: "flex", justifyContent:"center", alignItems:"center" }}
            modalComponent={<DeleteShowModal show={show} />}
            title="PLEASE CONFIRM"
          />
        </div>
      </form>
    </div>
  );
}
