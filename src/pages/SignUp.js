import { Link } from "react-router-dom";
import Forms from "../component/organisms/Forms";
import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";

const SignUp = () => {
  const { signUp, signUpValues, signUpSchema, signUpError } =
    useContext(AuthContext);

  const onSubmit = (e) => signUp(e);
  let data = { values: signUpValues, schema: signUpSchema, onSubmit };
  return (
    <main className="container">
      <section className="card">
        <h2>Create Account</h2>
        {signUpError && <p className="required">{signUpError}</p>}
        <Forms data={data} />
        <Link to="/account" className="form-link">
          Already have an account?
        </Link>
      </section>
    </main>
  );
};

export default SignUp;
