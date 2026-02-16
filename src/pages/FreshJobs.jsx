import { useState } from "react";

export default function FreshJobs({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const freshJobs = {
    "IT & Software": [
      { title: "Junior Software Developer", company: "TCS", location: "Bangalore", salary: "3-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www.tcs.com/careers" },
      { title: "Java Developer Trainee", company: "Infosys", location: "Pune", salary: "2.8-3.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.infosys.com/careers/open-positions" },
      { title: "Frontend Developer (Fresher)", company: "Wipro", location: "Hyderabad", salary: "3-3.8 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.wipro.com" },
      { title: "Python Developer Intern", company: "HCL Technologies", location: "Delhi", salary: "2.5-3.2 LPA", experience: "Fresher", type: "Full-time", url: "https://www.hcltech.com/careers" },
      { title: "Web Developer Fresher", company: "Tech Mahindra", location: "Mumbai", salary: "2.8-3.6 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.techmahindra.com" },
      { title: "Associate Software Engineer", company: "Accenture", location: "Bangalore", salary: "3.2-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www.accenture.com/in-en/careers" },
      { title: "Junior Developer - C++", company: "IBM", location: "Chennai", salary: "3-3.7 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.ibm.com/job-search" },
      { title: "Software Engineer Graduate", company: "Cognizant", location: "Pune", salary: "2.9-3.6 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.cognizant.com" },
      { title: "Full Stack Developer Trainee", company: "Capgemini", location: "Hyderabad", salary: "3.1-3.8 LPA", experience: "Fresher", type: "Full-time", url: "https://www.capgemini.com/in-en/careers" },
      { title: "QA Tester Fresher", company: "Genpact", location: "Bangalore", salary: "2.5-3 LPA", experience: "Fresher", type: "Full-time", url: "https://www.genpact.com/careers" },
      { title: "Data Analyst Fresher", company: "EY", location: "Mumbai", salary: "3-3.7 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.ey.com/in" },
      { title: "DevOps Engineer (Entry Level)", company: "Deloitte", location: "Bangalore", salary: "3.2-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www2.deloitte.com/in/en/careers" },
    ],
    "Data Science & Analytics": [
      { title: "Junior Data Scientist", company: "Amazon", location: "Bangalore", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.amazon.jobs/en-in" },
      { title: "Data Analyst Fresher", company: "Google", location: "Delhi", salary: "4.5-5.5 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.google.com" },
      { title: "ML Engineer (Entry Level)", company: "Microsoft", location: "Hyderabad", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.microsoft.com" },
      { title: "Business Analyst Trainee", company: "Flipkart", location: "Bangalore", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.flipkartcareers.com" },
      { title: "Data Science Intern", company: "Airbnb", location: "Mumbai", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Internship", url: "https://www.airbnb.co.in" },
      { title: "Analytics Associate", company: "Swiggy", location: "Bangalore", salary: "3.8-4.8 LPA", experience: "Fresher", type: "Full-time", url: "https://www.swiggycareers.com" },
      { title: "Junior Data Engineer", company: "Zomato", location: "Bangalore", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.zomato.com/jobs" },
      { title: "ML Trainee", company: "Uber", location: "Hyderabad", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.uber.com/en-IN/careers" },
    ],
    "Finance & Banking": [
      { title: "Graduate Trainee - Banking", company: "ICICI Bank", location: "Mumbai", salary: "3-3.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.icicibank.com/careers" },
      { title: "Junior Associate - Finance", company: "HDFC Bank", location: "Delhi", salary: "2.8-3.3 LPA", experience: "Fresher", type: "Full-time", url: "https://www.hdfcbank.com/careers" },
      { title: "Accounts Executive Fresher", company: "Axis Bank", location: "Bangalore", salary: "2.5-3 LPA", experience: "Fresher", type: "Full-time", url: "https://www.axisbank.com/careers" },
      { title: "Financial Analyst Trainee", company: "Goldman Sachs", location: "Mumbai", salary: "6-7 LPA", experience: "Fresher", type: "Full-time", url: "https://www.goldmansachs.com/careers" },
      { title: "Compliance Officer Fresher", company: "Nomura", location: "Mumbai", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.nomura.com/careers" },
      { title: "Risk Analyst Fresher", company: "Morgan Stanley", location: "Bangalore", salary: "5-6 LPA", experience: "Fresher", type: "Full-time", url: "https://www.morganstanley.com/careers" },
      { title: "Junior Accountant", company: "Deloitte", location: "Pune", salary: "3.2-3.8 LPA", experience: "Fresher", type: "Full-time", url: "https://www2.deloitte.com/in/en/careers" },
      { title: "Credit Analyst Trainee", company: "RBI", location: "Mumbai", salary: "5-6 LPA", experience: "Fresher", type: "Full-time", url: "https://www.rbi.org.in/careers" },
    ],
    "Consulting": [
      { title: "Associate Consultant Fresher", company: "McKinsey", location: "Mumbai", salary: "12-14 LPA", experience: "Fresher", type: "Full-time", url: "https://www.mckinsey.com/careers" },
      { title: "Junior Consultant", company: "Boston Consulting Group", location: "Delhi", salary: "11-13 LPA", experience: "Fresher", type: "Full-time", url: "https://www.bcg.com/careers" },
      { title: "Analyst - Strategy", company: "Bain & Company", location: "Bangalore", salary: "10-12 LPA", experience: "Fresher", type: "Full-time", url: "https://www.bain.com/careers" },
      { title: "Management Consultant", company: "EY Consulting", location: "Mumbai", salary: "8-10 LPA", experience: "Fresher", type: "Full-time", url: "https://www.ey.com/en_in/careers" },
      { title: "Business Analyst Fresher", company: "Deloitte Consulting", location: "Bangalore", salary: "7-9 LPA", experience: "Fresher", type: "Full-time", url: "https://www.deloitte.com/in/careers" },
      { title: "Junior Associate - Consulting", company: "KPMG", location: "Pune", salary: "6-8 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.kpmg.co.in" },
    ],
    "Sales & Marketing": [
      { title: "Sales Executive Fresher", company: "HubSpot", location: "Bangalore", salary: "2.5-3.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.hubspot.com/careers" },
      { title: "Marketing Associate Fresher", company: "Coca Cola", location: "Mumbai", salary: "3-3.8 LPA", experience: "Fresher", type: "Full-time", url: "https://www.cocacolaindia.com/careers" },
      { title: "Junior Brand Manager", company: "Unilever", location: "Delhi", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.unilever.com/careers" },
      { title: "Digital Marketing Executive", company: "Oyo Rooms", location: "Bangalore", salary: "2.8-3.6 LPA", experience: "Fresher", type: "Full-time", url: "https://www.oyorooms.com/careers" },
      { title: "Content Marketing Fresher", company: "LinkedIn", location: "Bangalore", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.linkedin.com" },
      { title: "Social Media Manager", company: "Facebook", location: "Mumbai", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.facebook.com/careers" },
      { title: "Product Marketing Analyst", company: "Freshworks", location: "Bangalore", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.freshworks.com" },
      { title: "Sales Development Rep", company: "Zendesk", location: "Pune", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.zendesk.com/careers" },
    ],
    "Human Resources": [
      { title: "HR Associate Fresher", company: "Google", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.google.com" },
      { title: "Recruitment Coordinator", company: "Amazon", location: "Hyderabad", salary: "3-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www.amazon.jobs" },
      { title: "HR Executive Fresher", company: "Microsoft", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.microsoft.com" },
      { title: "Talent Acquisition Specialist", company: "Adobe", location: "Noida", salary: "3.2-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www.adobe.com/careers" },
      { title: "HR Generalist Trainee", company: "Cisco", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://jobs.cisco.com" },
      { title: "Employee Relations Fresher", company: "Intel", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.intel.com/careers" },
    ],
    "Engineering": [
      { title: "Graduate Engineer Trainee", company: "Siemens", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.siemens.com/in/careers" },
      { title: "Mechanical Engineer Fresher", company: "Bosch", location: "Pune", salary: "3.2-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www.bosch.in/careers" },
      { title: "Electrical Engineer Trainee", company: "GE", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.ge.com/careers" },
      { title: "Civil Engineer Fresher", company: "L&T", location: "Mumbai", salary: "3-3.8 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.larsentoubro.com" },
      { title: "Chemical Engineer", company: "BASF", location: "Bangalore", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.basfindia.com/careers" },
      { title: "Production Engineer Fresher", company: "Mahindra", location: "Pune", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.mahindra.com/careers" },
    ],
    "Legal & Compliance": [
      { title: "Junior Legal Associate", company: "Khaitan & Co", location: "Delhi", salary: "4-5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.khaitanco.com/careers" },
      { title: "Legal Analyst Fresher", company: "Nishith Desai Associates", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.nishithdesai.com/careers" },
      { title: "Compliance Officer Trainee", company: "Linklaters", location: "Mumbai", salary: "5-6 LPA", experience: "Fresher", type: "Full-time", url: "https://www.linklaters.com/careers" },
      { title: "Contract Management Associate", company: "Rajinder Narain & Co", location: "Delhi", salary: "3-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www.rnco.in/careers" },
    ],
    "Operations & Logistics": [
      { title: "Supply Chain Executive Fresher", company: "Amazon", location: "Bangalore", salary: "3.5-4.5 LPA", experience: "Fresher", type: "Full-time", url: "https://www.amazon.jobs" },
      { title: "Operations Associate", company: "Flipkart", location: "Hyderabad", salary: "3-4 LPA", experience: "Fresher", type: "Full-time", url: "https://www.flipkartcareers.com" },
      { title: "Logistics Coordinator Fresher", company: "Blue Dart", location: "Mumbai", salary: "2.8-3.5 LPA", experience: "Fresher", type: "Full-time", url: "https://careers.bluedart.com" },
      { title: "Process Executive", company: "DHL", location: "Bangalore", salary: "3-3.8 LPA", experience: "Fresher", type: "Full-time", url: "https://www.dhl.com/careers" },
      { title: "Warehouse Executive Fresher", company: "Ecom Express", location: "Delhi", salary: "2.5-3.2 LPA", experience: "Fresher", type: "Full-time", url: "https://www.ecomexpress.in/careers" },
    ],
  };


  const allJobTypes = ["all", ...Object.keys(freshJobs)];
  const allLocations = ["all", ...new Set(Object.values(freshJobs).flat().map(job => job.location))];

  const filteredJobs = (selectedJobType === "all"
    ? Object.values(freshJobs).flat()
    : freshJobs[selectedJobType] || [])
    .filter(job => selectedLocation === "all" || job.location === selectedLocation);

  const searchResults = filteredJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
      padding: 0,
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
      backgroundAttachment: "scroll",
      minHeight: "100vh",
      width: "100%",
    },
    navbar: {
      position: "sticky",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 5%",
      height: "80px",
      background: "rgba(15, 15, 35, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      zIndex: 2000,
    },
    navLeft: {
      cursor: "pointer",
      fontSize: "26px",
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
      padding: "10px 20px",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    content: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "60px 20px",
    },
    title: {
      fontSize: "48px",
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    subtitle: {
      color: "#cbd5e1",
      fontSize: "18px",
      textAlign: "center",
      marginBottom: "50px",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    searchContainer: {
      marginBottom: "40px",
      textAlign: "center",
    },
    searchInput: {
      width: "100%",
      maxWidth: "600px",
      padding: "15px 20px",
      fontSize: "16px",
      borderRadius: "50px",
      border: "2px solid rgba(6, 182, 212, 0.3)",
      background: "rgba(15, 15, 35, 0.8)",
      color: "#f1f5f9",
      transition: "all 0.3s ease",
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.1)",
    },
    filterContainer: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "30px",
      marginTop: "20px",
    },
    filterLabel: {
      color: "#cbd5e1",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginRight: "10px",
      alignSelf: "center",
    },
    filterBtn: {
      padding: "10px 20px",
      borderRadius: "25px",
      border: "2px solid rgba(6, 182, 212, 0.3)",
      background: "transparent",
      color: "#cbd5e1",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "13px",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    filterBtnActive: {
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      color: "white",
      borderColor: "transparent",
      boxShadow: "0 8px 25px rgba(6, 182, 212, 0.3)",
    },
    jobsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "20px",
      marginTop: "40px",
    },
    jobCard: {
      background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
      border: "2px solid rgba(6, 182, 212, 0.2)",
      borderRadius: "15px",
      padding: "25px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      color: "inherit",
    },
    jobTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#f1f5f9",
      marginBottom: "10px",
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    jobCompany: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#06b6d4",
      marginBottom: "12px",
    },
    jobDetails: {
      fontSize: "13px",
      color: "#cbd5e1",
      marginBottom: "8px",
      lineHeight: "1.6",
    },
    badgeContainer: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "15px",
      marginTop: "12px",
    },
    badge: {
      display: "inline-block",
      background: "rgba(6, 182, 212, 0.2)",
      border: "1px solid rgba(6, 182, 212, 0.5)",
      color: "#06b6d4",
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: "600",
    },
    applyBtn: {
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      color: "white",
      border: "none",
      padding: "12px 24px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      marginTop: "auto",
      transition: "all 0.3s ease",
    },
    stats: {
      textAlign: "center",
      marginTop: "40px",
      padding: "20px",
      borderTop: "2px solid rgba(6, 182, 212, 0.2)",
      color: "#cbd5e1",
    },
    noResults: {
      gridColumn: "1/-1",
      textAlign: "center",
      padding: "60px 20px",
      color: "#cbd5e1",
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
        <h1 style={styles.title}>💼 FRESHER JOBS PORTAL</h1>
        <p style={styles.subtitle}>100+ Fresh Jobs for Graduates with No Experience Required</p>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search jobs by title, company, or location..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={(e) => e.target.style.boxShadow = "0 0 30px rgba(6, 182, 212, 0.3)"}
            onBlur={(e) => e.target.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.1)"}
          />
        </div>

        {/* Job Type Filter */}
        <div style={styles.filterContainer}>
          <span style={styles.filterLabel}>Category:</span>
          {allJobTypes.map((jobType) => (
            <button
              key={jobType}
              style={{
                ...styles.filterBtn,
                ...(selectedJobType === jobType ? styles.filterBtnActive : {}),
              }}
              onClick={() => {
                setSelectedJobType(jobType);
                setSearchTerm("");
              }}
            >
              {jobType === "all" ? "All Categories" : jobType}
            </button>
          ))}
        </div>

        {/* Location Filter */}
        <div style={styles.filterContainer}>
          <span style={styles.filterLabel}>Location:</span>
          {allLocations.map((location) => (
            <button
              key={location}
              style={{
                ...styles.filterBtn,
                ...(selectedLocation === location ? styles.filterBtnActive : {}),
              }}
              onClick={() => setSelectedLocation(location)}
            >
              {location === "all" ? "All Locations" : location}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div style={styles.jobsGrid}>
          {searchResults.length > 0 ? (
            searchResults.map((job, index) => (
              <a
                key={index}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.jobCard}
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
                <h3 style={styles.jobTitle}>{job.title}</h3>
                <div style={styles.jobCompany}>🏢 {job.company}</div>
                <div style={styles.jobDetails}>
                  📍 {job.location}<br />
                  💰 {job.salary}<br />
                  ⏱️ {job.type}
                </div>
                <div style={styles.badgeContainer}>
                  <div style={styles.badge}>👤 Fresher</div>
                  <div style={{ ...styles.badge, background: "rgba(132, 204, 22, 0.2)", borderColor: "rgba(132, 204, 22, 0.5)", color: "#84cc16" }}>✓ No Experience</div>
                </div>
                <button style={styles.applyBtn} onClick={(e) => {
                  e.preventDefault();
                  window.open(job.url, '_blank');
                }}>
                  APPLY NOW →
                </button>
              </a>
            ))
          ) : (
            <div style={styles.noResults}>
              <p style={{ fontSize: "20px" }}>😔 No jobs found matching your criteria.</p>
              <p>Try adjusting your filters or search terms!</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div style={styles.stats}>
          <p>
            💼 Showing {searchResults.length} of {Object.values(freshJobs).flat().length} jobs | {Object.keys(freshJobs).length} categories | All positions are for freshers
          </p>
        </div>
      </div>
    </div>
  );
}
