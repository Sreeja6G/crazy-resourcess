import { useState } from "react";

export default function FreeCourses({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const freeCourses = {
    "Programming": [
      { name: "Python Basics", description: "Learn Python fundamentals - variables, loops, functions", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "JavaScript Fundamentals", description: "Master JS basics for web development", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Java for Beginners", description: "Complete Java programming course from scratch", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "C++ Programming", description: "Learn C++ with hands-on projects", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Web Development Basics", description: "HTML, CSS, and JavaScript fundamentals", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "React.js Tutorial", description: "Frontend development with React framework", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Node.js Backend", description: "Server-side development with Node.js", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "SQL & Databases", description: "Database design and SQL queries", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
    "Data Science": [
      { name: "Data Science 101", description: "Introduction to data science and analytics", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Python for Data Analysis", description: "Pandas, NumPy, and Matplotlib tutorials", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Machine Learning Basics", description: "Fundamentals of ML algorithms and models", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Statistics for DS", description: "Statistical concepts for data science", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Deep Learning Intro", description: "Neural networks and deep learning basics", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Data Visualization", description: "Create stunning data visualizations", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Big Data Basics", description: "Introduction to Hadoop and Spark", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "AI & Generative AI", description: "Artificial Intelligence and ChatGPT fundamentals", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
    "Cloud & DevOps": [
      { name: "AWS Fundamentals", description: "Amazon Web Services basics and certification prep", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Docker & Kubernetes", description: "Container orchestration and DevOps tools", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "CI/CD Pipeline", description: "Continuous Integration and Deployment setup", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Linux Administration", description: "Linux commands and server management", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Git & Version Control", description: "GitHub, GitLab, and Git workflows", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Azure Cloud Basics", description: "Microsoft Azure cloud services", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Google Cloud Platform", description: "GCP fundamentals and services", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Infrastructure as Code", description: "Terraform and IaC concepts", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
    "Web Design": [
      { name: "UI/UX Design Basics", description: "User interface and experience design principles", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Figma for Designers", description: "Design prototyping with Figma", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "CSS Advanced", description: "Advanced CSS techniques and animations", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Responsive Design", description: "Mobile-first responsive web design", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Web Accessibility", description: "Building accessible websites for all users", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Design Systems", description: "Create and manage design systems", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Graphic Design Basics", description: "Fundamentals of graphic design", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Web Animation", description: "CSS and JavaScript animations", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
    "Cybersecurity": [
      { name: "Cybersecurity 101", description: "Introduction to cybersecurity concepts", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Ethical Hacking Basics", description: "Penetration testing and ethical hacking", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Network Security", description: "Network fundamentals and security", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Web Application Security", description: "Secure web application development", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Cryptography Basics", description: "Encryption and cryptographic algorithms", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Bug Bounty Hunting", description: "Find vulnerabilities and earn rewards", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "OWASP Top 10", description: "Critical web application vulnerabilities", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Security Operations", description: "SOC analyst fundamentals", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
    "Mobile Development": [
      { name: "Android Development", description: "Build Android apps with Java and Kotlin", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "iOS Development", description: "Swift programming for iOS apps", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "React Native", description: "Cross-platform mobile development", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Flutter Basics", description: "Build apps with Flutter framework", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Mobile UI/UX", description: "Design for mobile applications", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "App Monetization", description: "Earn money from mobile apps", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Firebase for Mobile", description: "Backend services for mobile apps", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Mobile App Testing", description: "QA and testing for mobile apps", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
    "Soft Skills": [
      { name: "Communication Skills", description: "Effective communication for professionals", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Interview Preparation", description: "Crack technical and HR interviews", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Leadership Basics", description: "Leadership and team management", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Time Management", description: "Manage time and increase productivity", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Public Speaking", description: "Overcome stage fright and speak confidently", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Emotional Intelligence", description: "Develop EQ for better relationships", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Project Management", description: "Agile and Waterfall methodologies", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Resume Writing", description: "Create an impressive resume", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
    "Business & Entrepreneurship": [
      { name: "Startup Basics", description: "How to start and grow a startup", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Digital Marketing", description: "SEO, SEM, and social media marketing", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Business Strategy", description: "Strategic planning and business models", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Financial Literacy", description: "Personal finance and investing", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "E-commerce Basics", description: "Build and manage online stores", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Content Marketing", description: "Create engaging content for marketing", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Social Media Strategy", description: "Grow your social media presence", platform: "GUVI", url: "https://www.guvi.in/courses" },
      { name: "Freelancing Guide", description: "Build a successful freelancing career", platform: "GUVI", url: "https://www.guvi.in/courses" },
    ],
  };

  const allCategories = ["all", ...Object.keys(freeCourses)];

  const filteredCourses = selectedCategory === "all"
    ? Object.values(freeCourses).flat()
    : freeCourses[selectedCategory] || [];

  const searchResults = filteredCourses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
      padding: 0,
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden",
    },
    navbar: {
      position: "sticky",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 clamp(10px, 3%, 40px)",
      height: "clamp(60px, 10vh, 80px)",
      background: "rgba(15, 15, 35, 0.98)",
      backdropFilter: "blur(15px)",
      borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
      zIndex: 2000,
    },
    navLeft: {
      cursor: "pointer",
      fontSize: "clamp(18px, 5vw, 26px)",
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "800",
      letterSpacing: '1px'
    },
    backButton: {
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      color: "white",
      border: "none",
      padding: "clamp(8px, 2vw, 10px) clamp(12px, 3vw, 20px)",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: "clamp(11px, 2.5vw, 14px)",
      fontWeight: "600",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(6, 182, 212, 0.3)",
    },
    content: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "clamp(30px, 5vw, 60px) clamp(15px, 4vw, 20px)",
    },
    title: {
      fontSize: "clamp(28px, 8vw, 48px)",
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    subtitle: {
      color: "#cbd5e1",
      fontSize: "clamp(14px, 3.5vw, 18px)",
      textAlign: "center",
      marginBottom: "clamp(30px, 5vw, 50px)",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: "500",
    },
    searchContainer: {
      marginBottom: "clamp(25px, 5vw, 40px)",
      textAlign: "center",
      padding: "0 10px",
    },
    searchInput: {
      width: "100%",
      maxWidth: "600px",
      padding: "clamp(10px, 3vw, 15px) clamp(15px, 4vw, 20px)",
      fontSize: "clamp(14px, 3.5vw, 16px)",
      borderRadius: "50px",
      border: "2px solid rgba(6, 182, 212, 0.4)",
      background: "rgba(15, 15, 35, 0.85)",
      color: "#f1f5f9",
      transition: "all 0.3s ease",
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.15)",
    },
    filterContainer: {
      display: "flex",
      gap: "clamp(8px, 2vw, 10px)",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "clamp(30px, 5vw, 50px)",
      marginTop: "clamp(15px, 3vw, 20px)",
      padding: "0 10px",
    },
    filterBtn: {
      padding: "clamp(8px, 2vw, 10px) clamp(12px, 3vw, 20px)",
      borderRadius: "25px",
      border: "2px solid rgba(6, 182, 212, 0.3)",
      background: "transparent",
      color: "#cbd5e1",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "clamp(12px, 2.5vw, 14px)",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    filterBtnActive: {
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      color: "white",
      borderColor: "transparent",
      boxShadow: "0 8px 25px rgba(6, 182, 212, 0.3)",
    },
    coursesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(clamp(280px, 85vw, 320px), 1fr))",
      gap: "clamp(15px, 3vw, 25px)",
      marginTop: "clamp(25px, 5vw, 40px)",
      padding: "0 clamp(10px, 2vw, 20px)",
    },
    courseCard: {
      background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(236, 72, 153, 0.15))",
      border: "2px solid rgba(6, 182, 212, 0.3)",
      borderRadius: "clamp(12px, 3vw, 15px)",
      padding: "clamp(18px, 4vw, 25px)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      color: "inherit",
      boxShadow: "0 4px 15px rgba(6, 182, 212, 0.1)",
    },
    courseName: {
      fontSize: "clamp(16px, 4vw, 20px)",
      fontWeight: "700",
      color: "#f1f5f9",
      marginBottom: "10px",
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      lineHeight: "1.3",
    },
    courseDescription: {
      fontSize: "clamp(13px, 3vw, 14px)",
      color: "#cbd5e1",
      lineHeight: "1.6",
      marginBottom: "15px",
      flex: 1,
    },
    platformBadge: {
      display: "inline-block",
      background: "rgba(6, 182, 212, 0.2)",
      border: "1px solid rgba(6, 182, 212, 0.5)",
      color: "#06b6d4",
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      marginBottom: "10px",
      width: "fit-content",
    },
    enrollBtn: {
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      color: "white",
      border: "none",
      padding: "clamp(10px, 2.5vw, 12px) clamp(15px, 4vw, 20px)",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "clamp(12px, 3vw, 14px)",
      fontWeight: "600",
      marginTop: "auto",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(6, 182, 212, 0.25)",
    },
    stats: {
      textAlign: "center",
      marginTop: "clamp(30px, 5vw, 40px)",
      padding: "clamp(15px, 3vw, 20px)",
      borderTop: "2px solid rgba(6, 182, 212, 0.2)",
      color: "#cbd5e1",
      fontSize: "clamp(12px, 3vw, 14px)",
    },
    certificateBadge: {
      display: "inline-block",
      background: "rgba(132, 204, 22, 0.2)",
      border: "1px solid rgba(132, 204, 22, 0.5)",
      color: "#84cc16",
      padding: "6px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "700",
      marginLeft: "10px",
      textTransform: "uppercase",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft} onClick={() => { setCurrentPage("home"); window.scrollTo(0, 0); }}>
          Crazy Resources
        </div>
        <button
          style={styles.backButton}
          onClick={() => { setCurrentPage("home"); window.scrollTo(0, 0); }}
        >
          ← Back to Home
        </button>
      </nav>

      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>📚 FREE COURSES & CERTIFICATIONS</h1>
        <p style={styles.subtitle}>100+ Free Courses with Free Certification - Learn from GUVI & Top Platforms</p>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search courses... (e.g., Python, Web Development, Data Science)"
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={(e) => e.target.style.boxShadow = "0 0 30px rgba(6, 182, 212, 0.3)"}
            onBlur={(e) => e.target.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.1)"}
          />
        </div>

        {/* Category Filter */}
        <div style={styles.filterContainer}>
          {allCategories.map((category) => (
            <button
              key={category}
              style={{
                ...styles.filterBtn,
                ...(selectedCategory === category ? styles.filterBtnActive : {}),
              }}
              onClick={() => {
                setSelectedCategory(category);
                setSearchTerm("");
              }}
            >
              {category === "all" ? "All Courses" : category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div style={styles.coursesGrid}>
          {searchResults.length > 0 ? (
            searchResults.map((course, index) => (
              <a
                key={index}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.courseCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.6)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(6, 182, 212, 0.2)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={styles.platformBadge}>{course.platform}</div>
                <h3 style={styles.courseName}>
                  {course.name}
                  <span style={styles.certificateBadge}>Free Cert</span>
                </h3>
                <p style={styles.courseDescription}>{course.description}</p>
                <button style={styles.enrollBtn} onClick={(e) => {
                  e.preventDefault();
                  window.open(course.url, '_blank');
                }}>
                  ENROLL FREE →
                </button>
              </a>
            ))
          ) : (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "clamp(25px, 5vw, 40px)", color: "#cbd5e1" }}>
              <p style={{ fontSize: "clamp(14px, 3.5vw, 18px)", lineHeight: "1.6" }}>No courses found. Try searching with different keywords!</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div style={styles.stats}>
          <p>
            📊 Showing {searchResults.length} of {Object.values(freeCourses).flat().length} courses | {Object.keys(freeCourses).length} categories | All courses have FREE certification
          </p>
        </div>
      </div>
    </div>
  );
}
