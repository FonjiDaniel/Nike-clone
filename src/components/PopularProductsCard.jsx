import { star } from "../assets/icons"

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full w-full ">
     <img src={imgURL} alt={name}  className="w-[280px] h-[280px]"/>
     <div className='flex justify-start mt-8 gap-2.5'>
         <img src={star} alt="rating" width={24} height={24}/>
         <p className="font-montserrat text-xl leading-normal text-slate-gray">3.5</p>
        
     </div>
      <h3 className="font-bold text-2xl mt-1.5 font-palanquin leading-normal">{name}</h3>
      <p clas  sName="text-2xl mt-1.5 text-coral-red font-bold font-montserrat leading-normal"> {price}</p>

  
    </div>
  )
}

export default PopularProductsCard
