import Buttons from "../molecules/Buttons";
import CardHeader from "../molecules/card/CardHeader";
import SecondaryCard from "../molecules/card/SecondaryCard";

const SecondaryContainer = ({ filter, filtered, isFiltered, data, click }) => {
  const navClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.sections, content);
  };
  return (
    <section className="primary-container">
      <CardHeader data={data} />
      {data.isNav && (
        <nav className="navbar">
          {data.nav.map((g) => (
            <Buttons name={g} handleClick={navClick} key={g} />
          ))}
        </nav>
      )}
      <div className="card-container">
        {isFiltered
          ? filtered.map((sorted) => (
              <SecondaryCard data={sorted} key={sorted.uid} click={click} />
            ))
          : data.sections.map((section) => (
              <SecondaryCard data={section} key={section.uid} click={click} />
            ))}
      </div>
    </section>
  );
};

export default SecondaryContainer;
