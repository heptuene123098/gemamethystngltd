function GemServices() {
  return (
    <section className="bg-[#F4F5F9] min-h-screen flex items-center wide:px-0 px-8 phoneL:py-6 phoneP:py-4 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start tablet:items-center justify-between gap-10 tablet:gap-8 phoneL:gap-6">
        {/* Heading */}
        <header>
          <h1
            data-aos="fade-up"
            className="font-bold text-5xl wide:text-5xl tablet:text-3xl phoneL:text-2xl phoneP:text-xl leading-tight"
          >
            <span className="text-webpurple">Our </span>
            <span className="text-black">Services</span>
          </h1>
        </header>

        {/* Services List + Launch Info + Button */}
        <div className="flex flex-col items-center gap-8 phoneL:gap-6">
          {/* Styled List */}
          <ul
            className="
    grid 
    phoneL:grid-cols-1 
    tablet:grid-cols-2 
    wide:grid-cols-4
<<<<<<< HEAD
    desktop:grid-cols-4 
=======
    desktop:grid-cols-3 
>>>>>>> 2bb9637 (Second Push)
    gap-4 
    text-md phoneL:text-base 
    text-gray-700 
    list-none 
    w-full
  "
          >
            {[
              "Skill Development Tracks",
              "Career Development Tracks",
              "Live Projects & Industry Challenges",
              "Mentorship & Coaching",
              "Events & Hackathons",
              "Certification & Recognition",
            ].map((item) => (
              <li
                key={item}
                className="
        bg-white 
        border border-gray-200 
        shadow-sm 
        rounded-xl 
        p-4 
        flex items-start
        transition hover:shadow-md hover:border-gray-300
      "
              >
                <span className="inline-block mt-1 w-2 h-2 bg-webpurple rounded-full mr-3 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Centered Button */}
         <div className="relative overflow-hidden group w-fit">
            {/* Main button */}
            <button className="btn btn_view w-full rounded-md px-[12px] uppercase tracking-[1px] py-[14px] bg-webpurple text-white border-none cursor-pointer text-[13px] font-bold laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[15px] tablet:py-[15px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px]">
              Join the Waitlist
            </button>

            {/* Slide-in on hover */}
            <button className="btn btn_view absolute inset-0 w-full rounded-md px-[12px] uppercase tracking-[1px] py-[14px] bg-black text-white flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300 border-none cursor-pointer text-[13px] font-bold laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px]">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GemServices;
