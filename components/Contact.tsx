import { ContactForm } from "./ContactForm";

function Contact() {
  return (
    <div className="flex flex-col items-center mt-16">
      <p className="font-tertiary text-lg md:text-xl lg:text-4xl font-semibold text-center">
        C
        <span className="underline underline-offset-12 decoration-primary">
          onta
        </span>
        ct
      </p>
      <ContactForm />
    </div>
  );
}

export default Contact;
