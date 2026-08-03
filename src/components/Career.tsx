import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Full Stack Developer</h4>
                <h5>Adyber</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Founded Adyber and started building modern web and AI-driven products. Developed scalable applications using Next.js, Node.js, and integrated automation systems for real-world use cases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Scaling & Product Development</h4>
                <h5>Adyber</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Focused on scaling Adyber products, improving performance, and delivering advanced web solutions. Built AI-powered features, optimized systems, and handled production-level deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Working with Organizations</h4>
                <h5>Adyber</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Collaborating with organizations to build high-quality web platforms, AI solutions, and scalable systems. Delivering production-ready applications tailored to business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
