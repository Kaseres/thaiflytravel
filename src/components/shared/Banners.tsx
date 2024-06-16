import React from 'react';
import Image from 'next/image';
type PropTypes = {
  text?: string;
  images: any;
};

const Banners = ({ text="ลูกค้าที่ไว้วางใจเรา", images }: PropTypes) => {

    const BannerList = () => {
        return images.map((item: any, index:number) => ( <div key={index} className="mx-1"><Image src={item} alt="" className='w-[50%] h-auto mx-auto' /></div> ))
    }

  return (
    <div className="mx-2 px-3 text-center">
      <div className='text-[24px]'>{text}</div>
      <div className="my-5 grid md:grid-cols-6 grid-cols-3">
        <BannerList />
      </div>
    </div>
  )
}

export default Banners
