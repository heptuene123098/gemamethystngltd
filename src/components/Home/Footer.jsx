import Aos from "aos";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const exploreData = [
    { explore: "About", info: "Join Us", company: "About us", link: "/about" },
    { explore: "Contact", info: "Blog", company: "Blog", link: "/contact" },
    { explore: "Portfolio", info: "Privacy & Policy", company: "Contact", link: "/portfolio" },
    { explore: "Blog", info: "Term & Conditions", company: "Careers", link: "/blog" },
  ];

  const socialinks = [
    "fa-linkedin-in",
    "fa-tiktok",
    "fa-facebook-f",
    "fa-twitter",
    "fa-instagram"
  ];

  return (
    <footer className="min-h-[70vh] laptop:pt-20 flex bg-[#232429] justify-center items-center px-6 tablet:px-10">
      <div className="w-[70%] flex gap-4 justify-between laptop:w-[90%] tablet:w-[100%] phoneL:flex-col phoneL:gap-6">
        {/* Company Info */}
        <div className="company_info flex-1 flex flex-col gap-6 laptop:w-[30%] laptop:gap-4 phoneL:w-[90%]">
          <h1 className="font-bold leading-[25px] text-white text-[17px] uppercase laptop:text-[15px] tablet:text-[13px] tablet:leading-[15px]">
            Gemamethystng
          </h1>
          <div className="flex flex-col gap-3">
            <p className="text-[#BCBCBE] text-[13px] leading-[23px] font-normal laptop:text-[11px] laptop:leading-[15px] tablet:text-[10px] tablet:leading-[12px]">
              Far far away, behind the word mountains, far from the countries,
              steady on the internet—that’s where our heart lies.
            </p>
            <div className="social_media flex gap-3 tablet:items-center">
              {socialinks.map((item, index) => (
                <i
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`fa-brands ${item} text-white bg-webpurple p-3 rounded-full text-[14px] tablet:p-[.3rem] phoneL:text-[8px] phoneS:text-[text-12px] tablet:text-[8px] desktop:text-[8px] phoneP:p-[.5rem] phoneP:text-[9px]`}
                ></i>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 laptop:grid-cols-2 phoneS:grid-cols-2 tablet:grid-cols-3 phoneL:grid-cols-2 desktop:grid-cols-4 wide:grid-cols-4 gap-7 w-[70%] laptop:w-[90%] tablet:w-[100%]">
          {/* Explore */}
          <div className="explore flex flex-col gap-6 laptop:gap-3">
            <h1 className="uppercase text-[15px] text-white leading-[24px] font-bold laptop:text-[14px] tablet:text-[12px] tablet:leading-[15px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading-[13px]">
              Explore
            </h1>
            <ul className="flex flex-col gap-2 cl-effect-5">
              {exploreData.map((item, index) => (
                <li key={index} className="group flex items-center text-[#BCBCBE] text-[12px] font-normal leading-[20px] laptop:text-[12px] laptop:leading-[15px] tablet:text-[10px] tablet:leading-[12px] phoneL:text-[10px] phoneL:leading-[12px] phoneP:text-[9px] phoneP:leading-[10px]">
                  <i className="fa-solid fa-angle-right pr-1 group-hover:text-webpurple transition-colors"></i>
                  <Link to={item.link} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full">
                    <span data-hover={item.explore} className="block">
                      {item.explore}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="info flex flex-col gap-6 laptop:gap-3">
             <h1 className="uppercase text-[15px] text-white leading-[24px] font-bold laptop:text-[14px] tablet:text-[12px] tablet:leading-[15px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading-[13px]">
              Info
            </h1>
            <ul className="flex flex-col gap-2 cl-effect-5">
              {exploreData.map((item, index) => (
                <li key={index} className="group flex items-center text-[#BCBCBE] text-[12px] font-normal leading-[20px] laptop:text-[12px] laptop:leading-[15px] tablet:text-[10px] tablet:leading-[12px] phoneL:text-[10px] phoneL:leading-[12px] phoneP:text-[9px] phoneP:leading-[10px]">
                  <i className="fa-solid fa-angle-right pr-1 group-hover:text-webpurple transition-colors"></i>
                  <Link to={item.link} className="block w-full">
                    <span data-hover={item.info} className="block">
                      {item.info}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="company flex flex-col gap-6 laptop:gap-3">
           <h1 className="uppercase text-[15px] text-white leading-[24px] font-bold laptop:text-[14px] tablet:text-[12px] tablet:leading-[15px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading-[13px]">
              Company
            </h1>
            <ul className="flex flex-col gap-2 cl-effect-5">
              {exploreData.map((item, index) => (
               <li key={index} className="group flex items-center text-[#BCBCBE] text-[12px] font-normal leading-[20px] laptop:text-[12px] laptop:leading-[15px] tablet:text-[10px] tablet:leading-[12px] phoneL:text-[10px] phoneL:leading-[12px] phoneP:text-[9px] phoneP:leading-[10px]">
                  <i className="fa-solid fa-angle-right pr-1 group-hover:text-webpurple transition-colors"></i>
                  <Link to={item.link} className="block w-full">
                    <span data-hover={item.company} className="block">
                      {item.company}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Question? */}
          <div className="question flex flex-col gap-6 laptop:gap-3">
             <h1 className="uppercase text-[15px] text-white leading-[24px] font-bold laptop:text-[14px] tablet:text-[12px] tablet:leading-[15px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading-[13px]">
              Have a Question?
            </h1>
            <div className="flex flex-col gap-2 laptop:gap-1">
              <div className="question_map flex gap-2 items-center">
                <i className="fa-solid fa-map text-webpurple tablet:text-[.9rem] phoneL:text-[.7rem] phoneP:text-[.6rem]"></i>
                <p className="text-[#BCBCBE] text-nowrap laptop:text-[14px] tablet:text-[12px] phoneL:text-[10px] phoneP:text-[9px]">
                  Omu-Aran, Kwara-State
                </p>
              </div>
              <div className="question_phone flex items-center gap-2">
                <i className="fa-solid fa-phone text-webpurple text-[.9rem] phoneL:text-[.7rem] phoneP:text-[.6rem]"></i>
                <p className="text-[#BCBCBE] text-nowrap laptop:text-[14px] tablet:text-[12px] phoneL:text-[10px] phoneP:text-[9px]">
                  +234 815 9531 614
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
