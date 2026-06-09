import { Link } from "react-router-dom";
import scale_logo from "../assets/scale-logo.png"

function Find_Help() {
    return (
        <div className="findHelp-section">
            <h1 className="reveal">Resources for Your Small Business</h1>
            <div className="california-section">
                <img src ={scale_logo}/>
                <p className="reveal">
                    SCALE: Success, Capital Access and Leadership
                    for Entrepreneurs was created by the California
                    Office of the Small Business Advocate (CalOSBA)
                    to help California’s diverse small businesses
                    across the state access more resources to start
                    up, grow, and create jobs.
                </p>
            </div>
            <div className="find-help-link">
                <Link to="/scale">Learn More</Link>
            </div>
            <div className="non-california-section">
                <h2 className="reveal">Find Support in Your Area</h2>
                <div className="support-cards-grid">
                    <div className="support-card">
                        <h3>Legal Assistance</h3>
                        <p>
                            Description...
                            ...
                            ...
                            ...
                            ...
                        </p>
                    </div>
                    <div className="support-card">
                        <h3>Financial Management</h3>
                        <p>
                            Description...
                            ...
                            ...
                            ...
                            ...
                        </p>
                    </div>
                    <div className="support-card">
                        <h3>Funding</h3>
                        <p>
                            Description...
                            ...
                            ...
                            ...
                            ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find_Help;