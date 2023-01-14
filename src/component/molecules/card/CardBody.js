import HyperlinkText from "../../atoms/HyperlinkText";

const CardBody = ({ data }) => {
  const { hyperlink, response, isLinkEmpty, uid } = data;

  return (
    <div className="card-body">
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

export default CardBody;
