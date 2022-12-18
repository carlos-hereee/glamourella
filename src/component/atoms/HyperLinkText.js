const HyperlinkText = ({ data }) => {
  return (
    <p>
      <span>{data.responseArr[0]}</span>
      <a href={data.link}>{data.word}</a>
      <span>{data.responseArr[1]}</span>
    </p>
  );
};

export default HyperlinkText;
