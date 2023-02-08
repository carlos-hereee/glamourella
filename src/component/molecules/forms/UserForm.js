import { useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import { UserContext } from "../../../utils/context/UserContext";
import Forms from "../../organisms/Forms";
import ToggleOpen from "../buttons/ToggleOpen";
import UserCard from "../card/UserCard";

const UserContact = () => {
  const { user, userValues, userSchema, updateUserData } = useContext(UserContext);
  const { isUserReq } = useContext(ServicesContext);
  const [isOpen, setIsOpen] = useState(false);
  const submit = (e) => updateUserData(e);
  const handleClick = () => setIsOpen(!isOpen);
  const setData = () => {
    return isOpen ? <p>Close contact details</p> : <p>Enter contact details</p>;
  };
  return (
    <>
      <div className="card-header" id="contact-user-form">
        <h3>Contact information</h3>
        {isUserReq && (
          <p className="required">Please enter contact details before proceeding</p>
        )}
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
