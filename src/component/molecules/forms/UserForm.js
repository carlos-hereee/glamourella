import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../utils/context/UserContext";
import Forms from "../../organisms/Forms";
import UserCard from "../card/UserCard";

const UserContact = () => {
  const { user, userValues, userSchema, updateUserData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);
  const submit = (e) => updateUserData(e);
  return user.uid ? (
    <UserCard />
  ) : isOpen ? (
    <button
      type="button"
      className="btn btn-step"
      onClick={() => setIsOpen(!isOpen)}>
      Enter your contact information here
    </button>
  ) : (
    <Forms data={{ values: userValues, schema: userSchema }} submit={submit} />
  );
};
export default UserContact;
