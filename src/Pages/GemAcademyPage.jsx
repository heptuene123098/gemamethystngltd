import Subhero from "../components/headinghero";
import NavBar from "../components/Home/NavBar";
import GemComps from "../components/GemComps";
import GemAbout from "../components/GemAbout";
import GemServices from "../components/GemServices";
import Newslettersection from "../components/newsletter";
import Footer from "../components/Home/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ToTopBtn from "../components/toTopBtn";
function GemAcademyPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"GemAcademy"} />
      <NavBar />
      <GemComps />
      <GemAbout />
      <GemServices />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default GemAcademyPage;