export default function Hero() {
  return (
    <section style={styles.hero} className="section-padding">
      <div style={styles.content}>
        <h1 style={styles.mainTitle} className="hero-title">🚀 Crazy Resources</h1>

        <p style={styles.tagline} className="hero-subtitle">
          Your One-Stop Destination for Success
        </p>

        <p style={styles.sub}>
          Internships • Hackathons • Roadmaps • Tools • AI Resources<br />
          <b>anni okkate place lo 😌</b>
        </p>

        <p style={styles.meme}>
          "Internship open ayindi ani telisina feeling…<br />
          deadline ayipoyaka ardham ayye feeling 🥲"
        </p>

        <div style={styles.features}>
          <div style={styles.feature}>
            <span>💼 8+ Opportunities</span>
          </div>
          <div style={styles.feature}>
            <span>📚 Expert Roadmaps</span>
          </div>
          <div style={styles.feature}>
            <span>🤝 Community Support</span>
          </div>
        </div>

        <button style={styles.btn}>
          ✨ Start Exploring Now
        </button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    overflow: "hidden",
  },
  content: {
    maxWidth: "900px",
    padding: "min(40px, 5%)",
    width: "100%",
    boxSizing: "border-box",
  },
  mainTitle: {
    fontSize: "min(72px, 12vw)",
    fontWeight: "900",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
  },
  tagline: {
    fontSize: "min(32px, 8vw)",
    fontWeight: "700",
    color: "#f1f5f9",
    marginBottom: "30px",
  },
  sub: {
    fontSize: "clamp(16px, 5vw, 22px)",
    marginTop: "20px",
    marginBottom: "20px",
    color: "#cbd5e1",
    lineHeight: "1.8",
  },
  meme: {
    marginTop: "25px",
    marginBottom: "30px",
    fontStyle: "italic",
    color: "#06b6d4",
    fontSize: "clamp(14px, 4vw, 18px)",
    lineHeight: "1.6",
  },
  features: {
    display: "flex",
    gap: "clamp(10px, 3vw, 20px)",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "35px",
    marginBottom: "35px",
    padding: "0 10px",
  },
  feature: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(236, 72, 153, 0.2))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "12px",
    padding: "clamp(10px, 3vw, 15px) clamp(15px, 4vw, 25px)",
    color: "#f1f5f9",
    fontSize: "clamp(13px, 3vw, 16px)",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  btn: {
    marginTop: "30px",
    padding: "clamp(12px, 3vw, 18px) clamp(30px, 8vw, 50px)",
    fontSize: "clamp(14px, 4vw, 20px)",
    fontWeight: "700",
    borderRadius: "50px",
    border: "none",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 30px rgba(6, 182, 212, 0.4)",
  },
};
