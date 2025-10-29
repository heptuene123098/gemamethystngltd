import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/NavBar";
import AllFaqs from "../components/AllFaqs";
import Subhero from "../components/headinghero";
import ScrollToTop from "../components/ScrollToTop";
import Newslettersection from "../components/newsletter";
import ToTopBtn from "../components/toTopBtn";
function AllFaqsPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"FAQs"} />
      <NavBar />
      <AllFaqs />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default AllFaqsPage;
