import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";

const Account = () => {
  const { user } = useContext(UserContext);
  return (
    <main className="container">
      <section className="card"></section>
    </main>
  );
};

export default Account;
