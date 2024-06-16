import React from "react";
import Image from "next/image";
import Button from "@/components/shared/Button";

// Image
import BANNER01 from "@/assets/image/Home/Group1_Backpack.png";
import BANNER02 from "@/assets/image/Home/Group1_5-15PAX.png";
import BANNER03 from "@/assets/image/Home/Group1_30PAX.png";
import BANNER04 from "@/assets/image/Home/Group1_100PAX.png";
import REVIEW01 from "@/assets/image/Home/review_taiwan.jpg";

const Information = () => {
  const GroupBanner = () => {
    return (
      <div className="flex">
        <Image src={BANNER01} alt="" className="w-full h-auto mx-2" />
        <Image src={BANNER02} alt="" className="w-full h-auto mx-2" />
        <Image src={BANNER03} alt="" className="w-full h-auto mx-2" />
        <Image src={BANNER04} alt="" className="w-full h-auto mx-2" />
      </div>
    );
  };

  const Feedback = () => {
    return (
      <div className="mx-5 rounded-lg border border-gray-300 px-3 py-5 my-5 text-center">
        <div className="font-bold py-2">
          <Image src={REVIEW01} alt="" className="w-full h-auto mx-2" />
        </div>
        <div className="text-primary-500 text-[24px]">
          จะกรุ๊ปเล็ก กรุ๊ปใหญ่ อยากได้แบบไหน เราจัดให้ได้ !!
        </div>
        <div className="text-primary-500 text-[20px]">{`" Thaifly พร้อมดูแลคุณค่ะ "`}</div>
        <div className="pt-5 text-gray-500">
          ปรึกษา และขอทราบค่าใช้จ่าย รับจัดทัวร์,กรุ๊ปเหมา,รับจัดทัวร์ต่างประเทศ
          <br />
          ติดต่อ Tel. 02-7138992 กด 2
        </div>
        <div className="py-5">
          <Button text="รับจัดกรุ๊ปทัวร์ เพิ่มเติม" />
        </div>
      </div>
    );
  };

  return (
    <>
      <GroupBanner />
      <hr className="my-3" />
      <div className="text-primary-500 text-[24px]">
        Thaifly รับจัดทัวร์ จัดกรุ๊ปทัวร์ ต่างประเทศ
      </div>
      <div className="text-primary-500 text-[20px]">{`"เราจัดได้ทุกแบบทุกเส้นทาง อย่างมืออาชีพ"`}</div>
      <div className="text-[14px] text-gray-500 pt-5">
        &nbsp;เที่ยวคุ้ม สนุกครบ มากที่สุด บินดี พักสบาย เที่ยวจุใจ กินจัดเต็ม
        ต้อง Thaifly จัดได้ทุกขนาดกรุ๊ป ตามงบประมาณของคุณ มั่นใจ
        บริษัทเปิดให้บริการมาแล้วกว่า 20 ปี พากรุ๊ปเดินทางมาแล้วกว่าหลาย 7,000
        กรุ๊ป ราคาดีที่สุดในคุณภาพที่ครบมากที่สุด มีโปรแกรมให้เลือกเยอะ
      </div>
      <Feedback />
    </>
  );
};

export default Information;
