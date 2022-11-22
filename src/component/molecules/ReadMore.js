const ReadMore = ({ data, lines }) => {
  if (lines > 2) {
    const element = document.querySelector(".read-more");
    element && element?.style.setProperty("--max-lines", lines);
  }
  return (
    <>
      <p className="read-more">{data}</p>
      <input type="checkbox" className="read-more-toggle" />
    </>
  );
};

export default ReadMore;
