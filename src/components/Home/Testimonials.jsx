import TestimonialsCarousel from "./TestimonialsCarousel";
const Testimonails = () => {
  return (
    <section className="testimonail_section mt-[10rem] pb-12 flex flex-col gap-9 laptop:gap-6 phoneL:mt-[5rem] phoneP:gap-4">
      <header
        data-aos="fade-up"
        className="team_header  flex justify-between items-center w-[70%] mx-auto   laptop:w-[80%] phoneL:w-[90%]  phoneP:w-[95%]  "
      >
        <div className="header_team_text flex flex-col gap-2 m:gap-1">
          <h3 className=" text-[13px] text-webpurple leading-[23px] uppercase font-semibold laptop:text-[11px] ">
            {" "}
            Testimonial
          </h3>
          <h1
            className={`font-bold leading-[40px] uppercase text-[30px] tracking-[3px] laptop:tracking-[2px]  laptop:leading-[30px] laptop:text-[24px] phoneP:text-[18px] phoneP:leading-[25px] phoneP:tracking-[1px]`}
          >
            People Say <br></br> About Our Works
          </h1>
        </div>
      </header>

      <div className="overflow-x-hidden w-full">
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default Testimonails;
