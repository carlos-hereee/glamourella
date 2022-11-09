import { Link } from "react-router-dom";
import Forms from "../forms/Forms";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext";

const values = { email: "", password: "", confirmPassword: "" };
const schema = yup.object().shape({
  email: yup.string().email().required("*Required field"),
  password: yup.string().required("*Required field"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", (val) => {
      return this.parent.password === val;
    })
    .required("*Required field"),
});
const Register = () => {
  const { register } = useContext(AuthContext);

  const onSubmit = (e) => register(e);
  return (
    <main className="container">
      <section className="card">
        <h2>Create Account</h2>
        <Forms data={{ values, schema, onSubmit }} />
        <Link to="/account" className="form-link">
          Already have an account?
        </Link>
      </section>
    </main>
  );
};

export default Register;
