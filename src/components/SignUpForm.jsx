import React from "react";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
  return (
    <form className={classes.form}>
      <h1 className={classes.formTitle}>Create Account</h1>
      <label htmlFor="firstName"></label>
      <input type="text" placeholder="First Name" id="firstName" />
      <label htmlFor="lastName"></label>
      <input type="text" placeholder="lastName" id="lastName" />
      <label htmlFor="email"></label>
      <input type="text" placeholder="E-mail" id="email" />
      <label htmlFor="password"></label>
      <input type="password" placeholder="Password" id="password" />
      <label htmlFor="repeatPassword"></label>
      <input
        type="password"
        placeholder="Repeat Password"
        id="repeatPassword"
      />
      <button className={classes.submitBtn}>Create Account</button>
    </form>
  );
};

export default SignUpForm;
