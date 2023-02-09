import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/AuthContext";
import NoCaptchaForm from "../molecules/forms/NoCaptchaForm";

const Login = () => {
  const { signIn, loginValues, loginSchema, signInError } = useContext(AuthContext);

  const onSubmit = (e) => signIn(e);
  return (
    <div className="secondary-container">
      <div className="card-header">
        <h3>Login</h3>
      </div>
      {signInError && <p className="required">{signInError}</p>}
      <NoCaptchaForm
        data={{ values: loginValues, schema: loginSchema }}
        submit={onSubmit}
      />
      <Link to="/sign-up" className="form-link">
        Don't have an account? Create one here
      </Link>
    </div>
  );
};

export default Login;
