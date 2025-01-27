import React from "react";
import Image from "next/image";

const listOfBenefits = [
  {
    svgName: "clinicalJar",
    title: "Clinically Studied",
    description:
      "All products that we offer have undergone lab and safety tests",
  },
  {
    svgName: "vegFriendly",
    title: "Vegetarian Friendly",
    description:
      "We have a wide selection of vegetarian products to meet your needs",
  },
  {
    svgName: "madeInIndia",
    title: "Made in India",
    description:
      "Shop local and explore health products made right here in India",
  },
  {
    svgName: "freeShipping",
    title: "Free shipping",
    description:
      "We deliver to your door with no shipping costs on your orders",
  },
  {
    svgName: "noRisk",
    title: "No Risk",
    description:
      "We ensure that all products are safe and within their use-by date",
  },
  {
    svgName: "gmoFree",
    title: "GMO free",
    description:
      "Natural, no modified products and derivatives for those who need it",
  },
];

const ProductBenefits = () => {
  return (
    <div className="mx-auto w-3/4 bg-darkBlue my-12 sm:my-20 md:mt-32 rounded-3xl md:h-96">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between p-4 sm:p-8">
        {listOfBenefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3 text-white p-3 items-center text-center relative -top-12 md:-top-24"
          >
            <div className="bg-white w-24 h-24 rounded-full flex justify-center items-center">
              <Image
                src={"/assets/" + item.svgName + ".svg"}
                alt="svg"
                className="w-1/2 h-1/2"
                width={250}
                height={100}
              />
            </div>
            <div className="text-lg w-3/4">{item.title}</div>
            <div className="text-xs w-3/4">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBenefits;
