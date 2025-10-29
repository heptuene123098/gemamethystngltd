function PricingServices() {
  return (
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers through GemAcademy. 
            Take the first step towards becoming a tech leader today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              View All Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
  );
}

export default PricingServices;
