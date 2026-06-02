import { useState } from "react";

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // TODO: send to your email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
    setEmail("");
  };
  if (submitted) {
    return <p>Thanks for subscribing!</p>;
  }

  return (
    <div className="footer-newsletter">
      <h3>Join Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <label htmlFor="subscribe-email" style={{ display: "none" }}>Email address</label>
        <input
          id="subscribe-email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Subscribe</button>
      </form>
    </div>
  );
}

export default SubscribeForm;