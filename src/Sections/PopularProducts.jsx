import PopularProductsCard from "../components/PopularProductsCard";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex justify-start flex-col gap-5">
        <h2 className="font-palanquin text-4xl font-bold ">
          {" "}
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className="font-montserrat lg:max-w-lg text-slate-gray">
          Immerse yourself in unparalleled quality and sophistication with our
          highly coveted collection. Explore a realm where comfort, design, and
          value converge to redefine your experience{" "}
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product) => (
          <PopularProductsCard
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            key={products.name}
            {...products}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
