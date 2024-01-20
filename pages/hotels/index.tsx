import Header1 from "../component/Header1";
import Hotel from "../component/Hotel";

const Hotels = () => {
  return (
    <>
      <Header1 />
      <div className="m-5">
        <Hotel />
        <Hotel />
      </div>
    </>
  );
};

export default Hotels;
