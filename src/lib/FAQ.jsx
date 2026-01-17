import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, browse products, add your desired items to the cart, and proceed to checkout. Follow the steps to enter shipping details and complete payment securely.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, mobile banking, and secure online payment gateways. Available payment options may vary by location.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 2–5 business days depending on your location. During promotions or holidays, delivery times may be slightly longer.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, you can return or exchange products within 7 days of delivery, provided the item is unused and in original packaging.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our support team via email, phone, or live chat. Visit the Contact Us page for detailed support options.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-300">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Find answers to common questions about shopping with us
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg shadow-sm border-2 border-gray-800 text-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
