import approach1 from "../assets/our_approach1.jpg";
import approach2 from "../assets/our_approach2.jpg";

const approaches = [
  { title: "Research and Analysis", desc: "Collecting and analyzing data on the impact of diaspora and immigrant-owned businesses on local and national economies." },
  { title: "Policy and Advocacy", desc: "Providing detailed policy analysis relevant to diaspora and immigrant business owners." },
  { title: "Business Support and Development", desc: "Supporting business formation and legal structure navigation." },
  { title: "Network and Community Building", desc: "Facilitating connections between diaspora and immigrant entrepreneurs and established business networks." },
  { title: "Global Engagement", desc: "Building relationships with chambers of commerce and business organizations worldwide." },
];

function OurApproach() {
  return (
    <div className="approach-section">
      <div className="container">
        <h2 className="reveal">Our Approach</h2>
        <div className="approach-layout">
          <div className="approach-images reveal-left">
            <img src={approach1} alt="Our approach" />
            <img src={approach2} alt="Our approach" />
          </div>
          <div className="approach-cards reveal-group">
            {approaches.map((item) => (
              <div key={item.title} className="approach-card reveal">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurApproach;
