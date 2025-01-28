import React from "react";

const listOfBlogs = [
  {
    imgName: "blog1-450x580.jpg",
    date: "20 Apr",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
  {
    imgName: "blog1-450x580.jpg",
    date: "20 Apr",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
  {
    imgName: "blog1-450x580.jpg",
    date: "20 Apr",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
  {
    imgName: "blog1-450x580.jpg",
    date: "20 Apr",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
  {
    imgName: "blog2-450x580.jpg",
    date: "17 Mar",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
  {
    imgName: "blog2-450x580.jpg",
    date: "20 Apr",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
  {
    imgName: "blog2-450x580.jpg",
    date: "17 Mar",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
  {
    imgName: "blog2-450x580.jpg",
    date: "20 Apr",
    description: "The Covid-19 Epidemic In 2022 Is Back",
  },
];

let height1 = "h-80";
let height2 = "h-40";
let positionValue = "";

const calculateHeight = (containerPosition: number) => {
  
  if (containerPosition % 4 == 0 && containerPosition >= 4) {
    let swap = height2 +" "+ positionValue;
    height2 = height1;
    height1 = swap;
    positionValue = "-top-40";
    return swap;
  }
  console.log(containerPosition,height1,"height1");
  console.log(containerPosition,height2,"height2");
  
  if (containerPosition % 2 == 0) {
    return positionValue+" "+height2;
  } else {
    return height1;
  }
};

const BlogContainer = () => {
  return (
    <div className="mx-auto mt-8 sm:mt-16">
      <div className="mx-auto text-center">
        <h5 className="text-darkBlue font-semibold">OUR BLOG</h5>
        <h3 className="text-darkBlue font-bold text-2xl">Latest News</h3>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-8">
        {listOfBlogs.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(/assets/${item.imgName}.png)` }}
            className={` ${calculateHeight(index + 1)} bg-gray-500/75 bg-blend-multiply rounded-xl bg-center
            bg-cover bg-no-repeat shadow-lg relative`}
          >
            <div className="text-sm bg-darkBlue text-white rounded-r-xl p-2 relative -left-2 mt-2 w-16">{item.date}</div>
            <p className="text-white px-8 text-center mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
