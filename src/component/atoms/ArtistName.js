const ArtistName = ({ name }) => (
  <p>
    Photo by:
    <span className="artist">
      {name
        .split(" ")
        .map((n) => {
          if (n === "unsplash") {
            return " | Unsplash";
          }
          return n.charAt(0).toUpperCase() + n.substring(1);
        })
        .join(" ")}
    </span>
  </p>
);
export default ArtistName;
