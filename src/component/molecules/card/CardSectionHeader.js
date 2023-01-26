import Hero from "../../atoms/Hero";
import Icons from "../../atoms/Icons";

const CardSectionHeader = ({ data }) => {
  return (
    <div className="card-section-header">
      {data.hasHero && <Hero data={data.hero} />}
      {data.hasIcon && <Icons name={data.hero.icon} size="3x" />}
      <div className="card-section-heading">
        {data.title && <h3 className="card-section-title">{data.title}</h3>}
        {data.subtitle && <h4 className="card-section-subtitle">{data.subtitle}</h4>}
      </div>
      {data.description && <p>{data.description}</p>}
    </div>
  );
};

export default CardSectionHeader;
