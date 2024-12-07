import Herosection from "./Components/Herosection";
import Titles from "./Components/Titles";
import Cards from "./Components/Cards";
import Button from "./Components/Button";
import MidLine from "./Components/MidLine";

export default function Home() {
  return (
   <div>
<Herosection/>
<Titles/>
   <div className="cards absolute right-0 flex flex-col justify-center items-center"><Cards/>
  <div className="button  mt-[60px] "><Button/></div></div>
 
  <MidLine/>

   
   </div>
  
  );
}
