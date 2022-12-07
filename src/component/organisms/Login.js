import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/AuthContext";
import Forms from "../forms/Forms";

const Login = () => {
  const { signIn, loginValues, loginSchema, signInError } =
    useContext(AuthContext);
  const onSubmit = (e) => signIn(e);
  let formData = {
    values: loginValues,
    schema: loginSchema,
    onSubmit,
    isLogin: true,
  };
  return (
    <div className="card">
      <h2>Login</h2>
      {signInError && <p className="required">{signInError}</p>}
      <Forms data={formData} />
      <Link to="/sign-up" className="form-link">
        Create an account?
      </Link>
    </div>
  );
};

export default Login;
