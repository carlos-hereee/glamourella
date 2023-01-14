import Buttons from "../molecules/Buttons";
import CardHeader from "../molecules/card/CardHeader";
import Card from "../organisms/Card";

const Container = ({ filter, filtered, isFiltered, data, addToCart }) => {
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