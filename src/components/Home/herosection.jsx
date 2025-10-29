import Hero from "./heroComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slider1 from "../../assets/images/bgImg1.png";
import Slider2 from "../../assets/images/students.png";
import Slider3 from "../../assets/images/xbg_1.jpg.pagespeed.ic.C4ltd2p0C9.jpg";
import Slider4 from "../../assets/images/xbg_2.jpg.pagespeed.ic._SnGDHYPFu.jpg";

const HeroSection = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay, EffectFade]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        fadeEffect={{ crossFade: true }}
        loop
        speed={2000}
      >
        <SwiperSlide>
          <Hero
            img={Slider1}
            mainText="Professinal & Creative Design Solution"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero img={Slider2} mainText="A Nexus Between AEC and Tech" />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            img={Slider3}
            mainText="Digital Innovation Company that Creates Solution"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero img={Slider4} mainText="Future-Ready Workforce Development" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
