import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  // const openMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push("/");
  };



  // const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div ref={ulRef} style={{ display: "flex", justifyContent: "flex-end" }}>
    <OpenModalButton buttonText="SIGN IN" modalComponent={<LoginFormModal/>} title="SIGN IN"/>
    <OpenModalButton buttonText="CREATE ACCOUNT" modalComponent={<SignupFormModal/>}/>
      {showMenu && (
        <div>
          {user ? (
            <div className="user-info" style={{ position: "absolute", right: 0}}>
              <p style={{ textAlign:'center'}}>
                Hello, {user.firstName}
              </p>
              <p className="email">{user.email}</p>
              <button
                className="manage-spots"
                onClick={(e) => history.push("/spots/current")}
              >
                Manage Spots
              </button>
              <button
                className="manage-reviews"
                onClick={(e) => history.push("/reviews/current")}
              >
                Manage Reviews
              </button>
              <p style={{textAlign:'center'}}>
                <button style={{cursor: 'pointer'}} className="log-out-button" onClick={logout}>Log Out</button>
              </p>
            </div>
          ) : (
            <div className="menu-buttons user-info logged-out-modal" style={{ position: "absolute", right: 0 }}>
              <p className='logged-out-button login'>
                <OpenModalButton
                  buttonText="Log In"
                  onButtonClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
              </p>
              <p className='logged-out-button signup'>
                <OpenModalButton
                  className="open-modal-button"
                  buttonText="Sign Up"
                  onButtonClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                />
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
