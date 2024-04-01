import { Services } from "../Sections"
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className=' flex-1  sm:w-[350px]  sm:min-w-[350
    px] w-full rounded-[20px] shadow-3xl px-10 py-16 '> 
      <div className=' h-11 w-11 flex justify-center items-center bg-coral-red rounded-full '> 
        <img className="" width={24} height={24}   src={imgURL}/>
      </div> 
      <h3 className="font-bold text-3xl font-palanquin mt-6 ">{label}</h3>
      <p className="font-montserrat mt-6 break-words text-lg text-slate-gray">{subtext}</p>
    </div>
   
  )
}

export default ServiceCard
