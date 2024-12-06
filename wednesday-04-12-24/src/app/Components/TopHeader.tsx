import { RiArrowDownSLine } from "react-icons/ri";
import { Poppins } from "next/font/google";


const Poppinsfont = Poppins({
  weight: ["400", "700"], 
  style: ["normal", "italic"], 
  subsets: ["latin"], 
  display: "swap", 
});

export default function TopHeader() {


  return (
    <div className={`container ${Poppinsfont.className} mx-auto`}>
      <div className="header w-[1440px] h-12 bg-black grid items-center pl-[445px] ">
        <div className="contentholder w-[859px] h-6 grid  grid-cols-1 ">
          <h1 className="text-sm font-normal font-['Poppins'] text-white absolute leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className="text-sm font-semibold font-['Poppins'] underline leading-normal ml-2">ShopNow</span></h1>
         <p className="text-sm font-normal font-['Poppins'] leading-[21px]  flex justify-end items-center ">English <RiArrowDownSLine className="text-lg ml-2"/></p>
        </div>
        </div>
      </div>
  );
}