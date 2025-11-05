import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Subhero from "../components/headinghero";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/Home/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ToTopBtn from "../components/toTopBtn";

function WaitlistPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Waitlist form submitted:", formData);
      
      // Show success message
      alert("🎉 Thank you for joining our waitlist! We'll notify you as soon as GemAcademy launches with exclusive early access benefits.");
      
      // Redirect back to GemAcademy page
      navigate("/gemacademy");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"Join The Waitlist"} />
      <NavBar />
      
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 wide:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate("/gemacademy")}
            className="flex items-center text-gray-600 hover:text-webpurple mb-8 transition-colors duration-300 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="ml-2">Back to GemAcademy</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl wide:text-5xl font-bold text-gray-900 mb-4">
              Join <span className="text-webpurple">GemAcademy</span>&apos;s Waitlist
            </h1>
            <p className="text-xl wide:text-2xl text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience our innovative learning platform and get exclusive early access benefits
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 wide:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Early Access
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below to join our exclusive waitlist and be notified when we launch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your primary interest</option>
                      <option value="skill-development">Skill Development Tracks</option>
                      <option value="career-development">Career Development Tracks</option>
                      <option value="live-projects">Live Projects & Industry Challenges</option>
                      <option value="mentorship">Mentorship & Coaching</option>
                      <option value="events">Events & Hackathons</option>
                      <option value="certification">Certification & Recognition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent transition-all duration-300"
                      placeholder="Tell us what you're excited to learn, your career goals, or any specific questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-webpurple hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Joining Waitlist...
                      </>
                    ) : (
                      "Join Waitlist & Get Early Access"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-webpurple to-purple-700 rounded-2xl text-white p-8 wide:p-10 h-fit sticky top-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Exclusive Waitlist Benefits
                  </h3>
                  <p className="text-purple-100 opacity-90">
                    Be first in line for these special perks
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "Early access to course enrollment (before public launch)",
                    "Special launch discounts up to 30%",
                    "Priority mentorship matching with industry experts",
                    "Access to exclusive community and networking events",
                    "Personalized learning path recommendations",
                    "Free access to introductory courses"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-400 text-xl flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-purple-100">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
                  <p className="text-sm text-purple-100 text-center">
                    <strong>Limited spots available</strong> for early access participants
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What is GemAcademy?
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                GemAcademy is our innovative learning platform designed to bridge the gap between 
                traditional education and industry needs. We offer hands-on training, real-world projects, 
                and personalized mentorship to help you build in-demand skills and advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default WaitlistPage;