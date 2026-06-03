import DonationForm from "./Forms/Donation_Form";
import donateImg from "../assets/donate.jpg";

function Donations(){
    return (
        <div className="donation-section">
        <div className="donation-bg">
          <img src={donateImg} alt="" aria-hidden="true" />
        </div>
        <div className="donation-content">
          <h2 className="reveal">Donate</h2>
          <DonationForm />
        </div>
      </div>
    )
}

export default Donations;
