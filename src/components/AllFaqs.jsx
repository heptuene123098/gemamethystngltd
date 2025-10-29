import { useEffect, useState } from "react";
import { AllTheFaqs } from "../constants";
import Aos from "aos";

function AllFaqs() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState({
    categoryIndex: null,
    faqIndex: null,
  });

  const handleToggle = (categoryIndex, faqIndex) => {
    if (
      activeIndex.categoryIndex === categoryIndex &&
      activeIndex.faqIndex === faqIndex
    ) {
      setActiveIndex({ categoryIndex: null, faqIndex: null });
    } else {
      setActiveIndex({ categoryIndex, faqIndex });
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#f4f5f9] flex flex-col items-center py-16 px-4 tablet:px-6 phoneL:px-4 phoneP:px-3">
      <div className="w-full max-w-screen-xl">
        {/* Header */}
        <header
          data-aos="fade-up"
          className="text-center mb-12 flex flex-col items-center gap-4"
        >
          <h2 className="font-semibold text-[13px] text-webpurple uppercase tracking-[2px] laptop:text-[11px] phoneL:text-[10px]">
            Frequently Asked Questions
          </h2>
          <h1 className="text-[34px] leading-[48px] font-bold text-black uppercase tracking-[3px] laptop:text-[30px] laptop:leading-[40px] tablet:text-[24px] tablet:leading-[32px] phoneL:text-[20px] phoneL:leading-[28px] phoneP:text-[18px] phoneP:leading-[26px]">
            Frequently
            <br />
            Asked Questions?
          </h1>
        </header>

        {/* FAQ Content */}
        <div className="flex flex-col gap-10">
          {AllTheFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <h3 className="text-[22px] font-bold text-black mb-4 uppercase tracking-[1px] laptop:text-[18px] phoneL:text-[16px]">
                {category.title}
              </h3>

              {/* FAQs */}
              {category.faqs.map((faq, faqIndex) => (
                <div
                  key={faqIndex}
                  className="faq_container_box w-full h-auto mb-4"
                >
                  <button
                    className={`w-full border border-1 shadow-md text-left py-5 px-4 rounded-t-lg transition-colors duration-300 ${
                      activeIndex.categoryIndex === categoryIndex &&
                      activeIndex.faqIndex === faqIndex
                        ? "bg-webpurple"
                        : "bg-white"
                    }`}
                    onClick={() => handleToggle(categoryIndex, faqIndex)}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-[18px] font-medium uppercase laptop:text-[16px] tablet:text-[14px] phoneL:text-[13px] ${
                          activeIndex.categoryIndex === categoryIndex &&
                          activeIndex.faqIndex === faqIndex
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`text-[18px] laptop:text-[16px] phoneL:text-[14px] ${
                          activeIndex.categoryIndex === categoryIndex &&
                          activeIndex.faqIndex === faqIndex
                            ? "text-white"
                            : "text-[#B2B2B2]"
                        }`}
                      >
                        {activeIndex.categoryIndex === categoryIndex &&
                        activeIndex.faqIndex === faqIndex ? (
                          <i className="fa-solid fa-chevron-down"></i>
                        ) : (
                          <i className="fa-solid fa-chevron-up"></i>
                        )}
                      </span>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                      activeIndex.categoryIndex === categoryIndex &&
                      activeIndex.faqIndex === faqIndex
                        ? "max-h-96"
                        : "max-h-0"
                    }`}
                  >
                    {activeIndex.categoryIndex === categoryIndex &&
                      activeIndex.faqIndex === faqIndex && (
                        <div className="py-3 px-4 bg-white text-black rounded-b-lg">
                          <ol className="pl-5 space-y-2">
                            {faq.answer.map((ans, i) => (
                              <li
                                key={i}
                                className="text-[16px] leading-[26px] laptop:text-[14px] phoneL:text-[12px] phoneP:text-[11px]"
                              >
                                {ans}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllFaqs;
