import OurApproach from "../component/Our_Approach.jsx";
import aboutImg from "../assets/about_us.jpg";

function AboutUs() {
  return (
    <main>
      <div className="about-top">
        <div className="container">
          <div className="about-top-grid">
            <div className="about-top-text">
              <h1 className="reveal-left">About Us</h1>
              <p className="reveal-left">
                The United States Diaspora United Chamber of Commerce incubates
                small businesses founded by members of the immigrant diaspora.
                By addressing documented gaps in support systems for Diaspora
                and immigrant entrepreneurs, USDUCC develops, supports, and
                advocates for entrepreneurial ventures so they can thrive and
                become generationally sustaining, regardless of national origin,
                sex, religion, or age of the owner.
              </p>
              <p className="reveal-left">
                We embody a strong mission to uplift and empower diaspora
                business owners, fostering an inclusive economic environment.
                By welcoming diverse small businesses, chambers of commerce,
                and corporations that share a commitment to social
                responsibility, we create a vibrant community that supports
                economic growth and champions social equity.
              </p>
            </div>
            <div className="about-top-image reveal-right">
              <img src={aboutImg} alt="About USDUCC" />
            </div>
          </div>
        </div>
      </div>
      <OurApproach />
    </main>
  );
}

export default AboutUs;
