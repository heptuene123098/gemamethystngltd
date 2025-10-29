import img1 from "../../assets/images/xabout-1.jpg.pagespeed.ic.akjHwrNTaM.jpg";
import lightBuld from "../../assets/icons/light-bulb.png";
import Aos from "aos";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

function Ftco() {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  useEffect(() => {
    const startDate = new Date("2023-10-30");
    const currentDate = new Date();
    const diffYears = currentDate.getFullYear() - startDate.getFullYear();
    console.log(diffYears);

    // Check if the current date is before October 30 in the current year
    const isBeforeAnniversary =
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate());

    setYearsOfExperience(isBeforeAnniversary ? diffYears - 1 : diffYears);
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <>
      <section className="ftco_section flex relative laptop:h-[105vh] tablet:h-auto  phoneS:flex-col phoneS:w-full phoneS:h-auto ">
        <div className="img_container flex  w-[50%] phoneS:w-[100%] phoneS:mb-4 phoneS:h-[50vh] ">
          <img
            className="w-1/2 ml-auto mr-[4rem] h-full laptop:w-full laptop:mr-1 laptop:m-0  tablet:my-auto phoneS:h-[100%] object-cover  phoneL:m-0 phoneL:ml-0"
            src={img1}
            alt="about"
          />
        </div>

        <div className="ftco_text_container w-1/2 flex flex-col p-8 justify-center  gap-4 tablet:gap-2 phoneS:w-full phoneS:p-4 phoneS:gap-4">
          <h3
            data-aos="fade-up"
            className="uppercase font-semibold leading-[23px] text-[13px] text-webpurple tablet:text-[11px] phoneL:text-[10px] phoneL:tracking-[2px] phoneP:text-[10px] phoneP:tracking-[1px]"
          >
            Welcome to Gemamethystng
          </h3>
          <h1
            data-aos="fade-up"
            className="font-bold uppercase tracking-[3px] text-[30px] leading-[40px] laptop:text-[30px] laptop:leading-[30px] laptop:tracking-[2px] tablet:text-[25px] tablet:leading-[35px] phoneL:text-[25px] phoneL:leading-[30px] phoneL:tracking-[1px] phoneP:text-[20px] phoneP:leading-[25px] phoneP:tracking-[1px]"
          >
            Highest
            <br /> Creative Standards
          </h1>
          <p
            data-aos="fade-up"
            className="text-[13px] w-[70%] font-normal leading-[20px] text-[#999999] laptop:text-[14px] laptop:leading-[25px] desktop:w-[100%] tablet:text-[13px] phoneL:text-[12px] phoneL:leading-[18px] phoneL:w-[100%] phoneP:text-[10px] phoneP:leading-[16px] phoneP:w-[100%]"
          >
            To revolutionize project management and operational efficiency for
            SMEs by delivering AI-powered and data-driven tools, while
            empowering students and startups in the AEC and Oil & Gas industries
            through world-class training, practical guidance, and innovative
            resources, fostering sustainable growth and impactful careers.
          </p>

          <div className="absolute bg-webpurple bottom-[1rem] right-[48%] translate-x-[50%] w-[24%] p-3 flex gap-6 laptop:w-[27%] laptop:p-2 tablet:w-[35%] phoneS:static phoneS:w-full phoneS:translate-x-0">
            <div className="ftco_icon ">
              <div className="bg-black rounded-full  p-4  phoneL:p-3 ">
                <img
                  className="w-[35px] laptop:w-[35px] tablet:w-[30px] phoneL:w-[25px]"
                  src={lightBuld}
                  alt="lightbulb"
                />
              </div>
            </div>
            <div className="ftco_text flex flex-col gap-[.15rem] justify-center">
              <h2
                ref={ref}
                className="font-bold leading-[32px] text-[30px] text-white  laptop:text-[24px] laptop:leading-[24px] phoneL:text-[20px] phoneL:leading-[20px] phoneP:text-[16px] phoneP:leading-[16px]"
              >
                {inView ? <CountUp end={yearsOfExperience} duration={5} /> : 0}
              </h2>
              <h3 className="text-[10px] leading-[14px] font-bold text-white uppercase laptop:text-[10px] phoneL:text-[8px] phoneP:text-[7px] phoneP:leading-[8px]">
                Years Of <br />
               Experience
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ftco;
