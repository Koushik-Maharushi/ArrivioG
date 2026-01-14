import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is included in the monthly rent?",
    answer: "Everything you need to live comfortably. Your rent covers a fully furnished private suite, weekly cleaning, all utilities (high-speed WiFi, electricity, water, heating), and access to all community amenities and events."
  },
  {
    question: "How long are the lease terms?",
    answer: "We offer flexible living arrangements to suit your lifestyle. Memberships start at a minimum of 3 months, but most of our members choose to stay for 12 months or longer to fully immerse themselves in the community."
  },
  {
    question: "Is ARRIVIO pet-friendly?",
    answer: "Yes, we love pets! Specific locations have designated pet-friendly floors and amenities. There is a small additional monthly fee for furry friends to cover deep cleaning services."
  },
  {
    question: "Can I transfer between locations?",
    answer: "Absolutely. One of the biggest perks of ARRIVIO is the ability to move seamlessly between our cities. As a member, you have priority access to transfer your lease to any of our other locations with just 30 days' notice."
  },
  {
    question: "Is there a deposit required?",
    answer: "We require a security deposit equivalent to one month's rent, which is fully refundable at the end of your stay, provided the space is returned in good condition."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-warmSand/50 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg md:text-xl font-heading font-medium transition-colors duration-300 ${isOpen ? 'text-forestGreen' : 'text-charcoal group-hover:text-forestGreen'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-forestGreen' : 'text-mutedGold'}`}>
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-charcoal/80 font-body leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  // FIX: -1 ensures no item is open by default
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="py-20 bg-softWhite" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-forestGreen mb-4">
            Common Questions
          </h2>
          <p className="text-charcoal/70 font-body text-lg">
            Everything you need to know about life at ARRIVIO.
          </p>
        </div>
        
        {/* Accordion Container */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-warmSand/30 p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;