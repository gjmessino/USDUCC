import { useState } from "react";

function Membership_Intake() {
    const [form,setForm] = useState({name: "", email: "", phone: "", company: ""});
    const handleChange = (e) => setForm({...form, [e.target.name]: [e.target.value]});
    const handleSubmit = (e) =>
        e.preventDefault();
        console.log("Membership form submitted:", form)
    return(
        <div className = "container">
            <h1>Become a Member</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />

                <label htmlFor="phone">Phone Number</label>
                <input id ="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />

                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" value={form.company} onChange={handleSubmit} required/>

                <button type="submit" className="btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default Membership_Intake;