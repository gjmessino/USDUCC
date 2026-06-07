function Find_Help() {
    return (
        <div className="findHelp-section">
            <div className="california-section">
                <a href="https://calosba.ca.gov/">
                    <h2>CalOSBA</h2>
                    <p>The California Office of the Small Business 
                        Advocate supports economic growth by providing 
                        resources and support to the state’s 4.3 million 
                        small businesses, including non-profits and startups.
                        Their mission is to help all California small 
                        business-owners find and navigate resources, 
                        programs and regulations so they can start, manage, 
                        grow, become more resilient, and thrive.</p>
                </a>
            </div>
            <div className="non-california-section">
                <h2>Find Support in Your Area</h2>
                <div className="support-card">
                    <h3>Legal Assistance</h3>
                </div>
                <div className="support-card">
                    <h3>Financial Management</h3>
                </div>
                <div className="support-card">
                    <h3>Funding</h3>
                </div>
            </div>
        </div>
    )
}

export default Find_Help;