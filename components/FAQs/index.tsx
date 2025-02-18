"use client";
// import Plus from "@/assets/images/icons8-plus-24.png";
// import Minus from "@/assets/images/icons8-minus-24.png";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const items = [
  {
    question: "What is OnboardFlow AI?",
    answer:
      "OnboardFlow AI is an AI-powered platform designed to automate and optimize customer onboarding, increasing activation rates and user retention effortlessly.",
  },
  {
    question: "How does OnboardFlow AI improve customer onboarding?",
    answer:
      "OnboardFlow AI leverages AI-driven workflows, dynamic tutorials, and personalized onboarding sequences to guide users seamlessly through your product.",
  },
  {
    question: "Can I integrate OnboardFlow AI with my existing tools?",
    answer:
      "Absolutely! OnboardFlow AI integrates seamlessly with your CRM, helpdesk, and analytics platforms for a frictionless experience.",
  },
  {
    question: "Who benefits the most from OnboardFlow AI?",
    answer:
      "SaaS businesses, product teams, and customer success managers looking to increase user engagement and retention through automated onboarding.",
  },
  {
    question: "Can I fully customize the onboarding flows?",
    answer:
      "Yes! Create personalized, AI-powered onboarding journeys tailored to specific user behaviors and segments without any coding knowledge.",
  },
  {
    question: "Do I need technical skills to use OnboardFlow AI?",
    answer:
      "Not at all! OnboardFlow AI features a no-code drag-and-drop interface, making it accessible for teams of all backgrounds.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up for early access today and be among the first to revolutionize your onboarding process with AI-driven automation.",
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  
  return (
    <div className={`py-4 border-b ${borderColor} cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center justify-between">
        <span className={`text-lg font-semibold ${textColor}`}>{question}</span>
        <Image src={isOpen ? "➖": "➕" } alt={isOpen ? "Collapse" : "Expand"} className="w-4 h-4" />
      </div>
      {isOpen && <p className="mt-3 text-gray-600 dark:text-gray-400">{answer}</p>}
    </div>
  );
};

export const FAQs = () => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-700";
  
  return (
    <div id="faq" className={`${bgColor} py-20 px-5`}>
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className={`text-4xl font-bold ${headingColor}`}>Frequently Asked Questions</h2>
        <p className={`mt-4 text-lg ${subTextColor}`}>Got questions? We have answers! Learn how OnboardFlow AI can revolutionize your customer onboarding experience.</p>
        <div className="mt-12">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
