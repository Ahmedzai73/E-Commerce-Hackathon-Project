import Image from "next/image";
import cardImgage1 from"../../../public/Cart With Flat Discount.png";
import cardImgage2 from"../../../public/Cart With Flat Discount-1.png";
import cardImgage3 from"../../../public/Cart With Flat Discount-2.png";
import cardImgage4 from"../../../public/Cart With Flat Discount-3.png";
import cardImgage5 from"../../../public/Cart With Flat Discount-4.png";
import { Poppins, Inter} from "next/font/google";

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

export default function Cards() {
  return (
    <div className={`container ${Poppinsfont.className,Interfont.className} mx-auto`}>
<div className="cardholder w-[1308px] h-[350px] flex justify-between mt-[40px]">
        <Image src={cardImgage1} alt="Gamepad" className="max-w-[270px] max-h-[350px]"></Image>
        <Image src={cardImgage2} alt="Gamepad" className="max-w-[270px] max-h-[350px]"></Image>
        <Image src={cardImgage3} alt="Gamepad" className="max-w-[270px] max-h-[350px]"></Image>
        <Image src={cardImgage4} alt="Gamepad" className="max-w-[270px] max-h-[350px]"></Image>
        <Image src={cardImgage5} alt="Gamepad" className="max-w-[105px] max-h-[350px]"></Image>
        </div>
  </div>
  )
}
