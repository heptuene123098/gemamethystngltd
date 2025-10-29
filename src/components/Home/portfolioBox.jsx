import PropTypes from 'prop-types';

const PortfolioBox = ({ bgImage, title, description }) => {
  return (
    <div
      data-aos="fade-up"
      style={{
        background: `url(${bgImage})`,
      }}
      className={`relative group project_wrap_image img d-flex align-items-end h-[340px] rounded-md shadow-lg tablet:h-[300px] phoneL:h-[320px] phoneL:w-[90%]`}
    >
      <span className="bg-gradient-to-b from-black to-gray-800 absolute inset-0 opacity-65 origin-top scale-y-0 transition-all duration-300 group-hover:scale-y-50"></span>
      <span className="bg-gradient-to-t from-black to-gray-800 absolute inset-0 opacity-65 origin-bottom scale-y-0 transition-all duration-[600ms] group-hover:scale-y-50"></span>
      <div className="absolute opacity-0 flex justify-between items-center w-full bottom-0 p-4 transition-all duration-300 group-hover:opacity-100">
        <div className="flex flex-col gap-1">
          <h2 className="text-[10px] font-semibold leading-[18px] text-white uppercase">
            {description}
          </h2>
          <h1 className="text-[15px] font-bold leading-[25px] uppercase text-white">
            {title}
          </h1>
        </div>
        <div className="rounded-full px-4 py-2 bg-webpurple">
          <i className="fa-solid fa-chevron-right text-[18px] text-white"></i>
        </div>
      </div>
    </div>
  );
};

PortfolioBox.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PortfolioBox;


