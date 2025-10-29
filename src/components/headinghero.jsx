import PropTypes from 'prop-types';
const Subhero = ({ page }) => {
  return (
    <>
      <section className="sub_hero_section relative flex items-end h-[85vh] p-8  tablet:p-4 phoneL:p-2">
        <div className="inset-0 bg-[#232429] opacity-50 absolute "></div>
        <div className="sub_hero_content flex flex-col gap-4 ml-[10%] z-10 tablet:ml-[3%] tablet:gap-2 phoneL:gap-1 phoneL:ml-[1%] ">
          <header className=" tablet:text-[.9rem] phoneL:text-[.7rem] phoneP:text-[.6rem]">
            <h1 className="text-[#D9D9DA] flex gap-1">
              Home
              <span>
                <i className="fa-solid fa-angle-right tablet:text-[.5rem]"></i>
              </span>
              {page}
              <span>
                <i className="fa-solid fa-angle-right tablet:text-[.5rem]"></i>
              </span>
            </h1>
          </header>
          <h2 className="uppercase text-[50px] leading-[60px] font-bold text-white tablet:text-[40px] tablet:leading-[40px] phoneL:text-[25px] phoneL:leading-[30px] phoneP:text-[15px] phoneP:leading-[20px]">
            {page}
          </h2>
        </div>
      </section>
    </>
  );
};

Subhero.propTypes = {
  page: PropTypes.string.isRequired
};

export default Subhero;