/* Import Components */
import Form from "./Form";

/* Import useState() from React */
import { useState } from "react";

const Result = ({ name, email, password }) => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {display && <Form />}
      <div
        style={{
          visibility: display ? "hidden" : null,
        }}
      >
        <h1>Your information</h1>
        <div className="wrap-info">
          <div className="result">
            <p>
              <span>Name:</span> {name}
            </p>
            <p>
              <span>Email:</span> {email}
            </p>
            <p>
              <span>Password:</span> {password}
            </p>
          </div>
          <button
            type="submit"
            className="edit"
            onClick={(event) => {
              event.preventDefault();
              setDisplay(true);
            }}
          >
            Edit your information
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
