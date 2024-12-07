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

export default function Button() {
  return (
    <div className={`container ${Poppinsfont.className,Interfont.className} mx-auto`}>
  
    <div className="button h-14 px-8 md:px-10 lg:px-12 py-3 md:py-4 bg-[#db4444] rounded justify-center items-center gap-2 md:gap-3 inline-flex">
    <div className="ViewAllProducts text-[#f9f9f9] text-sm md:text-base font-medium font-['Poppins'] leading-normal">
      View All Products
    </div>
  </div>
  </div>
  )
}
