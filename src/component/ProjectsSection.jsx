import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectsSection.css";

const projects = [
  {
    title: "Homies - Room booking System",
    description:
      "A hotel management system providing room booking, payment handling, user reviews, and inquiries, with an admin panel for managing rooms, bookings, feedback, and content. Built with Laravel MVC and MySQL.",
    tech: ["HTML", "CSS", "PHP - Laravel", "MySQL"],
    github: null,
    live: null,
  },
  {
    title: "Aggre-Edge",
    description:
      "A mobile based agriculture platform that enables farmers, customers and service providers to connect seamlessly.",
    tech: ["Flutter", "Dart", "MySQL"],
    github: null,
    live: null,
  },
  {
    title: "Foodie - Online Food Service Website",
    description:
      "A web-based food ordering system featuring menu browsing, order placement, and payments, with an admin panel for managing orders, users, and menus using secure authentication and a user-friendly UI.",
    tech: ["ASP.NET", "C#", "SQL Server"],
    github: null,
    live: null,
  },
 
  
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            A few projects I’ve built on my own while learning and improving my development skills.
          </p>
        </div>

        {/* Cards */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
