/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";
import { AppContext } from "../utils/context/AppContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import Container from "../component/template/Container";

const Gallery = () => {
  const { filterGallery, filteredGallery, isFiltered } =
    useContext(GalleryContext);
  const { gallery } = useContext(AppContext);
  const { addToCart } = useContext(ServicesContext);

  return (
    <Container
      filter={filterGallery}
      filtered={filteredGallery}
      isFiltered={isFiltered}
      data={gallery}
      addToCart={addToCart}
    />
  );
};

export default Gallery;
//  <section className="primary-container">
//       <CardHeader data={gallery} />
//       {gallery.isNav && (
//         <nav className="navbar">
//           {gallery.nav.map((g) => (
//             <Buttons name={g} handleClick={handleClick} key={g} />
//           ))}
//         </nav>
//       )}
//       <div className="card-container">
//         {isFiltered
//           ? filteredGallery.map((fg) => (
//               <Card data={fg} key={fg.uid} click={addToCart} />
//             ))
//           : gallery.sections.map((g) => (
//               <Card data={g} key={g.uid} click={addToCart} />
//             ))}
//       </div>
//     </section>
