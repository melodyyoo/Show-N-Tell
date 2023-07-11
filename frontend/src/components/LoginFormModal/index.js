import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [validationObject, setValidationObject] = useState({})
  const { closeModal } = useModal();

  useEffect(()=>{
    const errorsObject = {};

    if(credential.length < 4)errorsObject.credential = 'Username must be at least 4 characters';

    if(password.length < 6)errorsObject.password = 'Password must be at least 6 characters';

    setValidationObject(errorsObject);
  }, [credential, password])


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.thunkSetSessionUser({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const demoUserLogin = (e) =>{
    e.preventDefault();
    return dispatch(sessionActions.thunkSetSessionUser({credential:"Demo-lition",  password: 'password'}))
    .then(closeModal);
  }

  return (
    <div className="login-modal">
      <form onSubmit={handleSubmit}>
          {errors.credential && (
            <p className="errors">{errors.credential}</p>
          )}
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="log-in-button" disabled={Object.keys(validationObject).length} type="submit">Log In</button>
        <button className="demo-user-button" onClick={demoUserLogin}>Demo User</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
