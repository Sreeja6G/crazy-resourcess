import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function EnglishCommunication({ setCurrentPage }) {
  const [sessionActive, setSessionActive] = useState(false);
  const [inGreenRoom, setInGreenRoom] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3600);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  // AI & Voice States
  const [aiMessage, setAiMessage] = useState("Initializing Sarah AI...");
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [aiFeedback, setAiFeedback] = useState({ grammar: "Ready", tone: "Ready", vocabulary: "Ready" });

  // Daily Tracking
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem("eng_streak") || "0"));

  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const modelRef = useRef(null);

  const [hasCompletedToday, setHasCompletedToday] = useState(() => {
    const lastSession = localStorage.getItem("lastEnglishSession");
    const today = new Date().toDateString();
    return lastSession === today;
  });

  // Initialize Gemini & Speech Recognition
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey && apiKey !== "undefined") {
      const genAI = new GoogleGenerativeAI(apiKey);
      modelRef.current = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        processUserSpeech(text);
      };

      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = () => setIsListening(false);
    }
  }, []);

  const triggerAiSpeech = (text) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.0;
    utterance.pitch = 1.1;
    utterance.onstart = () => setIsAiSpeaking(true);
    utterance.onend = () => setIsAiSpeaking(false);
    setAiMessage(text);
    synthRef.current.speak(utterance);
  };

  const startListening = () => {
    if (isAiSpeaking || isProcessing) return;
    setTranscript("");
    setIsListening(true);
    try { recognitionRef.current.start(); } catch (e) { }
  };

  const processUserSpeech = async (text) => {
    if (!modelRef.current) return;
    setIsProcessing(true);
    setTranscript(text);
    try {
      const prompt = `
        You are Sarah, an expert English Communication Coach. 
        The user just said: "${text}".
        Task: Respond concisely (max 2 sentences) and analyze their speech for professional feedback.
        Output MUST be a single raw JSON object: {"response": "...", "analysis": {"grammar": "...", "tone": "...", "vocabulary": "..."}}
      `;

      const result = await modelRef.current.generateContent(prompt);
      let responseText = result.response.text();
      const cleanJson = responseText.replace(/```json|```/gi, '').trim();
      const data = JSON.parse(cleanJson);

      setAiFeedback(data.analysis);
      triggerAiSpeech(data.response);
    } catch (error) {
      console.error("Gemini Error:", error);
      triggerAiSpeech("Connection error. Let's try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Timer effect
  useEffect(() => {
    if (!sessionActive || timeRemaining <= 0) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setSessionActive(false);
          const today = new Date().toDateString();
          localStorage.setItem("lastEnglishSession", today);
          setHasCompletedToday(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [sessionActive, timeRemaining]);

  const enterGreenRoom = () => setInGreenRoom(true);

  const startSession = () => {
    setInGreenRoom(false);
    setSessionActive(true);
    setTimeRemaining(15 * 60); // 15 min daily session
    setTimeout(() => {
      triggerAiSpeech("Welcome to your virtual masterclass. I am Sarah, your AI coach. How can I assist you today?");
    }, 1000);
  };

  const endSession = () => {
    if (window.confirm("Leave the meeting?")) {
      setSessionActive(false);
      synthRef.current.cancel();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const GreenRoom = () => (
    <div style={styles.greenRoomContainer}>
      <nav style={styles.navbarLite}>
        <div style={styles.logoGroup}>
          <h1 style={styles.meetLogo} onClick={() => setCurrentPage('home')}>Crazy Resources Meet</h1>
        </div>
      </nav>

      <div style={styles.greenRoomBody}>
        <div style={styles.previewSection}>
          <div style={styles.videoCard}>
            {isVideoOff ? (
              <div style={styles.avatarCircle}>YOU</div>
            ) : (
              <div style={styles.liveFeed}>
                <div style={styles.staticGrain}></div>
                <div style={styles.cameraStatus}>Camera is on</div>
              </div>
            )}
            <div style={styles.previewActions}>
              <button onClick={() => setIsMuted(!isMuted)} style={{ ...styles.controlIcon, backgroundColor: isMuted ? '#ea4335' : 'rgba(0,0,0,0.4)' }}>
                {isMuted ? "🎤" : "🎙️"}
              </button>
              <button onClick={() => setIsVideoOff(!isVideoOff)} style={{ ...styles.controlIcon, backgroundColor: isVideoOff ? '#ea4335' : 'rgba(0,0,0,0.4)' }}>
                {isVideoOff ? "🎥" : "📹"}
              </button>
            </div>
          </div>
        </div>

        <div style={styles.joinSection}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#fff' }}>Ready to join?</h2>
          <p style={{ color: '#94a3b8', margin: '15px 0 30px 0' }}>No one else is in this session.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={startSession} style={styles.joinBtnLarge}>Join now</button>
            <button style={styles.presentBtnLarge}>Present</button>
          </div>
          <p style={{ marginTop: '40px', fontSize: '13px', color: '#444ce7', cursor: 'pointer' }}>Use companion mode</p>
        </div>
      </div>
    </div>
  );

  const LiveMeeting = () => (
    <div style={styles.liveMeetingContainer}>
      {/* Global Voice Waves */}
      {(isAiSpeaking || isListening) && (
        <div style={styles.globalVoiceHud}>
          <div className="voice-waves">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      )}

      <header style={styles.liveHeader}>
        <div style={styles.meetingIdTag}>meeting-ai-sarah- {formatTime(timeRemaining).replace(':', '')}</div>
        <div style={styles.timerTag}>{formatTime(timeRemaining)}</div>
      </header>

      <main style={styles.visualGrid}>
        {/* Main Content Area */}
        <div style={styles.stageGrid}>
          {/* AI COACH Card */}
          <div style={{ ...styles.stageCard, border: isAiSpeaking ? '2px solid #ec4899' : '1px solid rgba(255,255,255,0.05)' }}>
            <div style={styles.aiStream}>
              <div style={styles.sarahHud}>
                <div style={styles.hudScanline}></div>
                <div style={styles.hudLabel}>{isProcessing ? "PROCESSING..." : "SARAH_OS"}</div>
              </div>
              {isAiSpeaking && <div style={styles.voicePulse}></div>}
              <div style={{ ...styles.stageAvatar, boxShadow: isAiSpeaking ? '0 0 50px rgba(236, 72, 153, 0.4)' : 'none' }}>S</div>
              {aiMessage && !isProcessing && (
                <div style={styles.aiMeetDialogue}>{aiMessage}</div>
              )}
            </div>
            <div style={styles.participantName}>Sarah — AI Communication Coach</div>
          </div>

          {/* USER Card */}
          <div style={{ ...styles.stageCard, border: isListening ? '2px solid #06b6d4' : '1px solid rgba(255,255,255,0.05)' }}>
            <div style={styles.userStream}>
              {isVideoOff ? <div style={styles.stageAvatar}>U</div> : <div style={styles.staticGrain}></div>}
              {isListening && <div style={{ ...styles.voicePulse, backgroundColor: '#06b6d4' }}></div>}
              {transcript && isListening && <div style={styles.userTranscription}>{transcript}</div>}
            </div>
            <div style={styles.participantName}>You {isListening && "(Speaking...)"}</div>
          </div>
        </div>

        {/* Right Sidebar Analytics */}
        <aside style={styles.liveSidebar}>
          <div style={styles.statCard}>
            <h4 style={styles.statLabel}>Grammar</h4>
            <div style={styles.statValue}>{aiFeedback.grammar}</div>
          </div>
          <div style={styles.statCard}>
            <h4 style={styles.statLabel}>Tone</h4>
            <div style={styles.statValue}>{aiFeedback.tone}</div>
          </div>
          <div style={styles.statCard}>
            <h4 style={styles.statLabel}>Vocabulary</h4>
            <div style={styles.statValue}>{aiFeedback.vocabulary}</div>
          </div>
          <div style={{ marginTop: 'auto', padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}>
            <div style={{ fontSize: '10px', color: '#475569', marginBottom: '5px' }}>HINT</div>
            <p style={{ fontSize: '11px', color: '#94a3b8' }}>Try saying "Hello Sarah, can you help me with a mock interview?"</p>
          </div>
        </aside>
      </main>

      {/* Floating Control Bar (Google Meet Style) */}
      <footer style={styles.liveFooter}>
        <div style={styles.footerLeft}>
          <div style={styles.timeDisplay}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | cr-ai-meet</div>
        </div>

        <div style={styles.footerCenter}>
          <button onClick={() => setIsMuted(!isMuted)} style={{ ...styles.meetControlBtn, backgroundColor: isMuted ? '#ea4335' : '#3c4043' }}>
            {isMuted ? '🔇' : '🎙️'}
          </button>
          <button onClick={() => setIsVideoOff(!isVideoOff)} style={{ ...styles.meetControlBtn, backgroundColor: isVideoOff ? '#ea4335' : '#3c4043' }}>
            {isVideoOff ? '🎥' : '📹'}
          </button>
          <button
            onClick={startListening}
            disabled={isAiSpeaking}
            style={{ ...styles.meetControlBtn, padding: '10px 25px', borderRadius: '30px', width: 'auto', backgroundColor: isListening ? '#06b6d4' : '#fff', color: '#000' }}
          >
            {isListening ? "⏹️ LISTENING" : "🎤 TAP TO SPEAK"}
          </button>
          <button style={{ ...styles.meetControlBtn, backgroundColor: '#3c4043' }}>💬</button>
          <button onClick={endSession} style={{ ...styles.meetControlBtn, backgroundColor: '#ea4335', width: '60px', borderRadius: '30px' }}>
            📞
          </button>
        </div>

        <div style={styles.footerRight}>
          <div style={styles.infoCircle}>i</div>
        </div>
      </footer>

      <style>
        {`
            .voice-waves { display: flex; gap: 4px; align-items: center; }
            .voice-waves span { width: 3px; height: 10px; background: #06b6d4; animation: meet-wave 1s infinite; }
            .voice-waves span:nth-child(2) { animation-delay: 0.2s; background: #ec4899; }
            .voice-waves span:nth-child(3) { animation-delay: 0.4s; }
            @keyframes meet-wave { 0%, 100% { height: 10px; } 50% { height: 25px; } }
            @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.7; } 100% { transform: scale(1.5); opacity: 0; } }
            @keyframes scanline { 0% { top: 0; } 100% { top: 100%; } }
          `}
      </style>
    </div>
  );

  return (
    <div style={styles.root}>
      {sessionActive ? (
        <LiveMeeting />
      ) : inGreenRoom ? (
        <GreenRoom />
      ) : (
        <div style={styles.dashboard}>
          {/* Main Dashboard Navigation */}
          <nav style={styles.navMain}>
            <h1 style={styles.logoBrand} onClick={() => setCurrentPage('home')}>Crazy Resources</h1>
            <button style={styles.backLink} onClick={() => setCurrentPage('home')}>Back to Home</button>
          </nav>

          <main style={styles.dashContent}>
            <div style={styles.dashHeader}>
              <div style={styles.streakCount}>
                <span>🔥 {streak} DAY STREAK</span>
              </div>
              <h1 style={styles.dashTitle}>Communication Lab</h1>
              <p style={styles.dashSubtitle}>Connect with Sarah AI for your daily professional mastery session.</p>
            </div>

            <div style={styles.joinCard}>
              <div style={styles.mentorStatus}>
                <div style={{ ...styles.statusDot, backgroundColor: modelRef.current ? '#22c55e' : '#64748b' }}></div>
                <span>{modelRef.current ? "Sarah is Online & Ready" : "System Initializing..."}</span>
              </div>

              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Daily Session: 15 Minutes</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '30px' }}>Focus: Professional introduction and confidence building.</p>

              <button
                onClick={enterGreenRoom}
                style={{ ...styles.launchBtn, opacity: modelRef.current ? 1 : 0.5 }}
                disabled={!modelRef.current}
              >
                START VIRTUAL MEETING
              </button>

              {!modelRef.current && (
                <p style={{ color: '#ea4335', fontSize: '11px', marginTop: '20px' }}>
                  ⚠️ API initialization failed. Please check your .env file or terminal.
                </p>
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#202124",
    color: "#fff",
    fontFamily: "'Inter', sans-serif"
  },
  dashboard: {
    padding: "0 0 50px 0"
  },
  navMain: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 5%",
    borderBottom: "1px solid rgba(255,255,255,0.05)"
  },
  logoBrand: {
    fontSize: "24px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer"
  },
  backLink: {
    background: "none",
    border: "1px solid rgba(6, 182, 212, 0.4)",
    color: "#06b6d4",
    padding: "8px 18px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  dashContent: {
    maxWidth: "800px",
    margin: "80px auto",
    textAlign: "center"
  },
  streakCount: {
    display: "inline-block",
    padding: "6px 15px",
    background: "rgba(234, 67, 53, 0.1)",
    border: "1px solid rgba(234, 67, 53, 0.2)",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#ea4335",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  dashTitle: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "15px"
  },
  dashSubtitle: {
    color: "#94a3b8",
    fontSize: "18px",
    marginBottom: "50px"
  },
  joinCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
    padding: "40px",
    borderRadius: "24px"
  },
  mentorStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "13px",
    color: "#94a3b8",
    marginBottom: "30px"
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%"
  },
  launchBtn: {
    padding: "16px 40px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },
  greenRoomContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#202124"
  },
  navbarLite: {
    height: "64px",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  meetLogo: {
    fontSize: "20px",
    color: "#5f6368",
    fontWeight: "500",
    cursor: "pointer"
  },
  greenRoomBody: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10%",
    gap: "80px"
  },
  previewSection: {
    flex: 1,
    maxWidth: "700px"
  },
  videoCard: {
    aspectRatio: "16/9",
    backgroundColor: "#111",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden"
  },
  avatarCircle: {
    width: "120px",
    height: "120px",
    background: "#3c4043",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  liveFeed: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, #1e1e1e, #2d2d2d)"
  },
  previewActions: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "15px"
  },
  controlIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.3)",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  joinSection: {
    width: "400px"
  },
  joinBtnLarge: {
    padding: "12px 30px",
    backgroundColor: "#1a73e8",
    color: "#fff",
    border: "none",
    borderRadius: "24px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  presentBtnLarge: {
    padding: "12px 30px",
    backgroundColor: "transparent",
    color: "#1a73e8",
    border: "1px solid #1a73e8",
    borderRadius: "24px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  liveMeetingContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000"
  },
  liveHeader: {
    height: "60px",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(180deg, rgba(0,0,0,0.8), transparent)"
  },
  meetingIdTag: {
    color: "#fff",
    fontSize: "14px"
  },
  timerTag: {
    background: "rgba(234, 67, 53, 0.2)",
    color: "#ea4335",
    padding: "4px 12px",
    borderRadius: "4px",
    fontSize: "13px",
    fontWeight: "bold"
  },
  visualGrid: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    padding: "20px",
    gap: "20px"
  },
  stageGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px"
  },
  stageCard: {
    backgroundColor: "#111",
    borderRadius: "12px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  aiStream: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "linear-gradient(135deg, #0a0a1a, #1a0a1a)"
  },
  userStream: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#050505"
  },
  stageAvatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "bold"
  },
  participantName: {
    padding: "10px 15px",
    fontSize: "12px",
    color: "#94a3b8"
  },
  aiMeetDialogue: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    right: "20px",
    background: "rgba(0,0,0,0.85)",
    border: "1px solid #ec4899",
    padding: "12px 20px",
    borderRadius: "10px",
    fontSize: "13px",
    lineHeight: "1.4"
  },
  userTranscription: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    right: "20px",
    background: "rgba(0,182,212,0.1)",
    border: "1px solid #06b6d4",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "12px",
    textAlign: "center"
  },
  liveSidebar: {
    background: "#111",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  statCard: {
    padding: "15px",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "8px"
  },
  statLabel: {
    fontSize: "10px",
    textTransform: "uppercase",
    color: "#475569",
    marginBottom: "5px"
  },
  statValue: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#fff"
  },
  liveFooter: {
    height: "80px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    padding: "0 24px"
  },
  footerCenter: {
    display: "flex",
    gap: "12px"
  },
  meetControlBtn: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  voicePulse: {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "2px solid #ec4899",
    animation: "pulse-ring 2.5s infinite"
  },
  sarahHud: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 10
  },
  hudLabel: {
    fontSize: "10px",
    fontFamily: "monospace",
    color: "#ec4899",
    background: "rgba(0,0,0,0.5)",
    padding: "2px 6px"
  },
  staticGrain: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(255,255,255,0.02)',
    zIndex: 1
  },
  cameraStatus: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    fontSize: '11px',
    color: '#fff',
    zIndex: 2,
    background: 'rgba(0,0,0,0.5)',
    padding: '4px 10px',
    borderRadius: '4px'
  },
  previewOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '14px',
    color: '#94a3b8'
  },
  globalVoiceHud: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    background: 'rgba(0,0,0,0.8)',
    padding: '10px 25px',
    borderRadius: '30px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  footerLeft: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff'
  },
  footerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px'
  },
  timeDisplay: {
    fontSize: '14px',
    fontWeight: '500'
  },
  infoCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    opacity: 0.7
  }
};
