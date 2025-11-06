import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

function JoinUs() {
  const [activeTab, setActiveTab] = useState("careers");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: true
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  const careerPositions = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Lagos, Nigeria",
      description: "We're looking for a skilled Frontend Developer to join our team and help build amazing user experiences.",
      requirements: ["React", "JavaScript", "CSS", "TypeScript"]
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      description: "Create beautiful and intuitive designs for our digital products and platforms.",
      requirements: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Lagos, Nigeria",
      description: "Build scalable backend systems and APIs to power our applications.",
      requirements: ["Node.js", "Python", "MongoDB", "API Design"]
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Partnership",
      icon: "fa-code",
      description: "Collaborate with us on technology projects and innovative solutions."
    },
    {
      title: "Business Partnership",
      icon: "fa-handshake",
      description: "Join forces to create new business opportunities and expand market reach."
    },
    {
      title: "Community Partnership",
      icon: "fa-users",
      description: "Work together on community initiatives and social impact projects."
    }
  ];

  const benefits = [
    {
      icon: "fa-gem",
      title: "Growth Opportunities",
      description: "Continuous learning and professional development programs"
    },
    {
      icon: "fa-heart",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: "fa-bolt",
      title: "Flexible Work",
      description: "Remote work options and flexible working hours"
    },
    {
      icon: "fa-trophy",
      title: "Competitive Pay",
      description: "Attractive compensation packages and bonuses"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-[#232429] text-white py-20">
        <div className="container mx-auto px-6 tablet:px-10 text-center">
          <h1 
            className="text-4xl laptop:text-3xl tablet:text-2xl phoneL:text-xl font-bold mb-6"
            data-aos="fade-up"
          >
            Join Our Journey
          </h1>
          <p 
            className="text-xl laptop:text-lg tablet:text-base phoneL:text-sm text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Be part of something extraordinary. Help us shape the future of technology and innovation.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="bg-white shadow-sm sticky top-20 z-10">
        <div className="container mx-auto px-6 tablet:px-10">
          <div className="flex overflow-x-auto">
            {["careers", "partnership", "community"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "text-webpurple border-b-2 border-webpurple"
                    : "text-gray-600 hover:text-webpurple"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Careers Tab */}
      {activeTab === "careers" && (
        <div className="container mx-auto px-6 tablet:px-10 py-16">
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 
              className="text-3xl laptop:text-2xl tablet:text-xl font-bold text-center mb-12 text-gray-800"
              data-aos="fade-up"
            >
              Why Join Our Team?
            </h2>
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <i className={`fas ${benefit.icon} text-webpurple text-3xl mb-4`}></i>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 
              className="text-3xl laptop:text-2xl tablet:text-xl font-bold mb-12 text-gray-800"
              data-aos="fade-up"
            >
              Open Positions
            </h2>
            <div className="space-y-6">
              {careerPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-webpurple"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{position.title}</h3>
                      <div className="flex gap-4 mt-2">
                        <span className="text-sm text-gray-600">
                          <i className="fas fa-briefcase mr-1"></i>
                          {position.type}
                        </span>
                        <span className="text-sm text-gray-600">
                          <i className="fas fa-map-marker-alt mr-1"></i>
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <button className="bg-webpurple text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.requirements.map((req, reqIndex) => (
                      <span
                        key={reqIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 
              className="text-2xl font-bold mb-6 text-gray-800 text-center"
              data-aos="fade-up"
            >
              Apply Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                <div data-aos="fade-right">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div data-aos="fade-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                <div data-aos="fade-right">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div data-aos="fade-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {careerPositions.map((pos, index) => (
                      <option key={index} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div data-aos="fade-up">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                />
              </div>

              <div data-aos="fade-up">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                  placeholder="Tell us why you're interested in joining our team..."
                ></textarea>
              </div>

              <div data-aos="fade-up">
                <button
                  type="submit"
                  className="w-full bg-webpurple text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </section>
        </div>
      )}

      {/* Partnership Tab */}
      {activeTab === "partnership" && (
        <div className="container mx-auto px-6 tablet:px-10 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl laptop:text-2xl tablet:text-xl font-bold text-center mb-12 text-gray-800"
              data-aos="fade-up"
            >
              Partnership Opportunities
            </h2>
            
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8 mb-12">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <i className={`fas ${type.icon} text-webpurple text-3xl mb-4`}></i>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Interested in Partnering With Us?
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Send us a message and let's discuss how we can work together to achieve great things.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company/Organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent">
                  <option>Select Partnership Type</option>
                  <option>Technology Partnership</option>
                  <option>Business Partnership</option>
                  <option>Community Partnership</option>
                </select>
                <textarea
                  rows="5"
                  placeholder="Tell us about your partnership proposal..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-webpurple text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  Send Partnership Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Community Tab */}
      {activeTab === "community" && (
        <div className="container mx-auto px-6 tablet:px-10 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl laptop:text-2xl tablet:text-xl font-bold mb-6 text-gray-800"
              data-aos="fade-up"
            >
              Join Our Community
            </h2>
            <p 
              className="text-xl text-gray-600 mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Be part of our growing community of developers, designers, and tech enthusiasts.
            </p>

            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 mb-12">
              <div 
                className="bg-white p-8 rounded-lg shadow-md"
                data-aos="fade-right"
              >
                <i className="fas fa-users text-webpurple text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Events</h3>
                <p className="text-gray-600 mb-4">
                  Join our workshops, meetups, and networking events to connect with like-minded individuals.
                </p>
                <button className="bg-webpurple text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  View Events
                </button>
              </div>

              <div 
                className="bg-white p-8 rounded-lg shadow-md"
                data-aos="fade-left"
              >
                <i className="fas fa-graduation-cap text-webpurple text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Learning Resources</h3>
                <p className="text-gray-600 mb-4">
                  Access exclusive tutorials, courses, and learning materials to enhance your skills.
                </p>
                <button className="bg-webpurple text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Explore Resources
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Stay Connected</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to get updates on community events, new resources, and opportunities.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webpurple focus:border-transparent"
                />
                <button className="bg-webpurple text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JoinUs;