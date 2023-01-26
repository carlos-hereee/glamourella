import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/AuthContext";
import Forms from "../organisms/Forms";

const Login = () => {
  const { signIn, loginValues, loginSchema, signInError } = useContext(AuthContext);

  const onSubmit = (e) => signIn(e);
  return (
    <div className="card">
      <h3>Login</h3>
      {signInError && <p className="required">{signInError}</p>}
      <Forms data={{ values: loginValues, schema: loginSchema }} submit={onSubmit} />
      <Link to="/sign-up" className="form-link">
        Create an account?
      </Link>
    </div>
  );
};

export default Login;
