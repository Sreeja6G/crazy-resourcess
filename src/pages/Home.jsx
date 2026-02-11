import { useState, useEffect } from "react";
import Hero from "./Hero";
import Memes from "./Memes";
import Founders from "./Founders";

const gradientAnimation = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 8px 32px rgba(6, 182, 212, 0.15);
    }
    50% {
      box-shadow: 0 8px 32px rgba(6, 182, 212, 0.4), 0 0 40px rgba(236, 72, 153, 0.3);
    }
  }

  @keyframes colorShift {
    0% {
      border-color: rgba(6, 182, 212, 0.3);
    }
    50% {
      border-color: rgba(99, 102, 241, 0.5);
    }
    100% {
      border-color: rgba(6, 182, 212, 0.3);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

export default function Home({ setCurrentPage, setSelectedInternship }) {
  const [activeNav, setActiveNav] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById("home")?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger animations for visible elements
      const cards = document.querySelectorAll('[data-animate]');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          card.style.animation = "slideInUp 0.6s ease-out forwards, glow 3s ease-in-out infinite";
          card.style.borderColor = "rgba(99, 102, 241, 0.5)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = gradientAnimation;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(sectionId);
  };

  return (
    <div style={styles.container}>
      {/* Top Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>🚀 Crazy Resources</h1>
        </div>
        <div style={styles.navLinks}>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "home" ? styles.navLinkActive : {}),
            }}
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "opportunities" ? styles.navLinkActive : {}),
            }}
            onClick={() => scrollToSection("opportunities")}
          >
            Opportunities
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "about" ? styles.navLinkActive : {}),
            }}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "hackathons" ? styles.navLinkActive : {}),
            }}
            onClick={() => setCurrentPage("hackathons")}
          >
            Hackathons
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "internships" ? styles.navLinkActive : {}),
            }}
            onClick={() => setCurrentPage("internships")}
          >
            Internships
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "founders" ? styles.navLinkActive : {}),
            }}
            onClick={() => scrollToSection("founders")}
          >
            Founders
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "contact" ? styles.navLinkActive : {}),
            }}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          ...styles.heroSection,
          backgroundPosition: `${mousePos.x * 10}% ${mousePos.y * 10}%`,
        }}
      >
        <div style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`, transition: "transform 0.2s ease-out" }}>
          <Hero />
        </div>
      </section>

      {/* Fun Memes/Transition Section */}
      <section id="memes" style={styles.memesSection}>
        <h2 style={{fontSize: "36px", fontWeight: "bold", background: "linear-gradient(135deg, #06b6d4, #84cc16, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "30px"}}>Student Life 😂</h2>
        <div style={styles.memesGridSmall}>
          <div style={styles.memeSmall} data-animate>
            <p>📚 "Just 5 more minutes..."<br/><span style={{fontSize: "12px"}}>*4 hours later*</span></p>
          </div>
          <div style={styles.memeSmall} data-animate>
            <p>🎯 Why start today?<br/><span style={{fontSize: "12px"}}>Procrastination pro</span></p>
          </div>
          <div style={styles.memeSmall} data-animate>
            <p>🚀 Code works<br/><span style={{fontSize: "12px"}}>*No idea why* 🤷</span></p>
          </div>
          <div style={styles.memeSmall} data-animate>
            <p>☕ Coffee = Productivity<br/><span style={{fontSize: "12px"}}>Always works 💯</span></p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" style={styles.section}>
        <h2 style={styles.sectionTitle}>Opportunities at One Place 🎯</h2>
        <div style={styles.opportunitiesGrid}>
          <div 
            style={styles.opportunityCard} 
            data-animate
            onClick={() => {
              setSelectedInternship(null);
              setCurrentPage("internships");
            }}
            onMouseEnter={(e) => e.target.style.cursor = "pointer"}
          >
            <span style={styles.opportunityIcon}>💼</span>
            <h3>Internships</h3>
            <p>50 beginner-friendly internships for B-tech students - no prior experience needed</p>
          </div>
          <div 
            style={styles.opportunityCard} 
            data-animate
            onClick={() => setCurrentPage("hackathons")}
            onMouseEnter={(e) => e.target.style.cursor = "pointer"}
          >
            <span style={styles.opportunityIcon}>🏆</span>
            <h3>Hackathons</h3>
            <p>Compete, learn, and win amazing prizes with top companies</p>
          </div>
          <div style={styles.opportunityCard} data-animate>
            <span style={styles.opportunityIcon}>🔐</span>
            <h3>Cyber Security</h3>
            <p>Master cybersecurity with expert-led courses and certifications</p>
          </div>
          <div style={styles.opportunityCard} data-animate>
            <span style={styles.opportunityIcon}>🛣️</span>
            <h3>Programming Roadmaps</h3>
            <p>Structured learning paths for all programming languages</p>
          </div>
          <div style={styles.opportunityCard} data-animate>
            <span style={styles.opportunityIcon}>🤖</span>
            <h3>AI Tools</h3>
            <p>Explore and master AI/ML tools and technologies</p>
          </div>
          <div style={styles.opportunityCard} data-animate>
            <span style={styles.opportunityIcon}>🎓</span>
            <h3>1st Year Students</h3>
            <p>Special resources and guidance for first-year college students</p>
          </div>
          <div style={styles.opportunityCard} data-animate>
            <span style={styles.opportunityIcon}>🤝</span>
            <h3>Support System</h3>
            <p>Connect with mentors, peers, and get instant help</p>
          </div>
          <div style={styles.opportunityCard} data-animate>
            <span style={styles.opportunityIcon}>🎤</span>
            <h3>English Communication</h3>
            <p>Improve communication skills through expert webinars</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Crazy Resources 💡</h2>
        <div style={styles.aboutContent} data-animate>
          <p style={styles.aboutText}>
            We are a student-driven initiative to solve the biggest problem faced by students:
            <b> Missing out on opportunities!</b>
          </p>
          <p style={styles.aboutText}>
            Whether it's internships, hackathons, or learning resources, we've got it all in one place.
            No more scrolling through 10 different websites. Just one stop for everything! 🎉
          </p>
        </div>
      </section>

      {/* Our Aim Section */}
      <section id="aim" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Aim & Mission 🎯</h2>
        <div style={styles.aimGrid}>
          <div style={styles.aimCard} data-animate>
            <h3>📚 Empower Students</h3>
            <p>Give every student access to equal opportunities and resources</p>
          </div>
          <div style={styles.aimCard} data-animate>
            <h3>⏰ Never Miss Deadlines</h3>
            <p>Smart reminders ensure you never miss an internship or hackathon deadline</p>
          </div>
          <div style={styles.aimCard} data-animate>
            <h3>🌍 Build a Community</h3>
            <p>Connect students, founders, and mentors in one amazing community</p>
          </div>
        </div>
      </section>

      {/* Memes/Student Stories Section */}
      <section style={styles.section}>
        <Memes />
      </section>

      {/* Founders & Students Section */}
      <section id="founders" style={styles.section}>
        <Founders />
      </section>

      {/* Contact Us Section */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Get In Touch 📧</h2>
        <div style={styles.contactContent}>
          <p style={styles.contactText}>Have questions or want to collaborate?</p>
          <a href="mailto:hello@crazyresources.com" style={styles.contactBtn}>
            📧 Email Us
          </a>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>Twitter</a>
            <a href="#" style={styles.socialLink}>LinkedIn</a>
            <a href="#" style={styles.socialLink}>Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Crazy Resources. Built with ❤️ by Students, for Students</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "100%",
  },
  navbar: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 62, 0.95))",
    backdropFilter: "blur(10px)",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    zIndex: 100,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    margin: 0,
    fontSize: "28px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "30px",
    flex: 2,
    justifyContent: "flex-end",
  },
  navLink: {
    color: "#cbd5e1",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    paddingBottom: "5px",
    borderBottom: "2px solid transparent",
  },
  navLinkActive: {
    color: "#06b6d4",
    borderBottomColor: "#06b6d4",
  },
  heroSection: {
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.7), rgba(26, 26, 62, 0.7))",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    transition: "all 0.5s ease",
  },
  section: {
    padding: "70px 60px",
    textAlign: "center",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.7), rgba(26, 26, 62, 0.7))",
    borderTop: "1px solid rgba(6, 182, 212, 0.1)",
  },
  sectionTitle: {
    fontSize: "42px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #06b6d4, #84cc16, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "50px",
    textShadow: "none",
  },
  opportunitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  },
  opportunityCard: {
    padding: "40px 30px",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "15px",
    color: "#f1f5f9",
    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.15)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  opportunityIcon: {
    fontSize: "48px",
    display: "block",
    marginBottom: "15px",
  },
  aboutContent: {
    maxWidth: "800px",
    margin: "0 auto",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))",
    padding: "40px",
    borderRadius: "15px",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderLeft: "5px solid #06b6d4",
  },
  aboutText: {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "15px",
    color: "#cbd5e1",
  },
  aimGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  },
  aimCard: {
    padding: "30px",
    background: "linear-gradient(135deg, rgba(132, 204, 22, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(132, 204, 22, 0.3)",
    borderRadius: "12px",
    boxShadow: "0 4px 32px rgba(132, 204, 22, 0.1)",
    color: "#f1f5f9",
  },
  contactSection: {
    padding: "70px 60px",
    background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
    color: "white",
    textAlign: "center",
    boxShadow: "inset 0 50px 100px rgba(0,0,0,0.2)",
  },
  contactContent: {
    maxWidth: "500px",
    margin: "0 auto",
  },
  contactText: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  contactBtn: {
    display: "inline-block",
    padding: "15px 40px",
    background: "linear-gradient(135deg, #84cc16, #06b6d4)",
    color: "#0f0f23",
    textDecoration: "none",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "all 0.3s ease",
    marginBottom: "30px",
    boxShadow: "0 8px 20px rgba(132, 204, 22, 0.3)",
  },
  socialLinks: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
  },
  socialLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.3s ease",
    borderBottom: "2px solid transparent",
    fontSize: "18px",
  },
  footer: {
    background: "linear-gradient(135deg, #0a0a16, #0f0f23)",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "30px",
    fontSize: "14px",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  memesSection: {
    padding: "40px 60px",
    textAlign: "center",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(26, 26, 62, 0.9))",
    borderTop: "none",
    borderBottom: "none",
    margin: 0,
  },
  memesGridSmall: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  memeSmall: {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(236, 72, 153, 0.3)",
    borderRadius: "10px",
    padding: "15px",
    color: "#f1f5f9",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
};



