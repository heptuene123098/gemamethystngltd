import { useEffect } from "react";
import Subhero from "../components/headinghero";
import NavBar from "../components/Home/NavBar";
import PricingComps from "../components/PricingComps";
import Solutions from "../components/Home/solutions";
import Newslettersection from "../components/newsletter";
import Footer from "../components/Home/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ToTopBtn from "../components/toTopBtn";

function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Digital Transformation Fundamentals",
      duration: "8 Weeks",
      level: "Beginner",
      description: "Learn the core principles of digital transformation and how to implement them in various industries.",
      features: ["Industry case studies", "Hands-on projects", "Expert mentorship"]
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      duration: "12 Weeks",
      level: "Intermediate",
      description: "Comprehensive course covering AI fundamentals, machine learning algorithms, and real-world applications.",
      features: ["Python programming", "TensorFlow/PyTorch", "Project deployment"]
    },
    {
      id: 3,
      title: "Engineering Consulting Mastery",
      duration: "10 Weeks",
      level: "Advanced",
      description: "Advanced techniques in engineering consulting, project management, and client relations.",
      features: ["Case studies", "Client simulation", "Industry tools"]
    }
  ];

  const benefits = [
    {
      icon: "🎓",
      title: "Industry-Recognized Certification",
      description: "Get certified with credentials recognized by leading tech companies."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of practical experience."
    },
    {
      icon: "💼",
      title: "Career Support",
      description: "Get job placement assistance and career guidance upon completion."
    },
    {
      icon: "🔄",
      title: "Flexible Learning",
      description: "Study at your own pace with both online and in-person options available."
    }
  ];

  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"Prices"} />
      <NavBar />
      <PricingComps />
      <Solutions />
      <Newslettersection />
      <Footer />

        </main>
  );
}
export default PricingPage;

