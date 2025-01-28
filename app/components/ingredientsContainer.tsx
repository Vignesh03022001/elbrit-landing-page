import React from "react";
import Image from "next/image";

const listOfIngredients = [
  {
    imgName: "h2-b1.jpg",
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
  },
  {
    imgName: "bn2-2.jpg",
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
  },
  {
    imgName: "bn2-3.jpg",
    title: "Magnesium",
    description: "Boost energy and support muscle function",
  },
  {
    imgName: "bn2-4.jpg",
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
  },
  {
    imgName: "bn2-5.jpg",
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
  },
];

const IngredientsContainer = () => {
  return (
    <div className="mx-4 md:mt-12 shadow-md rounded-lg">
      <div className="flex flex-wrap gap-4 p-4 sm:p-8">
        <div className="md:w-2/5 flex flex-col space-y-3 h-48 justify-end">
          <div className="text-darkBlue text-sm">INGREDIENTS</div>
          <h3 className="text-darkBlue text-2xl font-bold">
            Better Ingredients
          </h3>
          <p className="text-gray-400 text-sm">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </p>
        </div>
        {listOfIngredients.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/4 rounded-lg flex flex-col justify-evenly h-48 px-4 bg-center
            bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(/assets/${item.imgName}.png)` }}
          >
            <div className="w-3/4">
              <h3 className="font-semibold mb-2 text-darkBlue">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
            <a className="font-semibold mb-2 text-darkBlue underline">
              See More
            </a>
          </div>
        ))}
            <div
            className="w-1/6 h-48 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(/assets/h2-b4.jpg.png)` }}
          ></div>
      </div>
    </div>
  );
};

export default IngredientsContainer;
