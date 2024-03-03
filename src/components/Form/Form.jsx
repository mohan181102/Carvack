"use client";
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [isSubmit, setisSubmit] = useState(false);

  function submithandler(e) {
    e.preventDefault();
    const emailvalue = e.nativeEvent.srcElement[1].value;
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailvalue)) {
      alert("valid email!!");
    } else {
      alert("invalid email!");
    }
  }

  return (
    <>
      <div className="form-field">
        <form className="form" onSubmit={(e) => submithandler(e)}>
          <h3 className="h3-form">Submit all details</h3>
          <label className="label">Username:- </label>
          <input
            name="username"
            className="input-form"
            placeholder="type username.."
            required
          />
          <label className="label">email:- </label>
          <input
            name="email"
            className="input-form"
            placeholder="type email.."
            type="email"
            required
          />
          <label className="label">Password:- </label>
          <input
            name="password"
            className="input-form"
            placeholder="type password.."
            required
          />

          <button type="submit" className="submit-btn" disabled={isSubmit}>
            {!isSubmit ? "Submit" : "loading..."}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
