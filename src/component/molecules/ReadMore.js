import variables from "../../stylesheets/variables.scss";
const ReadMore = ({ data, lines }) => {
  if (lines) {
    // console.log("variables", variables);
    // const root = window.document.querySelector(".read-more");
    // let rm = getComputedStyle(root);
    // console.log("root", rm);
    // const maxLines = document.querySelector.getPropertyValue("--max-lines");
    // console.log("maxLines", maxLines);
    console.log("lines", lines);
    console.log("varivales", variables);
    const root = document.documentElement;
    root?.style.setProperty("--max-lines", lines);
  }
  return (
    <>
      <p className="read-more">{data}</p>
      <input type="checkbox" className="read-more-toggle" />
    </>
  );
};

export default ReadMore;
