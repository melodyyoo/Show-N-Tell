import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const tempErrors = {};
    if (!email) tempErrors.email = "Email required";
    if (!username) tempErrors.username = "Username required";
    if (username.length < 4) tempErrors.username = "Username must be at least 4 characters";
    if (!password) tempErrors.password = "Password required";
    if (password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    if (!firstName) tempErrors.firstName = "First name required";
    if (!lastName) tempErrors.lastName = "Last name required";
    if (!confirmPassword) tempErrors.confirmPassword = "Confirm password required";
    if (password !== confirmPassword)
      tempErrors.passwordMatch = "Confirm Password field must be the same as the Password field.";

    const tempErrorsArray = Object.values(tempErrors);
    if (tempErrorsArray.length > 0) {
      setErrors(tempErrors);
    } else {
      dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      ).then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
    }
  };

  return (
    <div className="signup-modal">
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        {errors.email && <p className="errors">{errors.email}</p>}
        <label>
          Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        {errors.username && <p className="errors">{errors.username}</p>}
        <label>
          First Name
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        {errors.firstName && <p className="errors">{errors.firstName}</p>}
        <label>
          Last Name
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
        {errors.lastName && <p className="errors">{errors.lastName}</p>}
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        {errors.password && <p className="errors">{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}
        {errors.passwordMatch && <p className="errors">{errors.passwordMatch}</p>}
        <button className="submit-button" type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default SignupFormModal;
