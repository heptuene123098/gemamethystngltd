import { useState } from "react";
import { contacData } from "../constants";

function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    const contactData = {
      name: formData.Name,
      email: formData.Email,
      subject: formData.Subject,
      message: formData.Message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setFormData({
          Name: "",
          Email: "",
          Subject: "",
          Message: "",
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 1500);
      } else {
        console.log("Error submitting form");
        setSubmitted(false);
      }
    } catch (error) {
      console.log("Error:", error);
      setSubmitted(false);
    }
  };

  return (
    <section className="contact-content flex overflow-hidden shadow-lg rounded-md tablet:flex-col phoneP:gap-7 bg-white">
      {/* Contact Form Section */}
      <div className="get-in-touch flex flex-col w-[50%] p-8 gap-6 laptop:w-[60%] tablet:w-full tablet:p-6 phoneL:p-4 phoneP:p-3">
        <h1 className="font-bold text-2xl leading-9 uppercase laptop:text-xl phoneL:text-lg phoneP:text-base phoneP:leading-6">
          Get in Touch
        </h1>

        {submitted && (
          <div className="bg-green-100 text-green-700 border border-green-400 px-4 py-3 rounded text-sm mb-4">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <form
          className="flex flex-col h-full gap-6 phoneL:gap-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* Name and Email - Stack on mobile */}
          <div className="name-email flex justify-between gap-4 phoneP:flex-col phoneP:gap-4">
            <input
              type="text"
              className="border-2 border-webpurple p-3 w-[48%] rounded-sm focus:outline-none focus:ring-2 focus:ring-webpurple/30 transition-all phoneL:placeholder:text-sm phoneL:h-12 phoneP:w-full phoneP:h-10 phoneP:p-2"
              placeholder="Your Name"
              required
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="border-2 border-webpurple p-3 w-[48%] rounded-sm focus:outline-none focus:ring-2 focus:ring-webpurple/30 transition-all phoneL:placeholder:text-sm phoneL:h-12 phoneP:w-full phoneP:h-10 phoneP:p-2"
              placeholder="Your Email"
              required
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>
          
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-webpurple p-3 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-webpurple/30 transition-all phoneL:placeholder:text-sm phoneL:h-12 phoneP:h-10 phoneP:p-2"
            required
            name="Subject"
            value={formData.Subject}
            onChange={handleInputChange}
          />
          
          <textarea
            placeholder="Your Message"
            required
            name="Message"
            className="border-2 border-webpurple p-3 w-full h-36 rounded-sm focus:outline-none focus:ring-2 focus:ring-webpurple/30 transition-all resize-none phoneL:placeholder:text-sm phoneL:h-28 phoneP:h-24 phoneP:p-2"
            value={formData.Message}
            onChange={handleInputChange}
          ></textarea>
          
          <button
            type="submit"
            className="p-3 w-fit bg-webpurple text-white font-medium rounded-sm hover:bg-webpurple/90 transition-colors phoneL:text-sm phoneL:px-4 phoneL:py-3 phoneP:w-full phoneP:text-base"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info flex flex-col items-center w-[50%] p-8 gap-8 bg-[#232429] text-white laptop:w-[40%] tablet:w-full tablet:p-6 phoneL:p-4 phoneP:p-3 phoneP:gap-6">
        <h1 className="font-bold text-2xl leading-9 uppercase laptop:text-xl phoneL:text-lg phoneP:text-base phoneP:leading-6 text-center">
          Contact Information
        </h1>
        
        <div className="contact-info-box flex flex-col gap-6 w-full laptop:gap-5 phoneP:gap-4">
          {contacData.map((item, index) => (
            <div
              key={index}
              className="contact-info-item flex gap-4 items-start phoneL:gap-3 phoneP:gap-2"
            >
              <div className="contact-icon flex-shrink-0">
                <i
                  className={`${item.icon} text-lg p-3 rounded-full text-white bg-[#393A3F] laptop:text-base phoneL:text-sm phoneL:p-2.5 phoneP:p-2 phoneP:text-xs`}
                ></i>
              </div>
              <div className="contact-text flex flex-col gap-1 min-w-0">
                <h2 className="text-base leading-6 text-webpurple font-bold capitalize laptop:text-sm phoneP:text-xs">
                  {item.title}
                </h2>
                <p className="text-base font-normal leading-6 text-white break-words laptop:text-sm phoneP:text-xs">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactContent;