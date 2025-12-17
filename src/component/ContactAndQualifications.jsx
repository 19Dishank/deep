import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./ContactAndQualifications.css";

const ContactAndQualifications = () => {
  const qualifications = [
    {
      title: "SSC",
      place: "Swaminarayan School, Surat",
      time: "2019",
      status: "Completed",
    },
    {
      title: "HSC",
      place: "Swaminarayan School, Surat",
      time: "2021",
      status: "Completed",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      place: "Vivekanand College - VNSGU , Surat",
      time: "2020 – 2024",
      status: "Completed",
    },
    {
      title: "Master of Computer Applications (MCA)",
      place: "Sarvajanik University, Surat",
      time: "2024 – Present",
      status: "Pursuing",
    },
    
  ];

  const contactInfo = [
    {
      // type: "Email",
      value: "deeppatel8176@gmail.com",
      icon: MdEmail,
      link: "mailto:deeppatel8176@gmail.com",
    },
    {
      // type: "LinkedIn",
      value: "Deep Patel",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/deep-patel-64a166369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    // {
    //   // type: "GitHub",
    //   value: "github.com/dishankpatel",
    //   icon: FaGithub,
    //   link: "https://github.com/dishankpatel",
    // },
    {
      // type: "Phone",
      value: "+91 9824908176",
      icon: MdPhone,
      link: "tel:+919824908176",
    },
  ];

  return (
    <section className="contact-qualifications-section">
      <div className="section-container">

        

        {/* RIGHT — CONTACT */}
        <div className="contact-block">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>

          <div className="contact-list">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={i}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon-wrapper">
                    <Icon className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <span className="contact-type">{c.type}</span>
                    <span className="contact-value">{c.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        {/* LEFT — QUALIFICATIONS */}
        <div className="timeline-block">
          <h2 className="section-title">Qualifications</h2>

          <div className="timeline">
            {qualifications.map((q, index) => (
              <div className="timeline-item" key={index}>
                <span className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{q.title}</h3>
                  <span className="timeline-status">{q.status}</span>
                  <p className="timeline-place">{q.place}</p>
                  <p className="timeline-time">{q.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactAndQualifications;
