import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="OnboardFlow AI automates and personalizes SaaS user onboarding with AI-driven workflows, reducing churn, boosting engagement, and increasing retention—seamlessly guiding users to success."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
