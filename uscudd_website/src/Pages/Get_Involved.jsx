import Membership_Intake from "../component/Forms/Membership_Intake.jsx"
import Donation_Form from "../component/Forms/Donation_Form.jsx"
import signup from "../assets/signup.jpg"
import membership from "../assets/membership.jpg"

function Get_Involved() {
    return (
        <div>
            <img src={signup}/>
            <Membership_Intake/>
            <img src={membership}></img>
            <Donation_Form/>
        </div>
    )
}

export default Get_Involved;