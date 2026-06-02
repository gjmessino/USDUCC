import { useState } from "react";

function PartnershipInquiry() {
  const [form, setForm] = useState({ company: "", email: "", phone: "", reason: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership inquiry submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="p-company">Company Name</label>
        <input id="p-company" name="company" type="text" value={form.company} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="p-email">Email Address</label>
        <input id="p-email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="p-phone">Phone Number</label>
        <input id="p-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="p-reason">Reason for Interest</label>
        <textarea id="p-reason" name="reason" value={form.reason} onChange={handleChange} required rows={4} />
      </div>
      <div className="form-submit">
        <button type="submit" className="btn-primary">Submit Inquiry</button>
      </div>
    </form>
  );
}

export default PartnershipInquiry;
