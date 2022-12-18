import Hero from "../atoms/Hero";

const CardSectionBody = ({ data }) => {
  const hasLink = data.hyperlink.filter((link) => link.isEmpty);
  console.log("hasLink", hasLink);
  return (
    <div className="card-section-body">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      {/* {map((l) => l.isEmpty ? <p>{l.response}</p> : <HyperLinkText data={{    }} /> )} */}
      {data.response && <p>{data.response}</p>}
    </div>
  );
};

export default CardSectionBody;
