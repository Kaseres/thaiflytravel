import React from "react";
import Information from "./grouptour/Information";
import Strength from "./grouptour/Strength";
import Banners from "../shared/Banners";

import CUSTOMER01 from "@/assets/image/Home/GrouptourBanners/AIS.png";
import CUSTOMER02 from "@/assets/image/Home/GrouptourBanners/BBU.png";
import CUSTOMER03 from "@/assets/image/Home/GrouptourBanners/Cigna.png";
import CUSTOMER04 from "@/assets/image/Home/GrouptourBanners/DTAC.png";
import CUSTOMER05 from "@/assets/image/Home/GrouptourBanners/Dumex.png";
import CUSTOMER06 from "@/assets/image/Home/GrouptourBanners/Ford.png";
import CUSTOMER07 from "@/assets/image/Home/GrouptourBanners/KKU.png";
import CUSTOMER08 from "@/assets/image/Home/GrouptourBanners/Krungthai.png";
import CUSTOMER09 from "@/assets/image/Home/GrouptourBanners/Meiji.png";
import CUSTOMER10 from "@/assets/image/Home/GrouptourBanners/SCG.png";
import CUSTOMER11 from "@/assets/image/Home/GrouptourBanners/True.png";
import CUSTOMER12 from "@/assets/image/Home/GrouptourBanners/Viriya.png";

const GroupTourDestination = () => {
    const bannerLists = [
        CUSTOMER01,
        CUSTOMER02,
        CUSTOMER03,
        CUSTOMER04,
        CUSTOMER05,
        CUSTOMER06,
        CUSTOMER07,
        CUSTOMER08,
        CUSTOMER09,
        CUSTOMER10,
        CUSTOMER11,
        CUSTOMER12
    ];
  return (
    <div className="md:container md:mx-auto mx-10">

      <div className="md:flex">
        <div className="md:w-2/3 w-full">
        <div className="text-[32px] font-bold text-secondary">รับจัดทัวร์</div>
          <Information />
        </div>
        <div className="md:w-1/3 w-full">
          <Strength />
        </div>
      </div>
      
      <Banners images={bannerLists} />
    </div>
  );
};

export default GroupTourDestination;
