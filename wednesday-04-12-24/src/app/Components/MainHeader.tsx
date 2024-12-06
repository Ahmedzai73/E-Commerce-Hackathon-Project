import { Poppins, Inter} from "next/font/google";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";

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
 
export default function MainHeader() {
  return (
    <div className={`container ${Poppinsfont.className,Interfont.className} mx-auto`}>
    <div className="insidebody w-[1170px] h-[38px] bg-slate-300 mx-auto flex justify-between items-center text-black">
   <div className=" text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
   <ul className="w-[367px] h-6 flex justify-between items-center text-base font-normal font-['Poppins'] leading-normal"> 
    <li><Link href="#" >Home</Link>
    <div className="line1 w-12 h-[0px] border border-black "></div></li>
   <Link href="#">Contact</Link>
   <Link href="#">About</Link>
   <Link href="#">Sign Up</Link>
</ul>

<div className="searchbar flex relative "><input type="search" name="search" placeholder="What are you looking for?" className="h-[38px] pl-5 pr-3 flex relative items-center placeholder:text-xs bg-neutral-100 rounded " /><FiSearch className="absolute right-2 my-auto top-0 bottom-0 text-lg font-light flex"/></div>

<div className="icons">
    <div className="heart"><IoHeartOutline/></div>
    <div className="heart"><IoHeartOutline/></div>
</div>
  
    </div>
</div>
  )
}
