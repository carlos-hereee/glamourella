import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import Login from "./Login";
import CustomLink from "../atoms/CustomLink";
import Loading from "../atoms/Loading";

const Account = () => {
  const { user, booked, isLoading } = useContext(UserContext);
  // const { isLoading } = useContext(AuthContext);
  const linkdata = {
    link: "services",
    content:
      "Nothing yet, check out our services and book your next appointments",
  };
  if (isLoading) return <Loading />;

  return (
    <main className="container">
      {user.uid ? (
        <div className="card-container">
          <h3>Dashboard</h3>
          <div>
            <p>
              Username: <strong>{user.username}</strong>
            </p>
            <p>
              Email: <strong>{user.email}</strong>
            </p>
          </div>
          <button type="button">Edit</button>
          {booked && booked.length ? (
            booked.map((b) => (
              <div key={b.uid}>
                <h3>{b.type}</h3>
                <p>Start count</p>
              </div>
            ))
          ) : (
            <div className="account-link">
              <CustomLink data={linkdata} />
            </div>
          )}
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
};

export default Account;
