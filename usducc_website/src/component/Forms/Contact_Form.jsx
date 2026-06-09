import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="c-name">Name</label>
        <input id="c-name" name="name" type="text" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="c-phone">Phone Number</label>
        <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" name="message" value={form.message} onChange={handleChange} required rows={6} />
      </div>
      <div className="form-submit">
        <button type="submit" className="btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
