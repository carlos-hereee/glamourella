import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";
import Login from "../component/molecules/Login";

const Account = () => {
  const { user } = useContext(UserContext);
  console.log("user", user);
  return (
    <main className="container">
      {user.uid ? (
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <p>{user.username}</p>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
};

export default Account;
