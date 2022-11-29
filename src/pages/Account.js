import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";
import Login from "../component/molecules/Login";
import { Link } from "react-router-dom";

const Account = () => {
  const { user, booked } = useContext(UserContext);
  return (
    <main className="container">
      {user.uid ? (
        <div className="card-container">
          <h2>Dashboard</h2>
          <div>
            <p>
              Username: <strong>{user.username}</strong>
            </p>
            <p>
              Email: <strong>{user.email}</strong>
            </p>
          </div>
          <div className="card-body">
            {user.isAdmin ? (
              <h3>My schedule</h3>
            ) : (
              <div>
                <h3>Upcoming appointments</h3>
                {booked.length > 0 ? (
                  booked.map((b) => (
                    <div key={b.uid}>
                      <h2>{b.type}</h2>
                      <p>Start count</p>
                    </div>
                  ))
                ) : (
                  <div className="account-link">
                    <p>
                      Nothing yet, check out our services and book your next
                      appointments
                    </p>
                    <Link to="/services">
                      <button type="button" className="btn-primary">
                        Go to services
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
            {/* <p></p> */}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
};

export default Account;
