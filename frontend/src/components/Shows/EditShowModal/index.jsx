import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { thunkEditShow } from "../../../store/shows";
import OpenModalButton from "../../OpenModalButton";
import DeleteShowModal from "../DeleteShowModal";
import LoadingSpinner from "../../LoadingScreen";

export default function EditShowModal({ show }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(show.Show.name);
  const [director, setDirector] = useState(show.Show.director);
  const [synopsis, setSynopsis] = useState(show.Show.synopsis);
  const [startYear, setStartYear] = useState(show.Show.startYear);
  const [endYear, setEndYear] = useState(show.Show.endYear);
  const [genre, setGenre] = useState(show.Show.genre);
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
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

    const filesArr = [];
    filesArr.push(image);
    filesArr.push(banner);

    const updatedShow = {
      name,
      director,
      synopsis,
      startYear,
      endYear: endYear === "Ongoing" ? null : endYear,
      genre,
      images: filesArr,
      userId: sessionUser.id,
    };

    const tempErrors = {};

    if (synopsis.length > 600) tempErrors.synopsis = "Synopsis must be less than 600 characters.";
    if (endYear && startYear > endYear) tempErrors.endYear = "Start year must come before the end year.";
    if (image && image.type !== "image/jpeg" && image.type !== "image/png")
      tempErrors.image = "Poster must be a JPEG, JPG, or PNG file.";
    if (banner && banner.type !== "image/jpeg" && banner.type !== "image/png")
      tempErrors.banner = "Banner must be a JPEG, JPG, or PNG file.";

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      setIsLoading(true);
      dispatch(thunkEditShow(updatedShow, show?.Show?.id))
        .then(() => {
          closeModal();
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
    <div className="edit-show-modal">
      <form style={{position:"relative"}} onSubmit={handleSubmit}>
        <label style={{ margin: "0 70px" }}>
          Title
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Director
          <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
        </label>
        <label htmlFor="synopsis" style={{ margin: "0 193px 0 0" }}>
          Synopsis
        </label>
        <textarea
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
              id="select"
              value={endYear ? endYear : ""}
              style={{ color: "black" }}
              onChange={(e) => setEndYear(e.target.value)}
            >
              <option defaultValue=""></option>
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
          <select
            value={genre}
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
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <div className="errors">{errors.image}</div>
        <label>
          Banner image
          <input type="file" onChange={(e) => setBanner(e.target.files[0])} />
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
        <div style={{display:"flex", gap:"5px"}}>
          <button style={{ cursor: "pointer", marginBottom:"20px" }} className="submit-button" type="submit">
            SAVE
          </button>
          <OpenModalButton
            buttonText="DELETE"
            style={{
              cursor: "pointer",
              backgroundColor: "gray",
              borderRadius: "5px",
              width: "70px",
              height: "2rem",
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            modalComponent={<DeleteShowModal show={show} />}
            title="PLEASE CONFIRM"
          />
        </div>
      </form>
    </div>
  );
}
