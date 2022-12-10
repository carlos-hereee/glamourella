import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Account from "../component/template/Account";
import { UserContext } from "../utils/context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  user.isAdmin && <Navigate to="/admin-dashboard" replace />;
  return <Account />;
};

export default Dashboard;
