import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PricingPage from "./Pages/PricingPage";
import AllFaqsPage from "./Pages/AllFaqsPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogPage from "./Pages/BlogPage";
import TeamMembers from "./Pages/TeamMembers";
import ContactPage from "./Pages/ContactPage";
import AllTeamMembers from "./Pages/AllTeamMembers";
import GemAcademyPage from "./Pages/GemAcademyPage";
import SpecificBlogPost from "./components/selectedBlog/SpecificBlogPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/faqs" element={<AllFaqsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/teammembers" element={<AllTeamMembers />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/GemAcademy" element={<GemAcademyPage />} />
        <Route path="/blog/:id" element={<SpecificBlogPost />} />
      </Routes>
    </>
  );
}

export default App;