import { useContext } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { AuthContext } from "../../utils/context/AuthContext";
import Forms from "../forms/Forms";

const values = { email: "", password: "" };
const schema = yup.object().shape({
  email: yup.string().email().required("*Required field"),
  password: yup.string().required("*Required field"),
});
const Auth = () => {
  const { signIn } = useContext(AuthContext);

  const onSubmit = (e) => signIn(e);
  return (
    <div>
      <h2>Login</h2>
      <Forms data={{ values, schema, onSubmit }} />
      <Link to="/sign-up" className="form-link">
        Create an account?
      </Link>
    </div>
  );
};

export default Auth;
