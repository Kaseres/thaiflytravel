import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "@/components/shared/Button";

const FeatureList = () => {
  const tours = [
    {
      id: "336208",
      name: "FD018 ทัวร์ญี่ปุ่น โอกินาว่า ผามันซาโมะ โอกินาว่าเวิลด์ (ซุปตาร์ โอกินาว่า สุดชิววิวทะเล) [OCT] 4วัน 3คืน บิน THAI AIR ASIA",
      day: 4,
      night: 3,
      airline: "FD",
      image:
        "https://thaifly.com/image/cache/catalog/japan_banner/THFY336208-300x300.jpg",
      price: "28,888",
    },
    {
      id: "334934",
      name: "T2G-NRTKIX01TG ทัวร์ญี่ปุ่น โตเกียว ทาคายาม่า เกียวโต โอซาก้า (AUTUMN GOLDEN ROUTE) [OCT] 7วัน 5คืน THAI AIRWAYS",
      day: 7,
      night: 5,
      airline: "TG",
      image:
        "https://thaifly.com/image/cache/catalog/japan_banner/THFY334934-300x300.jpg",
      price: "69,999",
    },
    {
      id: "334292",
      name: "T2G-NRTHND01TG ทัวร์ญี่ปุ่น โตเกียว ภูเขาไฟฟูจิ ใบไม้เปลี่ยนสี (WONDERFUL AUTUMN) [OCT] 7วัน 4คืน บิน THAI AIRWAYS",
      day: 7,
      night: 5,
      airline: "TG",
      image:
        "https://thaifly.com/image/cache/catalog/japan_banner/THFY334292-300x300.jpg",
      price: "62,999",
    },
    {
      id: "333358",
      name: "T2G-NRT16TG ทัวร์ญี่ปุ่น โตเกียว นิกโก้ ออนเซ็น (EXCLUSIVE AUTUMN) [OCT] 6วัน 4คืน บิน THAI AIRWAYS",
      day: 6,
      night: 4,
      airline: "TG",
      image:
        "https://thaifly.com/image/cache/catalog/japan_banner/THFY333358-300x300.jpg",
      price: "66,999",
    },
  ];

  const DestinationDetail = ({ tour }: any) => {
    return (
      <div className="md:flex bg-white md:rounded-r-lg rounded-b-lg text-primary text-left ">
        <img src={tour["image"]} alt={tour["name"]} />
        <div className="p-5">
          <div className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
            รหัสทัวร์ THFY{tour["id"]}
          </div>
          <div className="py-2">{tour["name"]}</div>
          <div className="text-[14px] text-gray-400 py-1 flex">
            <FaCalendarAlt className="mx-2" /> ระยะเวลา {tour["day"]} วัน{" "}
            {tour["night"]} คืน
          </div>
          <div className="text-[14px] text-gray-400 py-1 flex">
            <GiCommercialAirplane className="mx-2" /> สายการบิน{" "}
            {tour["airline"]}
          </div>

          <div className="text-[14px] text-gray-400 pt-5 flex">
            เริ่มต้น{" "}
            <span className="text-[18px] text-secondary mx-2">
              ฿{tour["price"]}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#e0d8fc] rounded-lg border border-gray-300 mx-2 px-3 py-5 cursor-pointer text-center">
      <div className="text-[24px] pb-5">ทัวร์ญี่ปุ่น แนะนำ</div>
      <div className="grid grid-cols-2 gap-4">
        {tours.map((item) => (
          <>
            <DestinationDetail tour={item} />
          </>
        ))}
      </div>
      <div className="mt-5">
        <Button text="รวมทัวร์ญี่ปุ่นเพิ่มเติม" />
      </div>
    </div>
  );
};

export default FeatureList;
