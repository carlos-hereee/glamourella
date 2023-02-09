import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import NoCaptchaForm from "../component/molecules/forms/NoCaptchaForm";

const SignUp = () => {
  const { signUp, signUpValues, signUpSchema, signUpError } =
    useContext(AuthContext);

  const onSubmit = (e) => signUp(e);
  let data = { values: signUpValues, schema: signUpSchema, onSubmit };
  return (
    <section className="secondary-container">
      <div className="card-header">
        <h3>Create Account</h3>
      </div>
      {signUpError && <p className="required">{signUpError}</p>}
      <NoCaptchaForm data={data} submit={onSubmit} isHorizontal={true} />
      <div className="form-link-wrapper">
        <Link to="/account" className="form-link">
          Already have an account? Login here
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
