import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const handleBigShoeChange = (shoes) => {
    setBigShoeImg(shoes);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row justify-center min-h-screen gap-10  max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]  max-sm:leading-[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Disover nike Arrivals here
        </p>
        <Button label="shop Now" iconURL={arrowRight} />
        <div className="flex justify-betweem items-end flex-wrap w-30 mt-20 gap-16">
          {statistics.map((statistic, index) => (
            <div>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain "
        />
      </div>
      <div className=" absolute  xl:left-[800px]  xl:top-[650px]  flex gap-4  sm:top-[1600px] sm:left-[10px] ">
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard
              ImgURL={shoe.bigShoe}
              changeBigShoeImage={handleBigShoeChange}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
