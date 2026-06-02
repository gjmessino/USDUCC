import { useState } from "react";

function DonationForm() {
  const [form, setForm] = useState({ name: "", amount: "", payment_method: "", card: "", expiration: "", cvv: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="d-name">Name</label>
          <input id="d-name" name="name" type="text" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="d-card">Card Number</label>
          <input id="d-card" name="card" type="text" maxLength={19} value={form.card} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="d-amount">Amount ($)</label>
          <input id="d-amount" name="amount" type="number" min="1" value={form.amount} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="d-expiration">Expiration Date</label>
          <input id="d-expiration" name="expiration" type="date" value={form.expiration} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="d-payment">Payment Method</label>
          <select id="d-payment" name="payment_method" value={form.payment_method} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">Amex</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="d-cvv">CVV</label>
          <input id="d-cvv" name="cvv" type="text" maxLength={4} value={form.cvv} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-submit">
        <button type="submit" className="btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default DonationForm;
