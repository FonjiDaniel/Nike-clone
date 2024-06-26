import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
      id="contact-us"
    >
      <h3 className="font-palanquin text-4xl leading-normal font-bold lg:max-w-md ">
        Sign Up For <span className="text-coral-red"> Updates </span> &
        Newsletters
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max:sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input  borde"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Subscribe-now" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
