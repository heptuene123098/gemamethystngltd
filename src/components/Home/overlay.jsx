import file from "../../assets/icons/documents.png";
import waiter from "../../assets/icons/waiter.png";
import service from "../../assets/icons/customer-service.png";
import satisfaction from "../../assets/icons/customer-satisfaction.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import { useEffect } from "react";

const Overlay = () => {
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
  const data = [
    {
      num: 2,
      text: "Project Completed",
      img: file,
    },
    {
      num: 50,
      text: "our staff",
      img: waiter,
    },
    {
      num: 2,
      text: "Services Provided",
      img: satisfaction,
    },
    {
      num: 1000,
      text: "Happy Customers",
      img: service,
    },
  ];
  return (
    <>
      <section className="overlay relative h-[40vh] mb-[20vh] flex justify-center items-center tablet:h-[30vh] tablet:mb-[8vh] phoneL:h-auto  phoneL:justify-start phoneL:p-8">
        <div className="black_screen absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="overlay_conatent flex gap-[4rem] z-10  laptop:gap-[2rem] tablet:gap-4 phoneL:flex-col ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="overlay_box flex gap-3 "
                data-aos="fade-up"
              >
                <div className="box_img_container p-2 w-[4rem] text-center bg-webpurple laptop:w-[4rem]  laptop:h-[4rem] tablet:w-[3.5rem] tablet:h-[3.5rem] phoneP:w-[3rem] phoneP:h-[3rem] ">
                  <img src={item.img} />
                </div>
                <div className="box_text flex flex-col gap-1 laptop:gap-3 tablet:gap-2">
                  <h2
                    ref={ref}
                    className="font-bold leading-[58px] text-[28px] text-white laptop:text-[24px] laptop:leading-[24px]  tablet:text-[20px] tablet:leading-[20px] phoneL:text-20px] phoneL:leading-[16px] phoneP:text-[15px] phoneP:leading-[12px] "
                  >
                    {inView ? <CountUp end={item.num} duration={5} /> : 0}
                  </h2>
                  <h3 className="font-semibold leading-[11px] text-[12px] text-white uppercase laptop:w-[50%] laptop:text-[12px] laptop:leading-[12px]  tablet:text-[10px] tablet:leading-[10px] phoneL:text-[10px] phoneL:leading-[11px] phoneP:text-[7px] phoneP:leading-[9px]">
                    {item.text}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Overlay;
