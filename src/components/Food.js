import React from "react";
import image1 from "../images/Enchiladas.jpg";
import image2 from "../images/Tostadas.jpg";

function Food() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen py-40 sm:py-20 px-10">
        <img src={image1} className="h-full rounded mb-2 shadow" alt="" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl mb-2">Pozole</p>
          <p className="mb-2">
            Made from hominy corn with plenty of herbs and spices
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen py-40 sm:py-20 px-10">
        <img src={image2} className="h-full rounded mb-2 shadow" alt="" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl mb-2">Pozole</p>
          <p className="mb-2">
            Made from hominy corn with plenty of herbs and spices
          </p>
        </div>
      </div>
    </>
  );
}

export default Food;
