import Buttons from "../molecules/Buttons";
import CardHeader from "../molecules/card/CardHeader";
import CardSectionHeader from "../molecules/card/CardSectionHeader";
import SecondaryCardBody from "../molecules/card/SecondaryCardBody";

const AdminContainer = ({ filter, filtered, isFiltered, data, addToCart }) => {
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
              // <CardSection data={fg} key={fg.uid} click={addToCart} />
              <p>{fg.day}</p>
            ))
          : data.sections.map((section) => (
              <div className="secondary-card" key={section.uid}>
                <CardSectionHeader data={section} click={addToCart} />
                <div className="secondary-card-body">
                  {!section.isListEmpty &&
                    section.list.map((sl) => (
                      <SecondaryCardBody data={sl} key={sl.uid} />
                    ))}
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default AdminContainer;
