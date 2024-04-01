import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-coontain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">
          Special
          <span className="text-coral-red"> Offer</span>
          <br />
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-6 sm:max-w-sm">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.{" "}
        </p>
        <p className="font-montserrat mt-3 lg:max-w-lg info-text text-slate-gray leading-8 ">
          {" "}
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-4  ">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="text-slate-gray"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
