import NavBar from "../components/Home/NavBar";
import MainContact from "../components/maincontactSection";
import Subhero from "../components/headinghero";
import Footer from "../components/Home/Footer";
import ToTopBtn from "../components/toTopBtn";
import ScrollToTop from "../components/ScrollToTop";

function ContactPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"Contact"} />
      <NavBar />
      <MainContact />
      <Footer />
    </main>
  );
}

export default ContactPage;
