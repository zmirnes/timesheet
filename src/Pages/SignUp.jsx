import React from "react";
import SignUpForm from "../components/SignUpForm";
import classes from "./SignUp.module.css";
import logoWhite from "../assets/logoWhite.svg";

const SignUp = () => {
  return (
    <div className={classes.container}>
      <img src={logoWhite} alt="logo" className={classes.logo} />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
