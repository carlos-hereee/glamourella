import HyperlinkText from "../atoms/HyperlinkText";

const CardSectionBody = ({ data }) => {
  const { hyperlink, response, isLinkEmpty, uid } = data;

  return (
    <div className="card-section-body">
      {isLinkEmpty ? (
        <p>{response}</p>
      ) : (
        hyperlink.map(({ word, link }) => (
          <HyperlinkText
            data={{ word, responseArr: response.split(word), link }}
            key={uid}
          />
        ))
      )}
    </div>
  );
};

export default CardSectionBody;
