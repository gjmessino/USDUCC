import { useState } from "react";

function MembershipIntake() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="m-name">Name</label>
        <input id="m-name" name="name" type="text" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="m-email">Email</label>
        <input id="m-email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="m-phone">Phone Number</label>
        <input id="m-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="m-company">Company</label>
        <input id="m-company" name="company" type="text" value={form.company} onChange={handleChange} />
      </div>
      <div className="form-submit">
        <button type="submit" className="btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default MembershipIntake;
