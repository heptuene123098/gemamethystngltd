/*import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PricingAbout() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive curriculum designed to meet industry demands and 
              prepare you for the future of work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={course.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <i className="far fa-clock mr-2"></i>
                    <span>{course.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingAbout;*/