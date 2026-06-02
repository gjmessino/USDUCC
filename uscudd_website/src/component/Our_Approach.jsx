import our_approach1 from "../assets/our_approach1.jpg"
import our_approach2 from "../assets/our_approach2.jpg"

function Our_Approach() {
    return (
        <div className="approach-section">
            <h1 className="reveal">Our Approach</h1>
            <div className="approach-images">
                <img src={our_approach1} alt="our approach 1"/>
                <img src={our_approach2} alt="our approach 2"/>
            </div>
            <div className="approach-layout">
                <div className='approach-cards'>
                    <div div className="approach-card">
                        <h3>Research and Analysis</h3>
                        <p>Collecting and analyzing data on the impact
                            of diaspora and immigrant-owned businesses
                            on local and national economies</p>
                    </div>
                    <div div className="approach-card">
                        <h3>Policy and Advocacy</h3>
                        <p>Providing detailed policy analysis relevant
                            to diaspora and immigrant business owners</p>
                    </div>
                    <div div className="approach-card">
                        <h3>Business Support and Development</h3>
                        <p>Supporting business formation and legal
                            structure navigation</p>
                    </div>
                    <div div className="approach-card">
                        <h3>Network and Community Building</h3>
                        <p>Facilitating connections between diaspora
                            and immigrant entrepreneurs and
                            established business networks</p>
                    </div>
                    <div div className="approach-card">
                        <h3>Global Engagement</h3>
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