function Donation_Form() {
    return (
        <div>
            <h1>Donate</h1>
            <input type = "text">Name</input>
            <input type = "number">Amount</input>
            <input type = "text">Payment Type</input>
            <input type = "number">Card Number</input>
            <input type='date'>Expiration Date</input>
            <input type = "number">CVV</input>
            <button>Submit</button>
        </div>
    )
}

export default Donation_Form;