import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Verseo",
    category: "AI Content Platform",
    tools: "Framer, React, TypeScript, Tailwind CSS",
    image: `${import.meta.env.BASE_URL}images/projects/p1.png`,
    link: "https://adyber-p1.framer.website/",
  },
  {
    title: "Adyber",
    category: "Software Agency Website",
    tools: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
    image: `${import.meta.env.BASE_URL}images/projects/p2.png`,
    link: "https://www.adyber.com/",
  },
  {
    title: "Angel's World School",
    category: "Educational Website",
    tools: "WordPress, PHP, Custom CSS, SEO",
    image: `${import.meta.env.BASE_URL}images/projects/p3.png`,
    link: "https://www.angelworldschool.com/",
  },
  {
    title: "Ristorante",
    category: "Restaurant Website",
    tools: "Framer, React, Motion, Custom Styling",
    image: `${import.meta.env.BASE_URL}images/projects/p4.png`,
    link: "https://ristorante.framer.website/",
  },
  {
    title: "Titan Fit",
    category: "Fitness & Gym Website",
    tools: "React.js, JavaScript, Vite, CSS",
    image: `${import.meta.env.BASE_URL}images/projects/p5.png`,
    link: "https://aiwithnaitik.github.io/gym_website_1/",
  },
  {
    title: "Ecom",
    category: "E-Commerce Website",
    tools: "Framer, React, TypeScript, Responsive Web Design",
    image: `${import.meta.env.BASE_URL}images/projects/p6.png`,
    link: "https://ecom-template.framer.ai/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;