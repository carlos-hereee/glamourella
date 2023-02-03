import { useContext } from "react";
import { UserContext } from "../../../utils/context/UserContext";

const UserCard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;