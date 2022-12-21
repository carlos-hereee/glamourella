import Hero from "../../atoms/Hero";
import Icons from "../../atoms/Icons";

const CardHeader = ({ data }) => {
  return (
    <div className="card-header">
      {!data.hero.isEmpty && <Hero data={data.hero} />}
      {data.hero.isIcon && <Icons name={data.hero.icon} size="3x" />}
      {data.title && <h3 className="title">{data.title}</h3>}
      {data.subtitle && <p>{data.subtitle}</p>}
    </div>
  );
};

export default CardHeader;
