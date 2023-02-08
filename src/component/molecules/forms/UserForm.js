import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../utils/context/UserContext";
import Forms from "../../organisms/Forms";
import ToggleOpen from "../buttons/ToggleOpen";
import UserCard from "../card/UserCard";

const UserContact = () => {
  const { user, userValues, userSchema, updateUserData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const submit = (e) => updateUserData(e);
  const handleClick = () => setIsOpen(!isOpen);
  const setData = () => {
    return isOpen ? (
      <p>Close contact details</p>
    ) : (
      <p>Enter contact information details</p>
    );
  };

  return (
    <>
      <div className="card-header">
        <h3>Contact information</h3>
      </div>
      {user.uid ? (
        <UserCard />
      ) : isOpen ? (
        <>
          <ToggleOpen data={setData()} click={handleClick} />
          <Forms data={{ values: userValues, schema: userSchema }} submit={submit} />
        </>
      ) : (
        <ToggleOpen data={setData()} click={handleClick} />
      )}
    </>
  );
};
export default UserContact;
