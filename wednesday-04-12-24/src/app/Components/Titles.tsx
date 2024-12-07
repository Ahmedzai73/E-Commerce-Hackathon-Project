import { Poppins, Inter } from "next/font/google";

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
            <div className="hero-section w-[1170px] h-[103px] mt-[138px] mx-auto bg-slate-300  text-black">
                <div className="w-5 h-10 bg-[#db4444] rounded flex items-center mr-4"><h1 className="ml-8 text-base font-semibold font-['Poppins'] leading-tight text-[#db4444]">Today’s</h1></div>

                <div className="FlashSales mt-6 text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Flash Sales</div>
                {/* same timer start here */}
                <div className="Group1000005937 w-[302px] h-[50px] relative">
                    <div className="Frame580 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="Days w-[31px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Days</div>
                        <div className=" w-[46px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">03</div>
                    </div>
                    <div className="Frame581 w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="Hours w-[35px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Hours</div>
                        <div className=" text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">23</div>
                    </div>
                    <div className="Frame582 w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="Minutes w-[49px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Minutes</div>
                        <div className=" w-[39px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">19</div>
                    </div>
                    <div className="Frame583 w-[51px] h-[50px] left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="Seconds w-[52px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Seconds</div>
                        <div className=" text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">56</div>
                    </div>
                    <div className="Semiclone left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                        <div className="Ellipse17 w-1 h-1 bg-[#e07575] rounded-full" />
                        <div className="Ellipse18 w-1 h-1 bg-[#e07575] rounded-full" />
                    </div>
                    <div className="Semiclone left-[143px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                        <div className="Ellipse17 w-1 h-1 bg-[#e07575] rounded-full" />
                        <div className="Ellipse18 w-1 h-1 bg-[#e07575] rounded-full" />
                    </div>
                    <div className="Semiclone left-[230px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                        <div className="Ellipse17 w-1 h-1 bg-[#e07575] rounded-full" />
                        <div className="Ellipse18 w-1 h-1 bg-[#e07575] rounded-full" />
                    </div>
                </div>



            </div>
        </div>
    )
}
