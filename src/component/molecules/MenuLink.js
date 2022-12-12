import Buttons from "./Buttons";

/**
 *
 * data = {name=string, uid: string, notification: number}
 */
const MenuLink = ({ data, handleClick }) => {
  let n = data.name && data.name.split("-").join(" ");
  return (
    <li className="nav-link">
      <Buttons name={n} handleClick={handleClick} />
    </li>
  );
};

export default MenuLink;
