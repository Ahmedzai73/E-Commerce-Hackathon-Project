// import { RiArrowDownSLine } from "react-icons/ri";
// import { Poppins } from "next/font/google";

// // Fetch the Poppins font from Google Fonts.
// const Poppinsfont = Poppins({
//   weight: ["400", "700"], // Specify the font weights to load.
//   style: ["normal", "italic"], // Specify the font styles to load.
//   subsets: ["latin"], // Specify the font subsets to load.
//   display: "swap", // Specify the font display mode to load.
// });

// export default function TopHeader() {
//   return (
//    <div className={`container ${Poppinsfont.className}  mx-auto bg-black`}>
// <div className="sm:w-[1440px] w-full h-12 relative bg-zinc-400 mx-auto  ">
//   <div className="left-[445px] top-[12px] absolute justify-start items-start gap-[231px] inline-flex">
//     <div className="justify-start items-center gap-2 flex">
//       <div className="w-[474px] h-[18px] text-[#f9f9f9] text-sm font-normal leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
//       <div className="text-center text-[#f9f9f9] text-sm font-semibold  underline leading-normal">ShopNow</div>
//     </div>
//     <div className="justify-center items-center gap-[5px] flex">
//       <div className="text-[#f9f9f9] text-sm font-normal flex leading-[21px]">English <RiArrowDownSLine className="font-semibold text-lg ml-3"/></div>
//       <div className="w-6 h-6 relative" />
//     </div>
//   </div>
// </div>


//     </div>
//   );
// }
 
import { RiArrowDownSLine } from "react-icons/ri";
import { Poppins } from "next/font/google";

// Fetch the Poppins font from Google Fonts.
const Poppinsfont = Poppins({
  weight: ["400", "700"], // Specify the font weights to load.
  style: ["normal", "italic"], // Specify the font styles to load.
  subsets: ["latin"], // Specify the font subsets to load.
  display: "swap", // Specify the font display mode to load.
});

export default function TopHeader() {
  return (
    <div className={`container ${Poppinsfont.className} mx-auto bg-black`}>
      <div className="w-full h-16 sm:h-12 relative bg-zinc-400 mx-auto flex items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1440px] px-4">
          <div className="flex items-center gap-2">
            <div className="text-[#f9f9f9] text-base sm:text-sm font-normal leading-[24px] sm:leading-[21px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </div>
            <div className="text-center text-[#f9f9f9] text-base sm:text-sm font-semibold underline leading-normal">
              Shop Now
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-[#f9f9f9] text-base sm:text-sm font-normal flex leading-[24px] sm:leading-[21px]">
              English <RiArrowDownSLine className="font-semibold text-lg ml-1" />
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </div>
  );
}


