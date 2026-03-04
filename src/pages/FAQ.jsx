import { FaGreaterThan } from "react-icons/fa";
import { useState } from "react";
import Button from '../components/Button'
import faqImage from "../assets/FaqImage.png"
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const faqs = [
    {
      question: "How far can I drive?",
      answer:
        "Our vehicles deliver 300 to 450 miles per charge depending on the model and driving conditions. Real-world range exceeds most competitors because we engineer for efficiency without compromise. Your actual distance varies with terrain, climate, and driving style.",
    },
    {
      question: "What about charging time?",
      answer:
        "Fast charging powers your vehicle to 80% in about 30 minutes depending on charger availability and battery condition.",
    },
    {
      question: "Can I customize everything?",
      answer:
        "Yes. You can customize performance options, interior finishes, technology packages, and exterior styling.",
    },
    {
      question: "What warranty do you offer?",
      answer:
        "All Luxivolt vehicles include an extended battery warranty and comprehensive vehicle coverage.",
    },
    {
      question: "How does maintenance work?",
      answer:
        "Electric vehicles require fewer moving parts, meaning lower servicing costs and fewer maintenance visits.",
    },
  ];

  return (
    <div>
    <section
      id="faq"
      className="min-h-screen pt-[72px] flex items-center justify-center"
    >
      <div className="w-full">
        <section className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6 gap-6">

          {/* HEADER */}
          <div className="flex flex-col gap-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
              FAQ SECTION
            </p>

            <p className="text-black">
              Everything you need to know about owning a Luxivolt Motors
              electric vehicle.
            </p>
          </div>

          {/* ACCORDION LIST */}
          <div className="flex flex-col gap-3 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-lg overflow-hidden text-left"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-4 font-bold hover:bg-gray-50 transition"
                >
                  <span>{faq.question}</span>

                     <div className="bg-gray-200 text-gray-400 rounded-full p-2 flex items-center justify-center">
                      <FaGreaterThan
                        className={`transition-transform duration-300 ${
                          openIndex === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                </button>

                {/* ANSWER */}
                {openIndex === index && (
                  <div className="px-4 pb-4 text-black">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="flex flex-col justify-center items-center gap-4 pt-4">
            <p className=" text-3xl sm:text-xl md:text-2xl font-bold">Need more answers?</p>              
              <p className="text-lg sm:text-xl md:text-sm">Our team is ready to discuss your specific questions and concerns.</p>             
              <Link to="/contact"><Button shape="pill" variant="outlineGreen">Contact us</Button></Link>                         
          </div>
        </section>
      </div>
            
    </section>
    <div className="relative z-0 mt-[39px]">
      <img
        src={faqImage}
        alt="faq"
        className="w-full object-cover object-center px-3 sm:px-8 
      min-h-[360px] md:min-h-[500px]"
      />
    </div>
</div>
       
  );
};

export default FAQ;