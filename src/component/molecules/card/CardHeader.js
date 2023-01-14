import ArtistName from "../../atoms/ArtistName";
import Hero from "../../atoms/Hero";
import Icons from "../../atoms/Icons";

const CardHeader = ({ data }) => {
  // console.log("data", data);
  return (
    <div className="card-header">
      {data.title && <h3 className="title">{data.title}</h3>}
      {data.subtitle && <h4 className="sub-title">{data.subtitle}</h4>}
      {data.hasHero && <Hero data={data.hero} />}
      {data.hasHero && data.hero.name.split("unsplash") && (
        <ArtistName name={data.hero.name} />
      )}
      {data.hasIcon && <Icons name={data.hero.icon} size="3x" />}
    </div>
  );
};

export default CardHeader;
