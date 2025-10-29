import PropTypes from 'prop-types';
const Recentblogs = ({ img, title }) => {
  return (
    <>
      <div className="flex gap-4 ">
        <div className="w-[11rem] h-[5rem] laptop:w-[10rem] laptop:h-[4rem] phoneL:h-[5.5rem]">
          <img src={img} alt="image" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[16px] font-bold leading-[22px] uppercase laptop:text-[11px] laptop:leading-[13px] phoneL:text-[12px] phoneL:leading-[17px] phoneL:w-[70%] phoneP:text-[11px] phoneP:w-full">
            {title}
          </h1>
          <div className="flex  gap-4 ">
            <span className="text-[11px] text-webpurple laptop:text-[10px]">
              <i className="fa-solid fa-calendar-days"></i> Sept. 30, 2020{" "}
            </span>
            <span className="text-[11px] text-webpurple laptop:text-[10px]">
              <i className="fa-solid fa-comment"></i>19
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

Recentblogs.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default Recentblogs;
