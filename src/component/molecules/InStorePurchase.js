import CardHeader from "./card/CardHeader";

const InStorePurchase = () => {
  return (
    <div className="secondary-card-section">
      <CardHeader
        data={{ title: "Payment type: In Store", subtitle: "Summary Details" }}
      />
    </div>
  );
};

export default InStorePurchase;
