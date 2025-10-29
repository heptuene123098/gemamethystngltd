import { useEffect, useState } from "react";

const ToTopBtn = () => {
  const [isVisisble, setIsvisible] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 300) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const handlePosition = () => {
    // scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <i
      onClick={handlePosition}
      className={`fa-regular fa-circle-up fixed z-50 bottom-[1rem] ${
        isVisisble
          ? "opacity-100 transition-all duration-[400ms]"
          : "opacity-0 pointer-events-none transition-all duration-300"
      } right-[1rem]  text-[2rem] text-webpurple animate-bounce`}
    ></i>
  );
};

export default ToTopBtn;
