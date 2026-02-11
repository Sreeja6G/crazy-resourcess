export default function Founders() {
  return (
    <section style={styles.section}>
      <h2 style={styles.mainTitle}>Built by Students, for Students ❤️</h2>
      <p style={styles.subtitle}>Meet the visionaries behind Crazy Resources</p>

      <div style={styles.cards}>
        {/* Founder 1 */}
        <div style={styles.card} data-animate>
          <div style={styles.photoContainer}>
            <img
              src="/sreeja.jpeg"
              alt="Sreeja"
              style={styles.photo}
            />
          </div>
          <h3 style={styles.founderName}>✨ Sreeja</h3>
          <p style={styles.role}>Content Creator & Product Lead</p>

          <div style={styles.highlightBox}>
            <p style={styles.highlightTitle}>What She Does:</p>
            <p style={styles.highlightText}>
              Turns ideas into engaging content & builds products that students love 🎬
            </p>
          </div>

          <div style={styles.descriptionBox}>
            <p style={styles.description}>
              Creative entrepreneur transforming startup visions into reality. B.Tech student with a passion for building communities and creating meaningful impact.
            </p>
          </div>

          <div style={styles.passionBox}>
            <p style={styles.passionTitle}>🔥 Passionate About:</p>
            <ul style={styles.passionList}>
              <li>Content creation & storytelling</li>
              <li>Building startups from scratch</li>
              <li>Creative problem solving</li>
              <li>Community building</li>
            </ul>
          </div>

          <p style={styles.quote}>
            "Creativity meets Code" ✨
          </p>

          <div style={styles.funFact}>
            💡 <strong>Fun Fact:</strong> Can turn coffee into code & content ☕
          </div>
        </div>

        {/* Founder 2 */}
        <div style={styles.card} data-animate>
          <div style={styles.photoContainer}>
            <img
              src="/sai kiran.png"
              alt="Sai Kiran"
              style={styles.photo}
            />
          </div>
          <h3 style={styles.founderName}>🔐 Sai Kiran</h3>
          <p style={styles.role}>Builder & Tech Lead</p>

          <div style={styles.highlightBox}>
            <p style={styles.highlightTitle}>What He Does:</p>
            <p style={styles.highlightText}>
              Builds secure, scalable products & leads the tech vision 🛡️
            </p>
          </div>

          <div style={styles.descriptionBox}>
            <p style={styles.description}>
              Cybersecurity expert and innovative problem solver. B.Tech student building own startup with a vision to secure the digital world and empower developers.
            </p>
          </div>

          <div style={styles.passionBox}>
            <p style={styles.passionTitle}>🔥 Passionate About:</p>
            <ul style={styles.passionList}>
              <li>Cybersecurity & ethical hacking</li>
              <li>Building innovative products</li>
              <li>Advanced problem solving</li>
              <li>Tech mentorship & leadership</li>
            </ul>
          </div>

          <p style={styles.quote}>
            "Security is not a feature, it's a foundation" 🔒
          </p>

          <div style={styles.funFact}>
            💡 <strong>Fun Fact:</strong> Hacks systems (legally) before anyone else can 🎯
          </div>
        </div>
      </div>

      {/* Fun Memes Section */}
      <div style={styles.memesSection}>
        <h2 style={styles.memesTitle} className="section-title">Founder Memes 😂</h2>
        <div style={styles.memesGrid} className="responsive-grid">
          <div style={styles.memeCard} data-animate>
            <div style={styles.memeImage}>💻</div>
            <p><strong>Sreeja:</strong> "One more feature request..." 😅</p>
          </div>
          <div style={styles.memeCard} data-animate>
            <div style={styles.memeImage}>🔐</div>
            <p><strong>Sai Kiran:</strong> "Have you tried turning it off and on again?" 🔄</p>
          </div>
          <div style={styles.memeCard} data-animate>
            <div style={styles.memeImage}>🚀</div>
            <p><strong>Both:</strong> "It works on my machine... in production? 👀"</p>
          </div>
          <div style={styles.memeCard} data-animate>
            <div style={styles.memeImage}>☕</div>
            <p><strong>Daily Mood:</strong> "Coffee in ➡️ Features out 📤"</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px min(60px, 5%)",
    textAlign: "center",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.7), rgba(26, 26, 62, 0.7))",
    borderTop: "1px solid rgba(6, 182, 212, 0.1)",
  },
  mainTitle: {
    fontSize: "48px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "40px",
    fontWeight: "500",
  },
  cards: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "40px",
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    padding: "30px 20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    boxShadow: "0 15px 40px rgba(6, 182, 212, 0.2)",
    color: "#f1f5f9",
    transition: "all 0.3s ease",
    position: "relative",
  },
  founderName: {
    fontSize: "28px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "8px",
    marginTop: "20px",
  },
  photoContainer: {
    position: "relative",
    width: "min(200px, 80%)",
    height: "auto",
    aspectRatio: "1",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto 20px",
    border: "5px solid rgba(6, 182, 212, 0.4)",
    boxShadow: "0 12px 40px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    transition: "transform 0.3s ease, filter 0.3s ease",
    cursor: "pointer",
  },
  photoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(6, 182, 212, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
    backdropFilter: "blur(5px)",
  },
  overlayText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  },
  quote: {
    marginTop: "20px",
    marginBottom: "15px",
    fontStyle: "italic",
    color: "#06b6d4",
    fontSize: "16px",
    fontWeight: "600",
    background: "rgba(6, 182, 212, 0.1)",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
  },
  role: {
    fontSize: "15px",
    color: "#fbbf24",
    fontWeight: "700",
    marginTop: "5px",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#cbd5e1",
  },
  highlightBox: {
    background: "linear-gradient(135deg, rgba(132, 204, 22, 0.2), rgba(6, 182, 212, 0.2))",
    border: "2px solid rgba(132, 204, 22, 0.4)",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "16px",
    boxShadow: "0 6px 20px rgba(132, 204, 22, 0.15)",
  },
  highlightTitle: {
    fontSize: "13px",
    fontWeight: "800",
    color: "#84cc16",
    margin: "0 0 8px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  highlightText: {
    fontSize: "15px",
    color: "#f1f5f9",
    fontWeight: "600",
    margin: "0",
    lineHeight: "1.6",
  },
  descriptionBox: {
    background: "rgba(6, 182, 212, 0.1)",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "16px",
  },
  passionBox: {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(6, 182, 212, 0.15))",
    border: "2px solid rgba(236, 72, 153, 0.3)",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 6px 20px rgba(236, 72, 153, 0.15)",
  },
  passionTitle: {
    fontSize: "14px",
    fontWeight: "800",
    color: "#ec4899",
    margin: "0 0 10px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  passionList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    textAlign: "left",
    fontSize: "13px",
    color: "#cbd5e1",
    lineHeight: "2",
  },
  funFact: {
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(6, 182, 212, 0.15))",
    border: "2px solid rgba(251, 191, 36, 0.3)",
    borderRadius: "10px",
    padding: "12px",
    marginTop: "16px",
    fontSize: "13px",
    color: "#fbbf24",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(251, 191, 36, 0.15)",
  },
  memesSection: {
    marginTop: "60px",
    paddingTop: "40px",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  memesTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #06b6d4, #84cc16, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "40px",
  },
  memesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  memeCard: {
    background: "linear-gradient(135deg, rgba(132, 204, 22, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(132, 204, 22, 0.3)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    color: "#f1f5f9",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  memeImage: {
    fontSize: "48px",
    marginBottom: "12px",
  },
};
