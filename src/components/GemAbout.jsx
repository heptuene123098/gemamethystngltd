import { useState , useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import html2canvas from "html2canvas";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

function GemAbout() {
  const captureRef = useRef(null);
  const canvasWrapperRef = useRef(null);

  const contentRef = useRef(null);
  const [showMission, setShowMission] = useState(true);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Fade out gradually
      setFadeClass("opacity-0");

      // Step 2: After fade-out completes, switch content
      setTimeout(() => {
        setShowMission((prev) => !prev);
      }, 1000); // match fade-out duration

      // Step 3: Fade back in after content switches
      setTimeout(() => {
        setFadeClass("opacity-100");
      }, 1000); // slight delay after content swap
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const COUNT = 75;
    const REPEAT_COUNT = 3;
    const canvases = [];

    const createCanvases = (captureEl) => {
      html2canvas(captureEl).then((canvas) => {
        const width = canvas.width;
        const height = canvas.height;
        const ctx = canvas.getContext("2d");
        const imageData = ctx.getImageData(0, 0, width, height);
        const dataList = [];

        // keep original visible under canvases
        captureEl.style.visibility = "hidden";

        // prepare empty imageData frames
        for (let i = 0; i < COUNT; i++) {
          dataList.push(ctx.createImageData(width, height));
        }

        // randomly distribute pixels among frames
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const idx = (x + y * width) * 4;
            for (let l = 0; l < REPEAT_COUNT; l++) {
              const frameIndex = Math.floor((COUNT * (Math.random() + (2 * x) / width)) / 3);
              for (let p = 0; p < 4; p++) {
                dataList[frameIndex].data[idx + p] = imageData.data[idx + p];
              }
            }
          }
        }

        // append canvases and setup scroll animation
        dataList.forEach((frameData) => {
          const clone = canvas.cloneNode();
          clone.getContext("2d").putImageData(frameData, 0, 0);
          Object.assign(clone.style, {
            position: "absolute",
            top: "0",
            left: "0",
            width: `${captureEl.offsetWidth}px`,
            height: `${captureEl.offsetHeight}px`,
            pointerEvents: "none",
            zIndex: 30,
            opacity: 1,
          });

          canvasWrapperRef.current.appendChild(clone);
          canvases.push(clone);

          // animate with scrub to allow reverse
          gsap.to(clone, {
            scrollTrigger: {
              trigger: canvasWrapperRef.current,
              scrub: 1,
              start: "top+=400 center",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
            duration: 1,
            rotate: 30 * (Math.random() - 0.5),
            x: 40 * Math.sin(Math.random() * Math.PI * 2),
            y: 40 * Math.cos(Math.random() * Math.PI * 2),
            opacity: 0,
          });
        });
      });
    };

    if (captureRef.current) {
      imagesLoaded(captureRef.current, () => {
        createCanvases(captureRef.current);
      });
    }

    return () => {
      // cleanup all canvases and scroll triggers
      canvases.forEach((c) => c.remove());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="bg-[#F4F5F9] min-h-screen flex items-center wide:px-0 px-8 phoneL:py-6 phoneP:py-4 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-row tablet:flex-col items-start tablet:items-center justify-between gap-10 desktop:gap-8 tablet:gap-6 phoneL:gap-4">
        
        {/* Text Column */}
        <div className="w-1/2 wide:w-1/2 desktop:w-7/12 laptop:w-8/12 tablet:w-full flex flex-col gap-8 desktop:gap-6 tablet:gap-4 phoneL:gap-3">
          <h1 className="font-bold text-5xl desktop:text-4xl tablet:text-3xl phoneL:text-2xl phoneP:text-xl leading-tight text-center tablet:text-center">
            <span className="text-webpurple">About </span>
            <span className="text-black">Us</span>
          </h1>

          {/* Smoothly fading content */}
          <div
            ref={contentRef}
            className={`transition-opacity duration-500 ease-in-out ${fadeClass}`}
          >
            {showMission ? (
              <>
                <h2 className="text-2xl tablet:text-xl phoneL:text-lg font-semibold text-center">Mission:</h2>
                <p className="text-lg desktop:text-base tablet:text-sm text-gray-700 font-medium max-w-md mx-auto text-center">
                  To equip engineering students and young professionals with the tools, skills and mindset required to become pathfinders and trailblazers in their fields—starting from within the walls of their institutions.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl tablet:text-xl phoneL:text-lg font-semibold text-center">Vision:</h2>
                <p className="text-lg desktop:text-base tablet:text-sm text-gray-700 font-medium max-w-md mx-auto text-center">
                  To build a vibrant community and learning ecosystem where future engineers and innovators thrive by:
                </p>
                <ol className="list-decimal font-semibold list-inside text-lg desktop:text-base tablet:text-sm text-gray-700 space-y-2 pl-4 max-w-md mx-auto">
                  <li>Learning in-demand, industry-relevant skills</li>
                  <li>Gaining real-world exposure through mentorship, hands-on projects, and internships.</li>
                  <li>Developing the leadership, creative, and entrepreneurial mindset needed for impactful careers</li>
                </ol>
              </>
            )}
          </div>
        </div>

        {/* Image + Canvas */}
        <div className="w-1/2 wide:w-1/2 desktop:w-1/2 laptop:w-1/2 tablet:w-full flex justify-center items-center relative">
          <div className="relative" ref={canvasWrapperRef}>
            <img
              src="/GemAcademy.png"
              alt="GemAcademy"
              id="capture"
              ref={captureRef}
             className="
    wide:w-[30rem]
    desktop:w-[20rem]
    laptop:w-[17rem]
    tablet:w-[15rem]
    phoneS:w-[15rem]
    phoneL:w-[10rem]
  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GemAbout;
