import Subhero from "../components/headinghero";
import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/NavBar";
import Newslettersection from "../components/newsletter";
import MainBlogSection from "../components/MainBlogSection";
import ScrollToTop from "../components/ScrollToTop";
import ToTopBtn from "../components/toTopBtn";

function BlogPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"Blog"} />
      <NavBar />
      <MainBlogSection />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default BlogPage;
