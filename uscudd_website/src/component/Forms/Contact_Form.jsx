import { useState } from "react";

function Contact_Form() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    // TODO: send form data to your backend or email service
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} />

        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact_Form;