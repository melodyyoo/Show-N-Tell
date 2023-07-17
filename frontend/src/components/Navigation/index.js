import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "./logo.svg";
import OpenModalButton from "../OpenModalButton";
import AddShowModal from "../Shows/AddShowModal";
import LoginFormModal from "../LoginFormModal";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const modalComponent = sessionUser ? <AddShowModal/> : <LoginFormModal/>
  const title = sessionUser ? "DON'T SEE A SHOW? ADD ONE NOW!" : "SIGN IN";

  return (
    <div
      className="nav-bar"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        borderBottom: "solid rgb(175, 175, 175)",
      }}
    >
      <NavLink className="logo-link" exact to="/shows">
        <img src={logo} alt={logo} />
        <p style={{ margin: "15px 0 0 10px", fontFamily: "'Lato', sans-serif" }}>Show 'N Tell</p>
      </NavLink>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLink className="all-shows-button" exact to="/shows">
          SHOWS
        </NavLink>
        {isLoaded && <ProfileButton user={sessionUser} />}
        <OpenModalButton
          style={{
            height: "30px",
            width: " 80px",
            cursor: "pointer",
            backgroundColor: "#07B507",
            border: "none",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "14px",
            borderRadius: "5px",
            marginRight: "10px",
            display: "flex",
            justifyContent:"center",
            alignItems:"center"
          }}
          buttonText="+ SHOW"
          modalComponent={modalComponent}
          title={title}
        />
      </div>
    </div>
  );
}

export default Navigation;
