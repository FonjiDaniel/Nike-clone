import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="rounded-full w-[120px] h-[120px]" src={imgURL} />
      <p className="mt-6 text-center ">{feedback}</p>
      <div className="flex gap-3 items-center mt-2 ">
        <img src={star} />
        <p>{rating}</p>
      </div>
      <h3 className=" mt-1 font-palanquin font-bold text-3xl text-center ">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
