import ButtonLink from "../../atoms/buttons/ButtonLink";

const CartEmpty = ({ link }) => {
  return (
    <div className="not-found">
      <h4>No {link} in cart</h4>
      <ButtonLink link={link} />
    </div>
  );
};

export default CartEmpty;
