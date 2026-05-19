function Membership_Intake() {
    return(
        <div>
            <h1>Want to Become a Member</h1>
            <input type = "text">Given Name</input>
            <input type = "text">Family Name</input>
            <input type = "email">Email Address</input>
            <input type = "date">Date of Birth</input>
            <input type = "tel">Phone Number</input>
            <input type = "text">Country of Origin</input>
            <label for = "language">Preferred Language</label>
            <select>
                <option>English</option>
                <option>Spanish</option>
            </select>
            <button>Continue</button>
        </div>
    )
}

export default Membership_Intake();