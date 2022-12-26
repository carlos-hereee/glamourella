import Hero from "../../atoms/Hero";
import Icons from "../../atoms/Icons";

const CardSectionHeader = ({ data }) => {
  return (
    <div className="card-section-header">
      {!data.isHeroEmpty && <Hero data={data.hero} />}
      {data.isIcon && <Icons name={data.hero.icon} size="3x" />}
      {data.title && <h4 className="card-section-title">{data.title}</h4>}
      {data.description && <p>{data.description}</p>}
    </div>
  );
};

export default CardSectionHeader;
