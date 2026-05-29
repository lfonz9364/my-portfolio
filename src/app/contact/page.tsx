import { ContactSection } from "@/components/organisms/ContactSection";
import { PageLayout } from "@/components/templates/PageLayout";
import { getContactSection } from "@/lib/contentful-queries";

const ContactPage = async () => {
  const contact = await getContactSection();

  return (
    <PageLayout>{contact && <ContactSection contact={contact} />}</PageLayout>
  );
};

export default ContactPage;
