import Portfoliobox from "./portfolioBox";
import { portfolio } from "../../constants";

function PortfolioList() {
  return (
    <div className="portfolio_sections  w-[70%] mx-auto grid grid-cols-3 gap-6  mt-16 p-1 laptop:w-[90%] tablet:w-[98%] phoneL:grid-cols-1 phoneL:w-[95%] phoneL:gap-2 phoneL:place-items-center phoneL:mt-10 ">
      {portfolio.map((item, index) => {
        return <Portfoliobox key={index} bgImage={item.bgImage} />;
      })}
    </div>
  );
}

export default PortfolioList;
