import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const tempErrors = {};
    if (credential.length < 4) tempErrors.credential = "Username must be at least 4 characters";

    if (password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      dispatch(sessionActions.thunkSetSessionUser({ credential, password }))
        .then(history.push("/shows"))
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
  };
  const demoUserLogin = (e) => {
    e.preventDefault();
    dispatch(sessionActions.thunkSetSessionUser({ credential: "Demo-lition", password: "password" }))
      .then(history.push("/shows"))
      .then(closeModal);
  };

  return (
    <div className="login-modal">
      <form onSubmit={handleSubmit}>
        {errors.credential && <p className="errors">{errors.credential}</p>}
        <label>
          Username or Email
          <input type="text" value={credential} onChange={(e) => setCredential(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <div style={{display: "flex", gap:"10px"}}>
          <button className="log-in-button" type="submit">
            LOG IN
          </button>
          <button className="demo-user-button" onClick={demoUserLogin}>
            DEMO USER
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;
