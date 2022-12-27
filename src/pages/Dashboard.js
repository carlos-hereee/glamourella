import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../component/template/Account";
import { AdminContext } from "../utils/context/AdminContext";
// import { UserContext } from "../utils/context/UserContext";

const Dashboard = () => {
  // const { user } = useContext(UserContext);
  const { isAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAdmin) {
      navigate("/admin-dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);
  return <Account />;
};

export default Dashboard;
