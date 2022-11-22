import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";
import Auth from "../component/molecules/Auth";

const Account = () => {
  const { user } = useContext(UserContext);
  return <main className="container">{user.id ? <> </> : <Auth />}</main>;
};

export default Account;
