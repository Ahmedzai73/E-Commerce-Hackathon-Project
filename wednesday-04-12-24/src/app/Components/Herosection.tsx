import Link from "next/link"
import { MdArrowForwardIos } from "react-icons/md";
import FrontheroImage from "./FrontheroImage";
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

export default function Herosection() {
  return(
    <div className={`container ${Poppinsfont.className,Interfont.className} mx-auto`}>
  <div className="hero-section w-[1440px] h-[384.2798px]  mx-auto flex">


<ul className="sidenav w-[217px] h-[344px] flex flex-col justify-between text-base text-black font-normal font-['Poppins'] leading-normal ml-[134px] mt-10">

<Link href="#" className="flex items-center">Woman’s Fashion
<MdArrowForwardIos  className="text-lg ml-[51px]"/></Link>
<Link href="#" className="flex items-center">Men’s Fashion
<MdArrowForwardIos  className="text-lg ml-[79px]"/></Link>
<Link href="#">Electronics</Link>
<Link href="#">Home & Lifestyle</Link>
<Link href="#">Medicine</Link>
<Link href="#">Sports & Outdoor</Link>
<Link href="#">Baby’s & Toys</Link>
<Link href="#">Groceries & Pets</Link>
<Link href="#">Health & Beauty</Link>



</ul>

<div className="Line w-96 h-[0px] origin-top-left rotate-90 opacity-30 border border-black ml-4"></div>

<FrontheroImage />

</div>
</div>  
  )
  
}
