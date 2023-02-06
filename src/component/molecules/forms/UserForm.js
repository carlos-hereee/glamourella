import { useContext } from "react";
import { UserContext } from "../../../utils/context/UserContext";
import UserCard from "../card/UserCard";
import Booknow from "./Booknow";

const UserForm = () => {
  const { user, userValues, userSchema, updateUserData } = useContext(UserContext);
  const submit = (e) => updateUserData(e);
  return user.uid ? (
    <UserCard />
  ) : (
    <Booknow data={{ values: userValues, schema: userSchema }} submit={submit} />
  );
};
export default UserForm;
