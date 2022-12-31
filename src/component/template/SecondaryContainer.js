import CardHeader from "../molecules/card/CardHeader";

const SecondaryContainer = ({ data, children }) => {
  return (
    <section className="secondary-container">
      <CardHeader data={data} />
      <div className="children">{children}</div>
    </section>
  );
};

export default SecondaryContainer;
