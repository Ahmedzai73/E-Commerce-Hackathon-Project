import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Poppins, Inter } from "next/font/google";
import Image from 'next/image';
import iphonedisplayimage from "../../../public/hero_endframe__cvklg0xk3w6e_large 2.png";

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


export default function FrontheroImage() {
    return (
        <div className={`${Poppinsfont.className, Interfont.className}`}>
            <div className="imagebox w-[892px] h-[344px] bg-black absolute left-[413px] top-[182px]">
                <div className="img  overflow-hidden "><Image src={iphonedisplayimage} alt='' className=' w-[496px] h-[304px] absolute top-4 left-[396px] '></Image></div>
                <div className="contentholder w-[396px] h-[344px]  grid gap-5 py-14 pl-16 text-white">
                    <h1 className="flex items-center"><FaApple className=" w-[40px] h-[49px] mr-[24px]" />iPhone 14 Series</h1>
                    <h1 className="text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">Up to 10% off Voucher</h1>

                    <div className="Frame562 h-7 justify-start items-center gap-2 inline-flex">
                        <div className="Frame561 flex-col justify-start items-start gap-1 inline-flex">
                            <div className="ShopNow text-center text-[#f9f9f9] text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
                            <div className="Line5 w-[81px] h-[0px] border border-[#f9f9f9]"></div>
                        </div>
                        <FaArrowRight className="w-6 h-6 relative" />

                    </div>

                </div>
            </div>

        </div>
    )
}
