import Membership_Intake from "../component/Forms/Membership_Intake.jsx"
import Donation_Form from "../component/Forms/Donation_Form.jsx"

function Get_Involved() {
    return (
        <div>
            <img src="../assets/signup.jpg"/>
            <Membership_Intake/>
            <Donation_Form/>
        </div>
    )
}

export default Get_Involved;