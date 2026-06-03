import MembershipIntake from "../component/Forms/Membership_Intake.jsx";
import DonationForm from "../component/Forms/Donation_Form.jsx";
import signupImg from "../assets/signup.jpg";
import PartnershipInquiry from "../component/Forms/Partnership_Inquiry.jsx";
import partnerImg from "../assets/partner_inquiry.jpg"

function GetInvolved() {
  return (
    <main>
      <div className="membership-section">
        <div className="membership-image">
          <img src={signupImg} alt="Become a member" />
        </div>
        <div className="membership-form-panel">
          <h1 className="reveal">Become a Member</h1>
          <MembershipIntake />
        </div>
      </div>

      <div className="donation-section">
        <div className="donation-bg">
          <img src={donateImg} alt="" aria-hidden="true" />
        </div>
        <div className="donation-content">
          <h2 className="reveal">Donate</h2>
          <DonationForm />
        </div>
      </div>
    </main>
  );
}

export default GetInvolved;
