import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/images/xabout-2.jpg.pagespeed.ic.GABFWe5WUO.jpg";
import { faqs } from "../../constants";
import AnimatedProgressBar from "./AnimatedProgressBar";
import Aos from "aos";

function Faq() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex bg-[#f4f5f9] tablet:flex-col-reverse">
      <div className="faq_text_container flex flex-col justify-center p-4 w-1/2 tablet:w-full phoneL:p-2">
        <div className="fa_text_content w-[70%] self-end mt-16 laptop:w-[100%] laptop:mt-10">
          <header
            data-aos="fade-up"
            className="faq_header flex flex-col gap-8 laptop:gap-4 tablet:gap-2"
          >
            <h2 className="font-semibold leading-[23px] text-[13px] text-webpurple uppercase laptop:text-[11px] laptop:leading-[21px] laptop:tracking-[2px] phoneL:text-[10px] phoneL:tracking-[1px] phoneP:text-[10px] phoneP:tracking-[1px]">
              Frequently Asked Questions
            </h2>
            <h1 className="text-[34px] leading-[48px] font-bold text-black uppercase tracking-[3px] laptop:text-[30px] laptop:leading-[40px] laptop:tracking-[2px] tablet:text-[20px] tablet:leading-[30px] phoneL:text-[18px] phoneL:leading-[25px] phoneP:text-[16px] phoneP:leading-[20px]">
              Frequently <br /> Asked Questions?
            </h1>
          </header>

          <div className="flex gap-3 flex-col mt-10 phoneL:mt-5">
            {faqs.map((faq, index) => (
              <div key={index} className="faq_container_box w-full h-auto">
                <button
                  className={`fa_btn w-full border border-1 shadow-md text-left py-5 px-4 laptop:py-4 laptop:px-3 tablet:py-2 tablet:p2 ${
                    activeIndex === index ? "bg-webpurple" : "bg-white"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex justify-between items-center overflow-hidden">
                    <span
                      className={`faq-question text-[18px] leading-[27px] font-normal laptop:text-[16px] laptop:leading-[20px] tablet:text-[12px] tablet:leading-[12px] ${
                        activeIndex === index ? "text-white" : "text-black"
                      } uppercase`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`${
                        activeIndex === index ? "text-white" : "text-[#B2B2B2]"
                      } font-semibold text-[18px] py-1 pr-1`}
                    >
                      {activeIndex === index ? (
                        <i className="fa-solid fa-chevron-down laptop:text-[.9rem] phoneL:text-[.8rem]"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-up laptop:text-[.9rem] phoneL:text-[.8rem]"></i>
                      )}
                    </span>
                  </div>
                </button>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {activeIndex === index && (
                    <div className="py-2 px-3 faq_answer text-gray-600 bg-white h-auto rounded-b-lg">
                      {Array.isArray(faq.answer) ? (
                        <ul className="p-2">
                          {faq.answer.map((ans, i) => (
                            <li
                              key={i}
                              className="py-2 text-[16px] text-black leading-[29px] font-normal laptop:text-[14px] laptop:leading-[20px] phoneL:text-[12px] phoneL:leading-[18px] phoneP:text-[10px] phoneP:leading-[16px]"
                            >
                              {ans}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="py-2 px-2 text-[16px] text-black leading-[29px] font-normal laptop:text-[14px] laptop:leading-[20px] phoneL:text-[12px] phoneL:leading-[18px] phoneP:text-[10px] phoneP:leading-[16px]">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <Link to="/faqs">
              <div className="relative overflow-hidden group">
                <button className="btn btn_view px-[12px] uppercase tracking-[1px] py-[14px] bg-webpurple text-white border-none cursor-pointer text-[13px] font-bold rounded-md laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px] phoneP:text-[8px] phoneP:px-[8px] phoneP:py-[8px]">
                  View All FAQS
                </button>
                <button className="btn btn_view tablet:hidden absolute inset-0 px-[12px] uppercase tracking-[1px] py-[14px] bg-black text-white flex -translate-x-full group-hover:translate-x-0 transition-transform duration-300 border-none cursor-pointer text-[13px] font-bold rounded-md laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px] phoneP:text-[8px] phoneP:px-[8px] phoneP:py-[8px]">
                  View All FAQs
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="faq_img_container p-8 w-1/2 tablet:w-full phoneL:p-2">
        <div className="faq_img_content w-[70%] flex flex-col gap-10 laptop:w-full">
          <header>
            <img
              data-aos="zoom-in"
              src={img2}
              alt="img"
              className="object-cover"
            />
          </header>
          <div className="faq_img_text flex flex-col gap-16 laptop:gap-10 phoneL:gap-6">
            <h1
              data-aos="fade-up"
              className="text-[32px] leading-[48px] font-bold text-black uppercase tracking-[1px] laptop:text-[28px] laptop:leading-[38px] laptop:tracking-[2px] tablet:text-[20px] tablet:leading-[30px] phoneL:text-[18px] phoneL:leading-[25px] phoneP:text-[16px] phoneP:leading-[20px]"
            >
              We Are Very <br />
              Experienced Professionals
            </h1>
            <div className="faq_progress flex flex-col gap-8 phoneL:gap-4">
              {[
                { label: "Creative Design", value: 95 },
                { label: "Product Engineering", value: 85 },
                { label: "Data Analysis and Business Intelligence", value: 95 },
                { label: "AI and Digital Marketing Tools", value: 80 },
                { label: "Support Tips", value: 90 },
                { label: "Training and Mentorships", value: 95 },
              ].map(({ label, value }, idx) => (
                <div
                  key={idx}
                  data-aos="fade-down"
                  className="faq_progress_bar_container flex flex-col gap-2 w-full"
                >
                  <div className="faq_progress_bar_header flex justify-between">
                    <h2 className="font-bold uppercase text-[14px] leading-[21px] phoneL:text-[12px]">
                      {label}
                    </h2>
                    <h2 className="text-[16px] pr-[5%] font-bold leading-[19px] text-webpurple phoneL:text-[14px]">
                      {value}%
                    </h2>
                  </div>
                  <AnimatedProgressBar value={value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
