import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaEquals, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsOpen(false); // triggers exit animation
    setTimeout(() => {
      navigate(path); // redirect AFTER animation
    }, 400); // match with your `exit` duration
  };

  const navData = [
    { linkto: "/about", name: "About", icon: "fa-solid fa-user-group" },
    {
      linkto: "/pricing",
      name: "Pricing",
      icon: "fa-solid fa-hand-holding-dollar",
    },
    { linkto: "/portfolio", name: "Portfolio", icon: "fa-solid fa-briefcase" },
    { linkto: "/blog", name: "Blog", icon: "fa-solid fa-blog" },
    { linkto: "/contact", name: "Contact", icon: "fa-solid fa-phone" },
  ];

  const toggleNavBar = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav className="flex justify-around flex-wrap absolute w-full items-center bg-white/20 backdrop-blur-[1px] top-7 py-4 px-[2rem] laptop:px-[1rem] laptop:justify-between phoneL:py-3 phoneP:py-2 z-20">
        <div className="logo_container">
          <Link to="/">
            <h1 className="text-[20px] leading-[24px] text-white font-bold phoneL:text-[20px] phoneP:text-[15px]">
              <span className="text-webpurple">Gem</span>amethystng
            </h1>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav_links flex gap-16 items-center font-semibold laptop:gap-10 tablet:gap-7 laptop:hidden phoneS:gap-5 phoneS:items-end">
          {navData.map((data, index) => (
            <li
              key={index}
              className="links text-[13px] leading-[27px] font-medium laptop:text-[13px] tablet:text-[12px]"
            >
              <NavLink to={data.linkto}>{data.name}</NavLink>
            </li>
          ))}
          <button 
          onClick={() => navigate("/GemAcademy")}
          className="btn btn_shop cursor-pointer transition-all hover:scale-110 duration-300 ease-in-out px-4 rounded-[.4rem] bg-webpurple tracking-[1px] font-medium text-[13px] uppercase text-white py-2 laptop:text-[13px] tablet:text-[11px]">
            GEMACADEMY
          </button>
        </ul>
      </nav>

      {/* Hamburger */}
      <button
        className="hidden phoneL:block phoneP:block phoneS:block tablet:block laptop:block fixed top-6 right-6 mt-6 z-30 text-white bg-webpurple p-2 rounded-md"
        onClick={toggleNavBar}
      >
        {isOpen ? (
          <FaTimes className="phoneP:w-3 phoneP:h-3 phoneL:w-3 phoneL:h-3 tablet:w-4 tablet:h-4 laptop:w-4 laptop:h-4" />
        ) : (
          <FaEquals className="phoneP:w-3 phoneP:h-3 phoneL:w-3 phoneL:h-3 tablet:w-4 tablet:h-4 laptop:w-4 laptop:h-4" />
        )}
      </button>

      {/* Mobile Dropdown rendered outside nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed inset-0 bg-white text-webpurple z-20 flex flex-col items-center justify-center gap-8 text-xl font-semibold"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-6 items-center">
              {navData.map((data, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-[17px]"
                >
                  <i className={`${data.icon} text-[15px]`} />
                  <button
                    className="hover:underline"
                    onClick={() => handleNavClick(data.linkto)}
                  >
                    {data.name}
                  </button>
                </motion.li>
              ))}
              <hr className="border border-t-4 w-full text-webpurple" />
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => handleNavClick("/GemAcademy")}
                  className="mt-6 px-4 py-2 rounded-md bg-webpurple text-white font-bold text-sm uppercase tracking-widest"
                >
                  GEMACADEMY
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
