"use client"

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const faqItems = [
  {
    question: "What exactly is OnboardFlow AI?",
    answer: "OnboardFlow AI is an AI-driven SaaS solution that automates, personalizes, and optimizes the onboarding process for SaaS products, aiming to increase user retention and engagement."
  },
  {
    question: "How does OnboardFlow AI personalize onboarding?",
    answer: "By analyzing user behavior and data, OnboardFlow AI crafts unique onboarding paths for each user, ensuring relevance and increasing the likelihood of product adoption."
  },
  {
    question: "Can I integrate OnboardFlow AI with my existing systems?",
    answer: "Yes, OnboardFlow AI is designed with seamless integration capabilities to work with your current tech stack, including CRM systems, analytics tools, and more."
  },
  {
    question: "What kind of support does OnboardFlow AI offer?",
    answer: "We provide email support for all plans, with priority and 24/7 support available in higher tiers. Higher plans also include a dedicated account manager."
  },
  {
    question: "Is there a trial period for OnboardFlow AI?",
    answer: "While there isn't a traditional free trial, by pre-ordering, you get lifetime access to core features at our early adopter pricing, which includes exclusive perks."
  },
  {
    question: "How does OnboardFlow AI help in reducing churn?",
    answer: "By personalizing the user experience from the start, OnboardFlow AI reduces the friction users might encounter, thereby decreasing churn rates and improving customer satisfaction."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph="Discover how OnboardFlow AI can revolutionize your onboarding process with these common questions and answers."
          mb="44px"
        />
        
        <div className="mb-16 md:mb-20 lg:mb-28">
          {faqItems.map((item, index) => (
            <Accordion key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-body-color/[.15] dark:border-white/[.15]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-xl font-bold text-body-color">{question}</span>
        <span className="text-primary">
          {isOpen ? (
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </button>
      {isOpen && 
        <div className="py-5 text-base text-body-color">
          <p>{answer}</p>
        </div>
      }
    </div>
  );
};

export default FAQSection;