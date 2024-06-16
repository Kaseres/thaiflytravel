import Image from "next/image";
import React from "react";


const Card = () => {
  const items = [
    {
      key: "japan",
      title: "ญี่ปุ่น",
      image: "https://thaifly.com/image/catalog/flag/japan-150x150.png",
    },
    {
      key: "china",
      title: "จีน",
      image: "https://thaifly.com/image/catalog/flag/china-150x150.png",
    },
    {
      key: "vietnam",
      title: "เวียดนาม",
      image: "https://thaifly.com/image/catalog/flag/vietnam-150x150.png",
    },
  ];

  return (
    <div className="py-5 flex">
      {items.map((item) => (<>
        <div className=" bg-white h-[75px] w-[75px] rounded-lg border border-gray-300 text-center mx-2 py-3 cursor-pointer">
          <img src={item.image} alt={item.title} width="20" height="20" className="mx-auto mb-2" />
          <span className="text-secondary">{item.title}</span>
        </div>
        </>))}
    </div>
  );
};

export default Card;
