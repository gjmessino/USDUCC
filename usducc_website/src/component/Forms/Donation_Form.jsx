/**
 * Donation payments require a PCI-compliant processor (e.g. Stripe, PayPal).
 * HubSpot forms are not designed to handle credit card data.
 *
 * TODO: Replace the placeholder below with your Stripe Payment Link or
 * a Stripe Elements / PayPal donate button.
 *
 * Quick option — Stripe Payment Link:
 *   1. Go to dashboard.stripe.com → Payment Links → Create link
 *   2. Set the amount as "customer chooses" (or fixed tiers)
 *   3. Paste the link URL below
 */

const STRIPE_PAYMENT_LINK = "https://donate.stripe.com/REPLACE_WITH_YOUR_LINK";

function DonationForm() {
  return (
    <div className="donation-cta">
      <p>
        Secure donations are processed via Stripe. Click the button below to
        choose your amount and complete your gift safely.
      </p>
      <a
        href={STRIPE_PAYMENT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Donate Now
      </a>
    </div>
  );
}

export default DonationForm;
