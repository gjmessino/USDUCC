import ContactForm from "../component/Forms/Contact_Form.jsx";
import contactImg from "../assets/contact.jpg";

function ContactPage() {
  return (
    <main>
      <div className="contact-section">
        <div className="contact-bg">
          <img src={contactImg} alt="" aria-hidden="true" />
        </div>
        <div className="contact-form-panel">
          <h1 className="reveal">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
