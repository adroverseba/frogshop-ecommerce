import React from "react";
import logos from "@logos/logo_frogshop.svg";
import iconMessage from "@icons/email.svg";

import "../styles/PasswordRecovery.scss";

export const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="form-container">
        <img src={logos} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={iconMessage} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};
