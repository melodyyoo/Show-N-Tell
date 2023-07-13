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
      {
        <div>
          {user ? (
            <div>
              <p style={{ cursor: "pointer" }} className="log-out-button" onClick={logout}>
                Log Out
              </p>
            </div>
          ) : (
            <div className="signin-signup">
              <OpenModalButton
                className="login"
                buttonText="SIGN IN"
                modalComponent={<LoginFormModal />}
                title="SIGN IN"
              />
              <OpenModalButton
                className="signup"
                buttonText="CREATE ACCOUNT"
                modalComponent={<SignupFormModal />}
              />
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default ProfileButton;
