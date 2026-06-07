import hero from "../assets/scale_hero.jpg"
import scale1 from "../assets/scale_page1.jpg"
import scale2 from "../assets/scale_page2.jpg"

function Scale() {
  return (
    <div className="scale-section">
      <div className="scale-hero-wrapper">
        <img src={hero} className="scale-hero reveal-scale" alt="Scale hero" />
        <h1 className="reveal">Scale Up<br />Your Business</h1>
      </div>

      {/* Resources split */}
      <div className="scale-resources">
        <p className="reveal">
          <strong>USDUCC</strong> is honored to participate in this program
          as a resource partner, working to ensure underserved small
          businesses, including businesses run by women, people of color,
          people with disabilities, and veterans, as well as businesses
          in low-to-moderate-wealth, rural, or disaster-impacted
          communities, are ready to access this funding. This work will
          include:
        </p>
        <div className="scale-cards-grid">
          <div className="scale-card reveal-right"><p>Raising awareness of funding opportunities.</p></div>
          <div className="scale-card reveal-right"><p>Providing one-on-one coaching to help business owners navigate the loan process.</p></div>
          <div className="scale-card reveal-right"><p>Providing one-on-one coaching and training on financial, legal, and accounting topics.</p></div>
          <div className="scale-card reveal-right"><p>Preparing loan applications.</p></div>
          <div className="scale-card reveal-right"><p>Determining what financing products are the best fit.</p></div>
        </div>
      </div>

      {/* CTA */}
      <a href="https://calosba.ca.gov/scale" target="_blank" rel="noreferrer">
        I Want to Scale
      </a>

      {/* More on Scale */}
      <div className="more-scale">
        <h2 className="more-scale-heading">More on SCALE</h2>
        <div className="more-scale-images">
          <img src={scale1} alt="Scale resource 1" className="reveal-scale"/>
          <img src={scale2} alt="Scale resource 2" className="reveal-scale"/>
        </div>
        <div className="more-scale-text">
          <p className="reveal">
            Funding for this $25.3 million Program comes from the U.S.
            Treasury's State Small Business Credit Initiative (SSBCI),
            which was created by the U.S. Congress in 2010 and
            reauthorized through the American Rescue Plan Act of 2021...
          </p>
          <p className="reveal">
            This project is being supported, in whole or in part, by
            a subaward made under federal award number SSBCI-21031-0018
            awarded to the California Office of the Small Business
            Advocate (CalOSBA) by the U.S. Department of the Treasury.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Scale;