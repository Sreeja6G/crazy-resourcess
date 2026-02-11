export default function Memes() {
  return (
    <section style={styles.box}>
      <h2>Student Life Be Like 😂</h2>

      <ul style={styles.list}>
        <li>📢 Internship open undi anta</li>
        <li>😌 Student: “Repudu chusta le”</li>
        <li>⏰ Deadline over</li>
        <li style={{ color: "red", fontWeight: "bold" }}>
          😭 Student: “Nenu late ayya”
        </li>
      </ul>

      <p style={styles.note}>
        Don’t worry… Crazy Resources will remind you 😉
      </p>
    </section>
  );
}

const styles = {
  box: {
    padding: "60px",
    textAlign: "center",
    background: "#faf5ff",
  },
  list: {
    listStyle: "none",
    fontSize: "18px",
    marginTop: "20px",
    lineHeight: "2",
  },
  note: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#15803d",
  },
};
