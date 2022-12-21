import Hero from "../atoms/Hero";
import HyperlinkText from "./HyperlinkText";

const CardSectionBody = ({ data }) => {
  const { hyperlink, response, hero } = data;
  const { word, link } = hyperlink;

  // TODO: CREATE HYPERLINK INSIDE THE TEXT
  const hasLink = hyperlink.filter((link) => link.isEmpty);
  console.log("hasLink", hasLink);
  console.log("hyperlink", hyperlink);
  const responseArr = response.split(word);
  // console.log("responseArr", responseArr, link);
  return (
    <div className="card-section-body">
      {!hero.isEmpty && <Hero data={hero} />}
      {hyperlink.map(({ isEmpty, uid }) =>
        isEmpty ? (
          <p key={uid}>{response}</p>
        ) : (
          <HyperlinkText data={{ word, responseArr, link }} key={uid} />
        )
      )}
      {/* {data.response && <p>{data.response}</p>} */}
    </div>
  );
};

export default CardSectionBody;
