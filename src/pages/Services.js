import ServiceCard from "../component/molecules/ServiceCard";

const Services = () => {
  const service = [
    {
      id: "p-1",
      type: "pedicure",
      name: "classic ",
      length: "30 minutes",
      cost: 25,
      description:
        "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
    },
    {
      id: "p-2",
      type: "pedicure",
      name: "REFRESHER ",
      length: "45 minutes",
      cost: 35,
      description:
        "A combination of our Classic Pedicure with an exfoliation pink salt, deep massage with hot stones, warm towel wrap. Finish with a nail buff or polish.",
    },
    {
      id: "m-1",
      type: "manicure",
      name: "classic ",
      length: "20 minutes",
      cost: 15,
      description:
        "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
    },
    {
      id: "m-2",
      type: "manicure",
      name: "refresher ",
      length: "30 minutes",
      cost: 25,
      description:
        "A combination of Classic Manicure, your hand will be soaked in moisturized lotion gloves and rubbed with an exfoliation pink salt. Follow by a deep massage with hot stones, warm towel wrap and finish with a nail buff or polish.",
    },
    {
      id: "m-3",
      type: "manicure",
      name: "paris signature ",
      length: "56 minutes",
      cost: 29,
      description:
        "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
    },
  ];
  return (
    <main className="container">
      {service && service.map((s) => <ServiceCard data={s} key={s.id} />)}
    </main>
  );
};

export default Services;
