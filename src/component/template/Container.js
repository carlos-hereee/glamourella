/* eslint-disable react-hooks/exhaustive-deps */
// import { useContext } from "react";
// import Buttons from "../component/molecules/Buttons";
// import CardHeader from "../component/molecules/card/CardHeader";
// // import { ServicesContext } from "../utils/context/ServicesContext";
// import Card from "../component/organisms/Card";

import Buttons from "../molecules/Buttons";
import CardHeader from "../molecules/card/CardHeader";
import Card from "../organisms/Card";

const Container = ({ filter, filtered, isFiltered, data, addToCart }) => {
  // const { filterGallery, filteredGallery, isFiltered } =
  //   useContext(GalleryContext);
  // const { gallery } = useContext(AppContext);
  // const { addToCart } = useContext(ServicesContext);
  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.sections, content);
  };
  return (
    <section className="primary-container">
      <CardHeader data={data} />
      {data.isNav && (
        <nav className="navbar">
          {data.nav.map((g) => (
            <Buttons name={g} handleClick={handleClick} key={g} />
          ))}
        </nav>
      )}
      <div className="card-container">
        {isFiltered
          ? filtered.map((fg) => (
              <Card data={fg} key={fg.uid} click={addToCart} />
            ))
          : data.sections.map((g) => (
              <Card data={g} key={g.uid} click={addToCart} />
            ))}
      </div>
    </section>
  );
};

export default Container;
