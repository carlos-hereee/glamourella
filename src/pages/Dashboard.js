import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../component/template/Account";
import { UserContext } from "../utils/context/UserContext";

const Dashboard = () => {
  const { isAdmin, user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/admin-dashboard");
  }, [isAdmin]);
  return <Account />;
};

export default Dashboard;
