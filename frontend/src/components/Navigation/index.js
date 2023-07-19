import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "./logo.svg";
import OpenModalButton from "../OpenModalButton";
import AddShowModal from "../Shows/AddShowModal";
import LoginFormModal from "../LoginFormModal";
import { useLocation } from "react-router-dom";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const {pathname} = useLocation();

  const modalComponent = sessionUser ? <AddShowModal/> : <LoginFormModal/>
  const title = sessionUser ? "DON'T SEE A SHOW? ADD ONE NOW!" : "SIGN IN";

  const splitPath = pathname.split('/');
  let navStyle;
  if((splitPath.includes("shows") || splitPath.includes("reviews")) && splitPath.length===3){
    navStyle={position:"absolute", zIndex: 3}
  }


  return (
    <div className="nav-bar" style={navStyle}>
      <NavLink className="logo-link" exact to="/shows">
        <img src={logo} alt={logo} />
        <p style={{ margin: "15px 0 0 10px", fontFamily: "'Josefin Sans', sans-serif", fontWeight:700}}>Show 'N Tell</p>
      </NavLink>
      <div style={{ display: "flex", alignItems: "center" , marginRight: "35px"}}>
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
