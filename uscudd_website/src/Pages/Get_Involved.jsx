import MembershipIntake from "../component/Forms/Membership_Intake.jsx";
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
      <div className="partnership-section">
        <div className="partnership-bg">
          <img src={partnerImg} alt="" aria-hidden="true" />
        </div>
        <div className="partnership-content">
          <h1 className="reveal">Partner with Us</h1>
          <p className="section-intro reveal">
            Join our network of partners committed to supporting diaspora and
            immigrant entrepreneurs.
          </p>
          <PartnershipInquiry />
        </div>
      </div>
    </main>
  );
}

export default GetInvolved;
