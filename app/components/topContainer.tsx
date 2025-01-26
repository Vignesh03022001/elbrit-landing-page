import React from "react";
import Image from "next/image";

const TopContainer = () => {
  return (
    <div className="relative bg-blue-100 p-4 sm:p-12 shadow-md">
      <div className="sm:mx-12">
        <div className="md:ml-28 tracking-wide">
          <h2 className="text-darkBlue text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold md:mt-4 my-1 text-center md:text-left">
            Essential Vitamins
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly md:px-12 relative">
          <div className="md:basis-64 flex flex-col items-center sm:items-baseline md:justify-end mt-8 sm:mt-0">
            <p className="text-gray-400 text-lg mb-2">Online Medical Supplies</p>
            <h3 className="text-xl font-semibold mb-2 text-darkBlue">
              Get Your Vitamins & Minerals
            </h3>
            <button className="bg-darkBlue text-white py-2 px-4 rounded-full w-32">
              Explore
            </button>
          </div>
          <div className="md:basis-64 mx-auto sm:mx-2 mt-8 sm:mt-0">
            <Image
              className="w-100 h-100 md:absolute -top-3"
              src="/assets/f2-1.png.png"
              width={250}
              height={0}
              alt="Img"
            />
          </div>
          <div className="md:basis-64 mx-auto sm:mx-2 mt-8 sm:mt-0">
            <div className="flex mb-2 items-center">
              <div className="w-1/4">
                <Image
                  className="w-full"
                  src="/assets/vitamin.png"
                  width={250}
                  height={0}
                  alt="Img"
                />
              </div>
              <div className="w-3/4 p-2">
                <h3 className="text-lg font-semibold text-darkBlue">
                  Vitamins
                </h3>
                <p className="text-gray-400 text-xs">
                  Increased Vitamins and minerals in your diet
                </p>
              </div>
            </div>
            <div className="flex mb-2 items-center">
              <div className="w-1/4">
                <Image
                  className="w-full"
                  src="/assets/weight-loss.png"
                  width={250}
                  height={0}
                  alt="Img"
                />
              </div>
              <div className="w-3/4 p-2">
                <h3 className="text-lg font-semibold text-darkBlue">
                  Weight Loss
                </h3>
                <p className="text-gray-400 text-xs">
                  Increased Vitamins and minerals in your diet
                </p>
              </div>
            </div>
            <div className="flex mb-2 items-center">
              <div className="w-1/4">
                <Image
                  className="w-full"
                  src="/assets/fun-foods.png"
                  width={250}
                  height={10}
                  alt="Img"
                />
              </div>
              <div className="w-3/4 p-2">
                <h3 className="text-lg font-semibold text-darkBlue">
                  Functional Foods
                </h3>
                <p className="text-gray-400 text-xs">
                  From protein power to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
};

export default TopContainer;
