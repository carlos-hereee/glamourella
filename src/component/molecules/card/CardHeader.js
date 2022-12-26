import ArtistName from "../../atoms/ArtistName";
import Hero from "../../atoms/Hero";
import Icons from "../../atoms/Icons";

const CardHeader = ({ data }) => {
  return (
    <div className="card-header">
      {data.title && <h3 className="title">{data.title}</h3>}
      {data.subtitle && <p className="sub-title">{data.subtitle}</p>}
      {!data.isHeroEmpty && <Hero data={data.hero} />}
      {!data.isHeroEmpty && data.hero.name.split("unsplash") && (
        <ArtistName name={data.hero.name} />
      )}
      {data.isIcon && <Icons name={data.hero.icon} size="3x" />}
    </div>
  );
};

export default CardHeader;
