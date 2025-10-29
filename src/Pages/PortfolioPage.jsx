import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/NavBar";
import PortfoliopagesSections from "../components/PortfoliopagesSections";
import Subhero from "../components/headinghero";
import ScrollToTop from "../components/ScrollToTop";
import Newslettersection from "../components/newsletter";
import ToTopBtn from "../components/toTopBtn";
function PortfolioPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"Portfolio"} />
      <NavBar />
      <PortfoliopagesSections />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default PortfolioPage;
