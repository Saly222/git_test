import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4 text-white">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold text-lg focus:outline-none"
      >
        {question}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Answer */}
      {isOpen && (
        <p className="mt-2 text-gray-700 dark:text-gray-300">{answer}</p>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "How do I track my workouts?",
      answer:
        "You can track your workouts using our HealthQuest app dashboard.",
    },
    {
      question: "Can I set goals?",
      answer: "Yes! You can set fitness goals and monitor your progress.",
    },
    {
      question: "Is the app free?",
      answer:
        "Yes, basic features are free. Premium features require a subscription.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
