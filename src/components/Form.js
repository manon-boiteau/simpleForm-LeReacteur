/* Import Components */
import Result from "./Result";

/* Import useState() from React */
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [display, setDisplay] = useState(false);

  // Functions
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSecondPasswordChange = (event) => {
    const value = event.target.value;
    setSecondPassword(value);
  };

  return (
    <>
      {display && <Result name={name} email={email} password={password} />}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          password !== secondPassword
            ? alert("‼️Your two passwords are not the same 😳")
            : setDisplay(true);
        }}
        style={{
          visibility: display ? "hidden" : null,
        }}
      >
        <h1>Create your account</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
          style={{
            border: password !== secondPassword ? "#ff7f50 2px solid" : null,
          }}
        />
        <label htmlFor="password2">Confirm your password</label>
        <input
          type="password"
          id="password2"
          placeholder="Confirm your password"
          value={secondPassword}
          onChange={handleSecondPasswordChange}
          required
          style={{
            border: password !== secondPassword ? "#ff7f50 2px solid" : null,
          }}
        />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default Form;
