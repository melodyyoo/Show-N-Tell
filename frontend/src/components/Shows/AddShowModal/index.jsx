import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";

export default function AddShowModal() {
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  // const [errors, setErrors] = useState({});
  // const [validationObject, setValidationObject] = useState({});
  // const { closeModal } = useModal();
  // const history = useHistory();

  useEffect(() => {
    // const errorsObject = {};
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const years = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
    2006, 2005, 2004, 2003, 2002, 2001, 2000,
  ];

  // document.addEventListener(closeModal(), function() {
  //   // Code to handle modal close action
  //   setGenre("");
  //   setStartYear("")
  //   setEndYear("")

  // });


  const genres = ["Drama", "Romance", "Family", "Horror", "Sitcom", "Reality TV"];
  return (
    <div className="add-show-modal">
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Director
          <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
        </label>
        <label>
          Synopsis
          <textarea
            style={{ resize: "none", color: "black" }}
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>
        <div style={{ display: "flex" , gap: "10px"}}>
          <label>
            Start Year
            <select id="select" style={{color:"black"}} onChange={(e) => setStartYear(e.target.value)}>
            <option disabled defaultValue=" "></option>
              {years.map((year, idx) => {
                return <option value={year} key={idx}>{year}</option>;
              })}
            </select>
          </label>
          <label>
            End Year
            <select id="select" style={{color:"black"}} onChange={(e) => setEndYear(e.target.value)}>
            <option defaultValue=" "></option>
              <option>Ongoing</option>
              {years.map((year, idx) => {
                return <option value={year} key={idx}>{year}</option>;
              })}
            </select>
          </label>
        </div>
        <label>
          Genre
          <select id="select" style={{color:"black"}} onChange={(e)=> setGenre(e.target.value)}>
          <option value=" "></option>
            {genres.map((genre, idx) => {
              return <option value={genre} key={idx}>{genre}</option>;
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
      </form>
    </div>
  );
}
