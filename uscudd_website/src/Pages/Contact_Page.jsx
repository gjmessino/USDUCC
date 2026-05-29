import Contact_Form from "../component/Forms/Contact_Form.jsx"
import contact from "../assets/contact.jpg"

function Contact_Page() {
    return (
        <div>
            <img src={contact} alt = "contact"/>
            <Contact_Form/>
        </div>
    )
}

export default Contact_Page;