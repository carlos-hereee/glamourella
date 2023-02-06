import ButtonLinkNavigation from "../../molecules/buttons/ButtonLinkNavigation";

const ChechoutNavigation = () => {
  return (
    <div className="checkout-navigation">
      <ButtonLinkNavigation links={["services", "accessories"]} />
    </div>
  );
};

export default ChechoutNavigation;
