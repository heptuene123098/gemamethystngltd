import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slider1 from "../../assets/images/bgImg1.png";
import Slider2 from "../../assets/images/students.png";
import Slider3 from "../../assets/images/xbg_1.jpg.pagespeed.ic.C4ltd2p0C9.jpg";
import Slider4 from "../../assets/images/xbg_2.jpg.pagespeed.ic._SnGDHYPFu.jpg";
import { Link } from "react-router-dom";

const JoinSection = ({ img, mainText, description, showButtons = true }) => {
  return (
    <>
      <section
        style={{ background: `url(${img}) no-repeat center center/cover` }}
        className="h-[95vh] flex items-center !bg-no-repeat !bg-cover !bg-center relative"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="JoinSection_content ml-[16rem] flex flex-col laptop:ml-[6rem] tablet:ml-[3rem] phoneL:ml-5 phoneP:ml-4 relative z-10">
          <h3 className="text-white leading-[23px] font-bold text-[13px] uppercase tracking-[5px] mb-[10px] tablet:text-[11px] phoneL:text-[10px] phoneL:tracking-[2px] phoneL:mb-[8px] phoneP:text-[10px] phonep:mb-[6px] phoneP:tracking-[1px]">
            welcome To Gemamethystng
          </h3>
          <h1 className="text-white text-[52px] w-[50%] font-bold uppercase tracking-[1px] mb-[20px] leading-[3.5rem] laptop:text-[40px] laptop:w-[60%] laptop:leading-[2.5rem] laptop:mb-[10px] tablet:text-[35px] tablet:w-[70%] tablet:leading-[2.4rem] tablet:mb-[8px] phoneL:w-[90%] phoneL:text-[25px] phoneL:leading-[1.8rem] phoneL:mb-[6px] phoneP:text-[20px] phoneP:leading-[1.6rem] phoneP:w-full phoneP:mb-[3px]">
            {mainText}
          </h1>
          <p className="text-lightwhite font-normal text-[16px] laptop:text-[13px] tablet:text-[12px] phoneL:text-[11px] phoneP:text-[10px] w-[45%] laptop:w-[60%] tablet:w-[70%] phoneL:w-[90%] phoneP:w-full">
            {description || "Be part of something extraordinary. Help us shape the future of technology and innovation."}
          </p>

          {showButtons && (
            <div className="btn_container gap-4 flex items-center mt-2 p-2 tablet:gap-2 tablet:p-1 tablet:mt-3 phoneL:mt-2">
              <Link to="/join" state={{ scrollToCareers: true }}>
                <div>
                    <button className="btn btn_get_started px-[12px] uppercase tracking-[1px] py-[14px] bg-webpurple text-white text-[13px] cursor-pointer font-bold rounded-md laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px] phoneP:text-[8px] phoneP:px-[8px] phoneP:py-[8px] hover:bg-purple-700 transition-colors">
                    {window.location.pathname === '/join' ? 'Explore Opportunities' : 'Join Our Team'}
                    </button>
                </div>
              </Link>

              <Link to={"/portfolio"}>
                <div className="relative overflow-hidden group">
                  <button className="btn btn_view px-[12px] uppercase tracking-[1px] py-[14px] bg-white text-webpurple border-none cursor-pointer text-[13px] font-bold rounded-md laptop:text-[9px] laptop:px-[9px] laptop:py-[9px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px] phoneP:text-[8px] phoneP:px-[8px] phoneP:py-[8px]">
                    View Portfolio
                  </button>
                  <button className="btn btn_view absolute inset-0 px-[12px] uppercase tracking-[1px] py-[14px] bg-black text-white flex -translate-x-full group-hover:translate-x-0 transition-transform duration-300 border-none cursor-pointer text-[13px] font-bold rounded-md laptop:text-[9px] laptop:px-[9px] laptop:py-[9px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px] phoneP:text-[8px] phoneP:px-[8px] phoneP:py-[8px]">
                    View Portfolio
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
// Main component that contains the Swiper
// Main component that contains the Swiper
const HeroSlider = () => {
  const slides = [
    {
      img: Slider1,
      mainText: "Join Our Innovative Team",
      description: "Build your career with cutting-edge technology and creative solutions"
    },
    {
      img: Slider2,
      mainText: "A Nexus Between AEC and Tech",
      description: "Bridge the gap between architecture, engineering, and technology"
    },
    {
      img: Slider3,
      mainText: "Create Digital Solutions That Matter",
      description: "Work on projects that transform industries and impact lives"
    },
    {
      img: Slider4,
      mainText: "Future-Ready Workforce Development",
      description: "Grow your skills with our continuous learning environment"
    }
  ];

  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay, EffectFade]}
        spaceBetween={50}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-webpurple !opacity-100'
        }}
        effect="fade"
        slidesPerView={1}
        autoplay={{ 
          delay: 5000, // Increased for better readability
          disableOnInteraction: false 
        }}
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        className="join-us-hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <JoinSection
              img={slide.img}
              mainText={slide.mainText}
              description={slide.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;


