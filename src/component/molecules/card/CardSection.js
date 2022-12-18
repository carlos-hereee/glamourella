import CardSectionBody from "../../atoms/CardSectionBody";
import Hero from "../../atoms/Hero";
import Icons from "../../atoms/Icons";

const CardSection = ({ data }) => {
  return (
    <div className="card-section">
      <div className="card-section-header">
        {!data.hero.isEmpty && <Hero data={data.hero} />}
        {data.hero.isIcon && <Icons name={data.hero.icon} size="3x" />}
        <h3 className="card-section-title">{data.title}</h3>
      </div>
      {data.section.length > 0 && (
        <div>
          {data.section.map((s) => (
            <CardSectionBody data={s} key={s.uid} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSection;
