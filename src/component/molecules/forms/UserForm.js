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
      <p>
        Your contact information is needed <br />
        <br />
        <span className="link">Enter your contact information here</span>
      </p>
    </button>
  ) : (
    <>
      <button
        type="button"
        className="btn btn-step"
        onClick={() => setIsOpen(!isOpen)}>
        Close
      </button>
      <Forms data={{ values: userValues, schema: userSchema }} submit={submit} />
    </>
  );
};
export default UserContact;
