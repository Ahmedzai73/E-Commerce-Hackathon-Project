import { Poppins, Inter } from "next/font/google";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const Poppinsfont = Poppins({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});
const Interfont = Inter({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export default function Titles() {
    return (
        <div className={`container ${Poppinsfont.className, Interfont.className} mx-auto`}>
            <div className="hero-section w-[1170px] h-[103px] mt-[138px] mx-auto   text-black">
                <div className="w-5 h-10 bg-[#db4444] rounded flex items-center mr-4"><h1 className="ml-8 text-base font-semibold font-['Poppins'] leading-tight text-[#db4444]">Today’s</h1></div>
                <div className="flashsaleandtime flex items-center">

                    <h1 className="FlashSales mt-6 text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider mr-[79px]">Flash Sales</h1>


                    {/* same timer start here */}
                    <div className="relative w-[302px] h-[50px] flex justify-between">
                        {/* Days */}
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-black text-xs font-medium font-['Poppins'] leading-[18px]">Days</span>
                            <span className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">03</span>
                        </div>

                        {/* Separator Dots */}
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="w-1 h-1 bg-[#e07575] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#e07575] rounded-full"></div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-black text-xs font-medium font-['Poppins'] leading-[18px]">Hours</span>
                            <span className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">23</span>
                        </div>

                        {/* Separator Dots */}
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="w-1 h-1 bg-[#e07575] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#e07575] rounded-full"></div>
                        </div>

                        {/* Minutes */}
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-black text-xs font-medium font-['Poppins'] leading-[18px]">Minutes</span>
                            <span className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">19</span>
                        </div>

                        {/* Separator Dots */}
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div className="w-1 h-1 bg-[#e07575] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#e07575] rounded-full"></div>
                        </div>

                        {/* Seconds */}
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-black text-xs font-medium font-['Poppins'] leading-[18px]">Seconds</span>
                            <span className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">56</span>
                        </div>
                    </div>



                    <div className="arrows mt-2 ml-[470px]">


                        <div className="h-[46px] flex justify-start items-start gap-2">
                            <button className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center">
                                <IoArrowBackOutline className="w-6 h-6" />
                            </button>
                            <button className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center">
                                <IoArrowForward className="w-6 h-6" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
