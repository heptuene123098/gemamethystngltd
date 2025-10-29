import SolutionBox from "./solutionsBox";
import { services } from "../../constants";
const Solutions = () => {
  return (
    <>
      <section className="solutions_sections flex ">
        <div className="Solutions_content grid mx-auto w-[70%] gap-4 place-items-center grid-cols-1 phoneL:grid-cols-2 phoneS:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-4 wide:grid-cols-4 py-[7rem] laptop:w-[90%] laptop:py-[6rem] tablet:gap-2 tablet:py-[5rem] phoneL:gap-3 phoneL:w-[95%]">
          <div className="solutions_header col-span-2 phoneL:mb-4">
            <h2 className="text-white tracking-[1px] uppercase text-[34px] leading-[48px] font-bold  laptop:text-[30px] laptop:leading-[35px] tablet:text-[25px] tablet:leading-[30px] phoneL:text-[20px] phoneL:leading-[25px]">
              We Shape <br /> The Perfect Solutions
            </h2>
            <p className="text-[#999999] font-normal text-[16px] leading-[29px] laptop:text-[14px] laptop:leading-[20px] laptop:mt-3 tablet:text-[12px] tablet:leading-[16px] phoneL:text-[11px] phoneL:leading-[13px]">
              By driving innovation and efficiency at the intersection of
              technology and the AEC & Oil & Gas industries, we aim to create a
              future where every project succeeds, and every individual thrives.
            </p>
          </div>
          {services.map((service, index) => {
            return (
              <SolutionBox
                key={index}
                text={service.text}
                icon={service.serviceicon}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Solutions;
