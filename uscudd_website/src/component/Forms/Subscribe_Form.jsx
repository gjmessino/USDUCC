import { useState } from "react";

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) return <p style={{ color: "white" }}>Thanks for subscribing!</p>;

  return (
    <div>
      <h3>Join our newsletter</h3>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter Email"
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
