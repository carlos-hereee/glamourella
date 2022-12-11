import { useContext } from "react";
import { redirect } from "react-router-dom";
import Account from "../component/template/Account";
import { UserContext } from "../utils/context/UserContext";

const Dashboard = () => {
  const { isAdmin } = useContext(UserContext);
  if (isAdmin) {
    redirect("/admin-dashboard");
  }
  return <Account />;
};

export default Dashboard;
