"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const pricingPlans = {
    monthly: {
      Starter: 79,
      Growth: 199,
      Enterprise: 499
    },
    yearly: {
      Starter: 799,
      Growth: 1999,
      Enterprise: 4999
    }
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple, Transparent Pricing"
          paragraph="Select the plan that aligns with your growth goals. OnboardFlow AI offers AI-driven onboarding customization for user retention at unbeatable early adopter rates."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly(save 20%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price={(isMonthly ? pricingPlans.monthly.Starter : pricingPlans.yearly.Starter).toString()}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for startups looking to optimize onboarding with AI essentials."
          >
            <OfferList text="AI-Driven Onboarding Paths" status="active" />
            <OfferList text="Basic Analytics" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Single Project Support" status="active" />
            <OfferList text="Custom Integrations" status="inactive" />
            <OfferList text="Dedicated Account Manager" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Growth"
            price={(isMonthly ? pricingPlans.monthly.Growth : pricingPlans.yearly.Growth).toString()}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="For growing businesses needing advanced onboarding customization."
          >
            <OfferList text="All Starter Features" status="active" />
            <OfferList text="Unlimited Projects" status="active" />
            <OfferList text="Advanced Analytics" status="active" />
            <OfferList text="Custom Integrations" status="active" />
            <OfferList text="Priority Support" status="active" />
            <OfferList text="Dedicated Account Manager" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price={(isMonthly ? pricingPlans.monthly.Enterprise : pricingPlans.yearly.Enterprise).toString()}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Tailored for large teams requiring full-scale onboarding solutions."
          >
            <OfferList text="All Growth Features" status="active" />
            <OfferList text="AI Customization Suite" status="active" />
            <OfferList text="Premium Integrations" status="active" />
            <OfferList text="24/7 Priority Support" status="active" />
            <OfferList text="Dedicated Account Manager" status="active" />
            <OfferList text="Exclusive Early Adopter Perks" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;