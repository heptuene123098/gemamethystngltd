function GemComps() {
  return (
    <section className="bg-[#F4F5F9] min-h-screen flex items-center phoneL:py-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 px-4 phoneL:items-start">
        {/* Logo */}
        <header>
          <h1
          data-aos="fade-up"
           className="leading-[38px] font-bold phoneS:text-3xl tablet:text-5xl wide:text-7xl">
            Welcome to <span></span>
            <span className="text-webpurple">Gem</span>
            <span className="text-black">Academy</span>
          </h1>
        </header>
              
            {/* Text Content */}
            <div className="flex laptop:flex-row phoneL:flex-col">
                    <p className="text-lg text-gray-700 max-w-xl phoneL:text-base">
              We are building a brand that empowers the next generation of Engineers and
              Innovators to become trailblazers in their fields. Our platform is a vibrant, practical,
              and forward-looking learning ecosystem that supports skill acquisition, mentorship,
              real-world exposure, and professional development. </p>
            </div>

             <div className="flex laptop:flex-row phoneL:flex-col">              
              <p className="text-lg text-gray-700 max-w-xl phoneL:text-base">
              To equip engineering students and young professionals with the tools, skills, and
              mindset required to become pathfinders and trailblazers in their fields starting
              from within the walls of their institutions.
            </p>
            </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold leading-tight phoneS:text-lg">
            Build skills from your comfort zone.
          </h2>
          <div className="flex laptop:flex-row phoneL:flex-col">
            <div>
              <p className="text-lg text-gray-700 max-w-xl phoneL:text-base">
                Be among the first to experience this, subscribe to our
                newsletter and get notified when we launch on the 1st of
                September, 2025.
              </p>
            </div>
            <div>
              <div className="loader"></div>
            </div>
          </div>
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
  )
}

export default GemComps;