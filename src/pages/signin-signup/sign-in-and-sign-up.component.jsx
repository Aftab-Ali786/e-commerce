import React from "react";
import SignIn from "../../component/sign-In/sign-in.component";  // Corrected component name to match the naming convention
import SignUp from "../../component/sign-up/sign-up.component";  // Corrected component name
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
