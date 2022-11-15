import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";
import Auth from "../component/molecules/Auth";

const Account = () => {
  const { user } = useContext(UserContext);
  return <section className="container">{user.id ? <> </> : <Auth />}</section>;
};

export default Account;
