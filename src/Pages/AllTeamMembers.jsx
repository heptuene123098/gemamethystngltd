import { Link } from "react-router-dom";
import { teamData } from "../constants";

function AllTeamMembers() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a2a2a] to-[#f7f7f7] flex flex-col items-center px-6 py-10">
      <Link to="/">
        <i className="fa-solid fa-circle-left text-2xl fixed top-4 left-4 text-white hover:text-webpurple transition-colors"></i>
      </Link>

      <div className="text-center mt-12 mb-8">
        <h1
          className="font-extrabold text-2xl md:text-4xl text-white leading-tight mb-3"
          data-aos="fade-up"
        >
          OUR LEADERSHIP TEAM
        </h1>
        <h2
          className="text-base md:text-lg text-white opacity-80 w-[85%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          With over 40 years of combined experience, we have a well-seasoned team at the helm.
        </h2>
      </div>

      <div className="team-members grid place-items-center grid-cols-1 phoneS:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 wide:grid-cols-2 gap-8 mt-8 w-full">
        {teamData.map((item, index) => (
          <div
            key={index}
            className="team-member w-full max-w-[30rem] aspect-square relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white z-10 text-sm font-semibold">
              {item.alt}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AllTeamMembers;
