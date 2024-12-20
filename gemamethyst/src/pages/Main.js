import React, { useEffect, useState } from "react";
import "../styles/main.css";
import Services from "../components/Services";
import Standards from "../components/Standards";
import FAQ from "../components/FAQ";
import Members from "../components/Members";
import Footer from "../components/Footer";

const Main = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
    }, 13000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <home>
        <section
          id="home"
          className={`main-section ${currentImage === 1 ? "bgImg1" : "bgImg2"}`}
        >
          <div className="main">
            <h2>
              WELCOME TO GEMAMETHYSTNG CONSULTANCY COMPANY THAT GUIDE STARTUPS TOWARD SUSTAINABLE GROWTH.
            </h2>
            <p>We listen, We act because we believe you are worth it.</p>
            <button>About Us</button>
          </div>
        </section>
        <section id="about">
          <Services />
        </section>
        <section>
          <Standards />
        </section>
        <section>
          <FAQ />
        </section>
        <section id="portfolio">
          <Members />
        </section>
      </home>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
};

export default Main;
