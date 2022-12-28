import Buttons from "../molecules/Buttons";
import CardHeader from "../molecules/card/CardHeader";
import SecondaryCard from "../molecules/card/SecondaryCard";

const AdminContainer = ({ filter, filtered, isFiltered, data }) => {
  // const {}
  const navClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filter(data.sections, content);
  };
  console.log("filtered", filtered, isFiltered);
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
              <SecondaryCard data={sorted} key={sorted.uid} />
            ))
          : data.sections.map((section) => (
              <SecondaryCard data={section} key={section.uid} />
            ))}
      </div>
    </section>
  );
};

export default AdminContainer;
