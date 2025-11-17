import Prices from "./Prices";
import img2 from "../assets/brandassets/FACELESSCON1.svg";
import img1 from "../assets/images/ximage_3.jpg.pagespeed.ic.CzImA-z_Ch.jpg";
import img3 from "../assets/brandassets/GEMACADEMY.svg";

 function PricingComps() {
   return (
     <section className=" bg-[#F4F5F9] h-[130vh]   flex justify-center items-center phoneL:h-auto phoneL:py-8">
       <div className="prices_content flex flex-col gap-8">
         <header className="text-center ">
           <h2 className="font-semibold text-webpurple leading-[23px] text-[14px] uppercase phoneP:text-[12px]">
             Pricing
           </h2>
           <h1 className="font-bold leading-[48px]  text-[34px] tracking-[3px] uppercase tablet:text-[28px] tablet:tracking-[2px] tablet:leading-[35px] phoneL:text-[24px] phoneL:leading-[30px] phoneP:text-[20px] phoneP:leading-[25px]">
             Price & Plans
           </h1>
         </header>
         <div className="price_list flex gap-8 justify-center  laptop:gap-2 phoneL:flex-col phoneL:gap-8 phoneL:items-center">
           <Prices delay="200" img={img1} number={"15"} currentindex={0} />
           <Prices delay="400" img={img2} number={"50"} currentindex={1} />
           <Prices delay="600" img={img3} number={"100"} currentindex={2} />
         </div>
       </div>
     </section>
   );
 }

 export default PricingComps;
