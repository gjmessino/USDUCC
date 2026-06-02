import { useState } from "react";

function Membership_Intake() {
    const [form,setForm] = useState({name: "", amount: "", payment_method: "", card: "", expiration:"", cvv:""});
    const handleChange = (e) => setForm({...form, [e.target.name]: [e.target.value]});
    const handleSubmit = (e) =>
        e.preventDefault();
        console.log("Donation form submitted:", form)
    return(
        <div className = "form-group" className='donation-section'>
            <h1 className="reveal">Become a Member</h1>
            <div className='donation-bg'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />

                    <label htmlFor="amount">Amount</label>
                    <input id="amount" name="amount" type="number" value={form.email} onChange={handleChange} required />

                    <label htmlFor="payment_method">Payment Method</label>
                    <input id ="payment_method" name="payment_method" type="text" value={form.payment_method} onChange={handleChange} />

                    <label htmlFor="card">Card Number</label>
                    <input id="card" name="card" type="number" value={form.card} onChange={handleSubmit} required/>

                    <label htmlFor="expiration">Expiration Date</label>
                    <input id="expiration" name="expiration" type="date" value={form.expiration} onChange={handleSubmit} required/>

                    <label htmlFor="cvv">cvv</label>
                    <input id="cvv" name="cvv" type="number" value={form.cvv} onChange={handleSubmit} required/>

                    <button type="submit" className="btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Membership_Intake;