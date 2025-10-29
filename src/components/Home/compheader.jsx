import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CompHeader = ({ text, title, btnText, textColor, linkto }) => {
  return (
    <header
      data-aos="fade-up"
      className="team_header  flex justify-between items-center w-[70%] mx-auto   laptop:w-[80%] phoneL:w-[90%]  phoneP:w-[95%]  "
    >
      <div className="header_team_text flex flex-col gap-4 ">
        <h3 className=" text-[13px] text-webpurple leading-[23px] uppercase font-semibold laptop:text-[11px] ">
          {text}
        </h3>
        <h1
          className={`font-bold leading-[40px] uppercase text-[28px] tracking-[3px] laptop:tracking-[2px] ${textColor} laptop:leading-[30px] laptop:text-[24px] phoneL:text-[18px] phoneL:leading-[30px] phoneL:tracking-[1px] phoneP:text-[14px] phoneP:leading-[20px]`}
        >
          {title}
        </h1>
      </div>
      <div className="team_btn">
        <Link to={linkto}>
          <button className=" border-2  border-webpurple p-2 text-webpurple text-[10px] leading-[18px] font-bold uppercase laptop:text-[8px] laptop:p-1 phoneL:text-[8px] ">
            {btnText}
          </button>
        </Link>
      </div>
    </header>
  );
};

CompHeader.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  btnText:PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  linkto: PropTypes.string.isRequired,
};

export default CompHeader;
