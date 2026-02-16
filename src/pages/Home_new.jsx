import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Hero from "./Hero";
import Founders from "./Founders";

// Initialize EmailJS (you need to replace with your actual credentials)
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

export default function Home({ setCurrentPage, setSelectedInternship }) {
  const [activeNav, setActiveNav] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Refs for scrolling
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const opportunitiesRef = useRef(null);

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'register'

  const scrollToSection = (ref, navName) => {
    setActiveNav(navName);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        "YOUR_EMAIL_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_EMAIL_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "your-email@example.com" // Replace with recipient email
        }
      );
      
      alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [mobileId, setMobileId] = useState("");

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (authMode === "forgot") {
      alert(`OTP successfully sent to your Mobile ID: ${mobileId}! (Simulation Mode)`);
      setAuthMode("reset");
    } else if (authMode === "reset") {
      alert("Password reset successfully! Please login with your new credentials.");
      setAuthMode("login");
    } else {
      alert(`${authMode === "login" ? "Login" : "Registration"} successful for ${mobileId}!`);
      setIsAuthOpen(false);
    }
  };

  // Login/Register/Forgot Modal Component
  const AuthModal = () => (
    <div style={styles.modalOverlay} onClick={() => setIsAuthOpen(false)}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.modalClose} onClick={() => setIsAuthOpen(false)}>✕</button>

        <h2 style={styles.modalTitle}>
          {authMode === "login" && "Welcome Back"}
          {authMode === "register" && "Create Account"}
          {authMode === "forgot" && "Reset Request"}
          {authMode === "reset" && "Verify OTP"}
        </h2>

        <p style={styles.modalSubtitle}>
          {authMode === "forgot" ? "Enter your Mobile ID to receive a verification code." : "Manage your Crazy Resources account."}
        </p>

        <form style={styles.authForm} onSubmit={handleAuthSubmit}>
          {/* Mobile ID Field - Used in all except Reset */}
          {authMode !== "reset" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Mobile ID (Phone)</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                style={styles.input}
                value={mobileId}
                onChange={(e) => setMobileId(e.target.value)}
                required
              />
            </div>
          )}

          {/* Registration Fields */}
          {authMode === "register" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" placeholder="John Doe" style={styles.input} required />
            </div>
          )}

          {/* Password Fields - Used in Login, Register, Reset */}
          {(authMode === "login" || authMode === "register" || authMode === "reset") && (
            <div style={styles.formGroup}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={styles.label}>{authMode === "reset" ? "New Password" : "Password"}</label>
                {authMode === "login" && (
                  <span
                    style={{ ...styles.toggleLink, fontSize: '12px', textDecoration: 'none' }}
                    onClick={() => setAuthMode("forgot")}
                  >
                    Forgot Password?
                  </span>
                )}
              </div>
              <input
                type="password"
                placeholder="••••••••"
                style={styles.input}
                value={authMode === "reset" ? newPassword : undefined}
                onChange={(e) => authMode === "reset" && setNewPassword(e.target.value)}
                required
              />
            </div>
          )}

          {/* OTP Field - Used only in Reset */}
          {authMode === "reset" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter OTP from Mobile</label>
              <input
                type="text"
                placeholder="6-digit code"
                style={styles.input}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" style={styles.submitBtn}>
            {authMode === "login" && "Login Now"}
            {authMode === "register" && "Register Now"}
            {authMode === "forgot" && "Send OTP to Mobile"}
            {authMode === "reset" && "Verify & Reset"}
          </button>
        </form>

        <div style={styles.authToggle}>
          {authMode === "login" ? (
            <p style={{ color: '#cbd5e1' }}>Don't have an account? <span style={styles.toggleLink} onClick={() => setAuthMode("register")}>Sign Up</span></p>
          ) : (
            <p style={{ color: '#cbd5e1' }}>
              {(authMode === "register" || authMode === "forgot" || authMode === "reset") && (
                <>
                  {authMode === "register" ? "Already have an account? " : "Go back to "}
                  <span style={styles.toggleLink} onClick={() => setAuthMode("login")}>Login</span>
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {isAuthOpen && <AuthModal />}

      {/* Navigation Bar */}
      <nav style={styles.navbar} className="header-nav">
        {/* Left: Logo */}
        <div className="nav-left">
          <h1 style={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Crazy Resources
          </h1>
        </div>

        {/* Right: Search, Actions & Menu */}
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="search-wrapper" style={{ display: 'none' }}> {/* Hidden on small screens or kept for layout */}
            <input type="text" placeholder="Search..." style={styles.headerSearch} />
          </div>

          <div className="nav-actions" style={styles.desktopOnly}>
            <a style={styles.navLink} onClick={() => { setAuthMode("login"); setIsAuthOpen(true); }}>Login</a>
            <button
              style={{ ...styles.cardButton, padding: '8px 20px', fontSize: '12px' }}
              onClick={() => { setAuthMode("register"); setIsAuthOpen(true); }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - REMOVED to prevent layout shift */}
      </nav>

      {/* Hero Section */}
      <section
        style={styles.heroSection}
        className="section-padding"
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <Hero />
        </div>
      </section>

      <style>
        {`
          @keyframes pulse-live {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(6, 182, 212, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
          }

          @keyframes cardHoverGlow {
            0% { box-shadow: 0 8px 32px rgba(6, 182, 212, 0.1); }
            50% { box-shadow: 0 8px 32px rgba(6, 182, 212, 0.25); }
            100% { box-shadow: 0 8px 32px rgba(6, 182, 212, 0.1); }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .opportunity-card-animate {
            animation: slideUp 0.6s ease-out forwards;
          }

          .opportunity-card-animate:nth-child(1) { animation-delay: 0s; }
          .opportunity-card-animate:nth-child(2) { animation-delay: 0.1s; }
          .opportunity-card-animate:nth-child(3) { animation-delay: 0.2s; }
          .opportunity-card-animate:nth-child(4) { animation-delay: 0.3s; }
          .opportunity-card-animate:nth-child(5) { animation-delay: 0.4s; }
          .opportunity-card-animate:nth-child(6) { animation-delay: 0.5s; }
          .opportunity-card-animate:nth-child(7) { animation-delay: 0.6s; }

          .responsive-grid > div:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 12px 40px rgba(6, 182, 212, 0.25) !important;
            border-color: rgba(6, 182, 212, 0.6) !important;
          }

          .responsive-grid > div:hover .card-icon {
            transform: scale(1.15) rotate(5deg);
            animation: pulse-live 1.5s ease-in-out infinite;
          }

          .responsive-grid > div:hover button {
            transform: scale(1.08);
            box-shadow: 0 8px 25px rgba(6, 182, 212, 0.5) !important;
          }

          input:focus,
          textarea:focus {
            border-color: #06b6d4 !important;
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.4) !important;
            background: rgba(30, 30, 60, 0.95) !important;
          }

          button:hover {
            filter: brightness(1.1);
          }

          a {
            color: #06b6d4;
            transition: all 0.3s ease;
          }

          a:hover {
            color: #ec4899;
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
          }

          .live-indicator {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 10px;
            font-weight: 800;
            color: #06b6d4;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }

          .pulse-dot {
            width: 6px;
            height: 6px;
            background: #06b6d4;
            border-radius: 50%;
            animation: pulse-live 2s infinite;
          }

          * {
            box-sizing: border-box;
          }
          
          body, html {
            overflow-x: hidden;
            width: 100%;
            margin: 0;
            padding: 0;
          }

          @media (max-width: 768px) {
            .responsive-grid > div:hover {
              transform: translateY(-8px);
            }
            
            body, html {
              overflow-x: hidden;
            }
            
            .section-padding {
              padding: 20px !important;
            }
          }
          
          @media (max-width: 480px) {
            .opportunity-card-animate {
              animation: none;
            }
          }
        `}
      </style>

      {/* Opportunities Section */}
      <section style={styles.opportunitiesSection} ref={opportunitiesRef} className="section-padding">
        <div style={styles.opportunitiesContainer}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="section-title">CHOOSE YOUR PATH</h2>
            <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '700px', margin: '0 auto', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>
              Unlock your potential with our curated premium resources.
            </p>
          </div>

          <div style={styles.opportunitiesGrid} className="responsive-grid">
            {/* 1. Hackathons */}
            <div
              className="opportunity-card-animate"
              style={styles.opportunityCard}
              onClick={() => {
                setActiveNav("hackathons");
                setCurrentPage("hackathons");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                REAL-TIME UPDATES
              </div>
              <div className="card-icon" style={styles.cardIcon}>🏆</div>
              <h3 style={styles.cardTitle}>HACKATHONS</h3>
              <p style={styles.cardDescription}>
                Compete against the best minds globally. Build innovative projects, solve real-world problems, and win exciting prizes.
              </p>
              <button style={styles.cardButton}>EXPLORE NOW →</button>
            </div>

            {/* 2. Internships */}
            <div
              className="opportunity-card-animate"
              style={styles.opportunityCard}
              onClick={() => {
                setActiveNav("internships");
                setCurrentPage("internships");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                LIVE PLACEMENTS
              </div>
              <div className="card-icon" style={styles.cardIcon}>💼</div>
              <h3 style={styles.cardTitle}>INTERNSHIPS</h3>
              <p style={styles.cardDescription}>
                Launch your career with top-tier internships. Gain hands-on experience and build your professional network.
              </p>
              <button style={styles.cardButton}>VIEW OPENINGS →</button>
            </div>

            {/* 3. Cyber Security */}
            <div className="opportunity-card-animate" style={{ ...styles.opportunityCard, opacity: 0.8 }}>
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#ec4899', color: 'white', fontSize: '10px', padding: '4px 10px', borderRadius: '4px', fontWeight: 'bold' }}>COMING SOON</div>
              <div className="live-indicator" style={{ color: '#ec4899' }}>
                <div className="pulse-dot" style={{ backgroundColor: '#ec4899' }}></div>
                DEFENSE TRACKING
              </div>
              <div className="card-icon" style={styles.cardIcon}>🛡️</div>
              <h3 style={styles.cardTitle}>CYBER SECURITY</h3>
              <p style={styles.cardDescription}>
                Master the art of digital defense. Learn ethical hacking, network security, and protect the digital frontier.
              </p>
              <button style={{ ...styles.cardButton, background: 'rgba(255,255,255,0.1)', cursor: 'default' }}>LOCKED</button>
            </div>

            {/* 4. English Communication */}
            <div
              className="opportunity-card-animate"
              style={styles.opportunityCard}
              onClick={() => {
                setCurrentPage("english-communication");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                ACTIVE SESSIONS
              </div>
              <div className="card-icon" style={styles.cardIcon}>🗣️</div>
              <h3 style={styles.cardTitle}>COMMUNICATION</h3>
              <p style={styles.cardDescription}>
                Master the global language. Improve your speaking confidence with daily one-hour interactive practice sessions.
              </p>
              <button style={styles.cardButton}>START LEARNING →</button>
            </div>

            {/* 5. AI Tools */}
            <div
              className="opportunity-card-animate"
              style={styles.opportunityCard}
              onClick={() => {
                setActiveNav("ai-tools");
                setCurrentPage("ai-tools");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                100+ TOOLS CURATED
              </div>
              <div className="card-icon" style={styles.cardIcon}>🤖</div>
              <h3 style={styles.cardTitle}>AI TOOLS</h3>
              <p style={styles.cardDescription}>
                Discover 100+ AI tools across 9 domains. Find the perfect AI assistant for writing, coding, design, learning, and more.
              </p>
              <button style={styles.cardButton}>EXPLORE TOOLS →</button>
            </div>

            {/* 6. Free Courses */}
            <div
              className="opportunity-card-animate"
              style={styles.opportunityCard}
              onClick={() => {
                setActiveNav("free-courses");
                setCurrentPage("free-courses");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                100+ FREE CERTIFICATIONS
              </div>
              <div className="card-icon" style={styles.cardIcon}>📚</div>
              <h3 style={styles.cardTitle}>FREE COURSES</h3>
              <p style={styles.cardDescription}>
                Learn 100+ free courses with free certifications from GUVI. Programming, Data Science, Cloud, Design & more.
              </p>
              <button style={styles.cardButton}>BROWSE COURSES →</button>
            </div>

            {/* 7. Fresh Jobs */}
            <div
              className="opportunity-card-animate"
              style={styles.opportunityCard}
              onClick={() => {
                setActiveNav("fresh-jobs");
                setCurrentPage("fresh-jobs");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                100+ FRESHER POSITIONS
              </div>
              <div className="card-icon" style={styles.cardIcon}>💼</div>
              <h3 style={styles.cardTitle}>FRESHER JOBS</h3>
              <p style={styles.cardDescription}>
                Browse 100+ fresh job openings across 8 categories. Direct links to apply. Zero experience required.
              </p>
              <button style={styles.cardButton}>FIND JOBS →</button>
            </div>

          </div>
        </div>
      </section>

      {/* Founders Section (About) */}
      <div id="about" ref={aboutRef}>
        <Founders />
      </div>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} style={styles.contactSection} className="section-padding">
        <div style={styles.contactContainer}>
          <h2 style={styles.contactTitle} className="section-title">📬 Get in Touch</h2>
          <p style={styles.contactSubtitle}>Have questions or suggestions? We'd love to hear from you!</p>

          <div style={styles.contactContent} className="contact-container">
            <form style={styles.contactForm} onSubmit={handleContactSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  style={styles.input}
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  style={styles.textarea}
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" style={styles.submitBtn}>Send Message 🚀</button>
            </form>

            <div style={styles.contactInfo} className="contact-info">
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@crazyresources.com</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <div>
                  <h3>Visit Us</h3>
                  <p>Student Innovation Hub, Tech University, India</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>🤝</span>
                <div>
                  <h3>Connect</h3>
                  <div style={styles.socialLinks}>
                    <span style={styles.socialIcon}>LinkedIn</span>
                    <span style={styles.socialIcon}>Twitter</span>
                    <span style={styles.socialIcon}>Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer} className="section-padding">
        <div style={styles.footerContent} className="responsive-grid grid-cols-mobile-1">
          <div style={styles.footerSection}>
            <h3>Crazy Resources</h3>
            <p>Empowering students with the best resources, opportunities, and community.</p>
          </div>
          <div style={styles.footerSection}>
            <h3>Quick Links</h3>
            <p onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>Home</p>
            <p onClick={() => setCurrentPage("hackathons")} style={{ cursor: 'pointer' }}>Hackathons</p>
            <p onClick={() => { setSelectedInternship(null); setCurrentPage("internships"); }} style={{ cursor: 'pointer' }}>Internships</p>
          </div>
          <div style={styles.footerSection}>
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <p style={{ marginTop: '30px', opacity: 0.7 }}>© 2024 Crazy Resources. Built with ❤️ by Students, for Students</p>
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
    overflow: "hidden",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
  },
  navbar: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 clamp(10px, 5%, 40px)",
    height: "clamp(60px, 12vh, 80px)",
    background: "rgba(15, 15, 35, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    zIndex: 2000,
    flexWrap: "wrap",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    "@media (max-width: 768px)": {
      height: "70px",
      padding: "0 15px"
    }
  },
  logo: {
    margin: 0,
    fontSize: "26px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "800",
    cursor: "pointer",
    letterSpacing: '1px',
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      fontSize: "20px"
    }
  },
  navLink: {
    color: "#cbd5e1",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s'
  },
  navLinkActive: {
    color: "#06b6d4",
    borderBottomColor: "#06b6d4",
  },
  heroSection: {
    background: "transparent",
    minHeight: "calc(100vh - 80px)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "visible",
    margin: 0,
    padding: "0 20px",
    transition: "all 0.5s ease",
  },
  opportunitiesSection: {
    padding: "clamp(50px, 10vw, 100px) clamp(15px, 4vw, 20px)",
    background: "transparent",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
    position: "relative",
    overflow: "hidden"
  },
  opportunitiesContainer: {
    maxWidth: "1300px",
    margin: "0 auto",
  },
  opportunitiesTitle: {
    fontSize: "clamp(32px, 8vw, 52px)",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "900",
    letterSpacing: "-1px"
  },
  opportunitiesSubtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "60px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    opacity: 0.8
  },
  opportunitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 85vw, 280px), 1fr))",
    gap: "clamp(15px, 3vw, 20px)",
    width: "100%",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "12px"
    }
  },
  opportunityCard: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(236, 72, 153, 0.12))",
    border: "2px solid rgba(6, 182, 212, 0.35)",
    borderRadius: "clamp(15px, 4vw, 20px)",
    padding: "clamp(25px, 5vw, 35px)",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.1)",
    "@media (max-width: 768px)": {
      padding: "25px 20px",
      borderRadius: "16px",
      border: "2px solid rgba(6, 182, 212, 0.4)"
    }
  },
  cardIcon: {
    fontSize: "60px",
    marginBottom: "20px",
    transition: "transform 0.4s ease",
    display: "block",
    "@media (max-width: 768px)": {
      fontSize: "50px",
      marginBottom: "15px"
    }
  },
  cardTitle: {
    fontSize: "24px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    "@media (max-width: 768px)": {
      fontSize: "20px",
      marginBottom: "12px"
    }
  },
  cardDescription: {
    fontSize: "16px",
    color: "#cbd5e1",
    marginBottom: "25px",
    flex: "1",
    lineHeight: "1.7",
    fontWeight: "500",
    "@media (max-width: 768px)": {
      fontSize: "14px",
      marginBottom: "20px",
      lineHeight: "1.6"
    }
  },
  cardButton: {
    padding: "clamp(10px, 2.5vw, 12px) clamp(20px, 4vw, 28px)",
    fontSize: "clamp(12px, 3vw, 14px)",
    fontWeight: "700",
    color: "#fff",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    border: "2px solid rgba(6, 182, 212, 0.5)",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    marginTop: "auto",
    boxShadow: "0 6px 20px rgba(6, 182, 212, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    "@media (max-width: 768px)": {
      padding: "12px 20px",
      fontSize: "13px"
    }
    marginTop: "auto",
    boxShadow: "0 6px 20px rgba(6, 182, 212, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    "@media (max-width: 768px)": {
      padding: "10px 20px",
      fontSize: "12px",
      borderRadius: "8px"
    }
  },
  contactSection: {
    padding: "100px 20px",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 62, 0.95))",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
    "@media (max-width: 768px)": {
      padding: "60px 15px"
    }
  },
  contactContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  contactTitle: {
    fontSize: "52px",
    fontWeight: "900",
    textAlign: "center",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
    letterSpacing: "2px"
  },
  contactSubtitle: {
    textAlign: "center",
    color: "#cbd5e1",
    marginBottom: "50px",
    fontSize: "18px",
    lineHeight: "1.8",
    fontWeight: "500"
  },
  contactContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
    justifyContent: "center",
  },
  contactForm: {
    flex: "1 1 400px",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(236, 72, 153, 0.05))",
    padding: "40px",
    borderRadius: "20px",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.1)",
    backdropFilter: "blur(10px)"
  },
  formGroup: {
    marginBottom: "25px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    color: "#06b6d4",
    fontWeight: "600",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  input: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    background: "rgba(30, 30, 60, 0.6)",
    color: "white",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.2)"
  },
  textarea: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    background: "rgba(30, 30, 60, 0.6)",
    color: "white",
    fontSize: "15px",
    outline: "none",
    resize: "vertical",
    minHeight: "150px",
    transition: "all 0.3s ease",
    boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "inherit"
  },
  submitBtn: {
    width: "100%",
    padding: "16px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    color: "white",
    border: "2px solid rgba(6, 182, 212, 0.5)",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "800",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    textTransform: 'uppercase',
    letterSpacing: '2px',
    boxShadow: "0 6px 25px rgba(6, 182, 212, 0.3)"
  },
  contactInfo: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(236, 72, 153, 0.05))",
    padding: "20px",
    borderRadius: "15px",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(6, 182, 212, 0.05)"
  },
  contactIcon: {
    fontSize: "30px",
    color: "#06b6d4"
  },
  socialLinks: {
    display: "flex",
    gap: "15px",
    color: "#06b6d4",
    fontSize: "14px",
    marginTop: "5px",
    flexWrap: "wrap"
  },
  socialIcon: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#06b6d4",
    transition: "all 0.3s ease",
    fontWeight: "600"
  },
  footer: {
    background: "linear-gradient(135deg, #0a0a16, #0f0f23)",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "80px 20px 40px",
    fontSize: "14px",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    textAlign: "left",
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(5, 5, 15, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 3000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  modalContent: {
    background: 'linear-gradient(135deg, #1a1a3e, #0f0f23)',
    width: '100%',
    maxWidth: '450px',
    borderRadius: '24px',
    padding: '40px',
    position: 'relative',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  },
  modalClose: {
    position: 'absolute',
    top: '20px',
    right: '25px',
    background: 'none',
    border: 'none',
    color: '#cbd5e1',
    fontSize: '20px',
    cursor: 'pointer'
  },
  modalTitle: {
    fontSize: '32px',
    background: 'linear-gradient(135deg, #06b6d4, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
    fontWeight: '800'
  },
  modalSubtitle: {
    color: '#cbd5e1',
    marginBottom: '30px',
    fontSize: '14px'
  },
  authForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  authToggle: {
    marginTop: '25px',
    textAlign: 'center',
    fontSize: '14px'
  },
  toggleLink: {
    color: '#06b6d4',
    cursor: 'pointer',
    fontWeight: '600',
    textDecoration: 'underline'
  },
  desktopOnly: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }
};

