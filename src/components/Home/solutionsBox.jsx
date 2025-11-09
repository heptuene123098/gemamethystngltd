import PropTypes from 'prop-types';
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SolutionBox = ({ text, icon, path, pricingAnchor }) => {
  return (
     <Link  to={path} 
      state={{ fromPricing: pricingAnchor }}
      target="_blank"
      rel="noopener noreferrer"
      > 
     <div
      data-aos="fade-up-right"
      className="
        group relative
        w-[130px] h-[130px]         
        phoneL:w-[150px] phoneL:h-[150px]
        tablet:w-[180px] tablet:h-[180px]
        laptop:w-[200px] laptop:h-[200px]
        wide:w-[240px] wide:h-[220px]
        pt-6 px-4 mt-4
        flex flex-col gap-6
        bg-vantablack rounded-lg
        transition-all duration-300
        hover:bg-webpurple
      "
    >
      <div className="box_header flex justify-end pr-2">
        <div
          className="
            p-2
            bg-vantablack
            rounded-full
            z-10             
            transition-colors duration-300
            group-hover:bg-vantablack
          "
        >
          <img
            src={icon}
            alt="icon"
            className="
              w-[2.5rem] h-[2.5rem]
              phoneL:w-[3rem] phoneL:h-[3rem]
              tablet:w-[3.5rem] tablet:h-[3.5rem]
              laptop:w-[4rem] laptop:h-[4rem]
              transition-transform duration-300
              group-hover:rotate-12
            "
          />
        </div>
      </div>

      <div className="box_content">
        <h2
          className="
            text-white uppercase font-[700] tracking-[1px]
            text-[12px] leading-[14px]
            phoneL:text-[13px] phoneL:leading-[16px]
            tablet:text-[14px] tablet:leading-[18px]
            laptop:text-[15px] laptop:leading-[20px]
            desktop: -mt-4
            wide:text-[16px] wide:leading-[22px]
            w-[80%]
          "
        >
          {text}
        </h2>
      </div>

      <div
        className="
          w-8 h-8 rounded-full bg-black border-2
          wide:border-4 laptop:border-4 desktop:border-4 border-webpurple
          absolute -bottom-5 right-4
          flex items-center justify-center
          opacity-0 -translate-x-4
          transition-all duration-300
          group-hover:opacity-100 group-hover:translate-x-0
        "
      >
        <FaChevronRight className="text-webpurple text-xl" />
      </div>
    </div>
     </Link>
  );
};

SolutionBox.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pricingAnchor: PropTypes.string,
};

export default SolutionBox;
