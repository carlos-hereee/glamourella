import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../utils/context/UserContext";
import Forms from "../../organisms/Forms";
import ToggleOpen from "../buttons/ToggleOpen";
import UserCard from "../card/UserCard";

const UserContact = () => {
  const { user, userValues, userSchema, updateUserData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);
  const submit = (e) => updateUserData(e);
  const handleClick = () => setIsOpen(!isOpen);
  const setData = () => {
    if (isOpen) {
      return "close";
    }
    return (
      <p>
        Your contact information is needed <br />
        <br />
        <span className="link">Enter your contact information here</span>
      </p>
    );
  };

  return user.uid ? (
    <UserCard />
  ) : isOpen ? (
    <ToggleOpen data={setData()} click={handleClick} />
  ) : (
    <>
      <ToggleOpen data={setData()} click={handleClick} />
      <Forms data={{ values: userValues, schema: userSchema }} submit={submit} />
    </>
  );
};
export default UserContact;
