import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have questions or need assistance? Reach out to us for a fast and efficient response. Our team is ready to help—let’s streamline your onboarding!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
