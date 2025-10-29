import NavBar from "../components/Home/NavBar";
import Subhero from "../components/headinghero";
import Ftco from "../components/Home/Ftco";
import Overlay from "../components/Home/overlay";
import Faq from "../components/Home/Faq";
import TeamComponents from "../components/Home/TeamComponents";
import Testimonails from "../components/Home/Testimonials";
import Footer from "../components/Home/Footer";
import Newslettersection from "../components/newsletter";
import ScrollToTop from "../components/ScrollToTop";
import ToTopBtn from "../components/toTopBtn";
function AboutPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"About us"} />
      <NavBar />
      <Ftco />
      <Overlay />
      <Faq />
      <TeamComponents />
      <Testimonails />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default AboutPage;
