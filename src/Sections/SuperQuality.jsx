import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
          <br />
        </h2>
        <p className="font-montserrat text-slate-gray  lg:max-w-lg text-lg leading-8 mt-6 mb-6 sm:max-w-sm">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.{" "}
        </p>
        <p className="font-montserrat mt-6 lg:max-w-lg info-text text-slate-gray leading-[50px] ">
          {" "}
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="view details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
