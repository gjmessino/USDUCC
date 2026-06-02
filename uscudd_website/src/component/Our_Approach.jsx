import our_approach1 from "../assets/our_approach1.jpg"
import our_approach2 from "../assets/our_approach2.jpg"

function Our_Approach() {
    return (
        <div className="approach-section">
            <div className="approach-layout">
                <h1 className="reveal">Our Approach</h1>
                <img src={our_approach1} alt="our approach 1" className="approach-image"/>
                <img src={our_approach2} alt="our approach 2" className="approach-image"/>
                <div>
                    <div className="appraoach-cards">
                        <p>Research and Analysis</p>
                        <p>Collecting and analyzing data on the impact
                            of diaspora and immigrant-owned businesses
                            on local and national economies</p>
                    </div>
                    <div className="appraoach-cards">
                        <p>Policy and Advocacy</p>
                        <p>Providing detailed policy analysis relevant
                            to diaspora and immigrant business owners</p>
                    </div>
                    <div className="appraoach-cards">
                        <p>Business Support and Development</p>
                        <p>Supporting business formation and legal
                            structure navigation</p>
                    </div>
                    <div className="appraoach-cards">
                        <p>Network and Community Building</p>
                        <p>Facilitating connections between diaspora
                            and immigrant entrepreneurs and
                            established business networks</p>
                    </div>
                    <div className="appraoach-cards">
                        <p>Global Engagement</p>
                        <p>Building relationships with chambers of
                            commerce and business organizations
                            worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our_Approach;