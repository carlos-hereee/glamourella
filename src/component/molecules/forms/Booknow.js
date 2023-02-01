import Forms from "../../organisms/Forms";

const Booknow = ({ data, submit }) => {
  return (
    <div className="secondary-container">
      <p>Please fill out form bellow</p>
      <Forms data={data} submit={submit} />
    </div>
  );
};

export default Booknow;
