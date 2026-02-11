import { useState } from "react";

export default function AITools({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");

  const aiTools = {
    "Writing & Content": [
      { name: "ChatGPT", description: "AI writing assistant for essays, articles, and content creation", url: "https://chatgpt.com" },
      { name: "Jasper", description: "AI copywriter for marketing and content", url: "https://jasper.ai" },
      { name: "Copy.ai", description: "Fast AI writing for marketing copy", url: "https://copy.ai" },
      { name: "Rytr", description: "AI writing assistant for all types of content", url: "https://rytr.me" },
      { name: "Grammarly", description: "AI-powered grammar and writing suggestions", url: "https://grammarly.com" },
      { name: "Quillbot", description: "Paraphrase and rewrite text with AI", url: "https://quillbot.com" },
      { name: "Sudowrite", description: "AI writing partner for creative fiction", url: "https://sudowrite.com" },
      { name: "Hemingway Editor", description: "AI editor for clearer writing", url: "https://hemingwayapp.com" },
    ],
    "Image Generation": [
      { name: "Midjourney", description: "AI image generation from text prompts", url: "https://midjourney.com" },
      { name: "DALL-E", description: "OpenAI's image generator from text descriptions", url: "https://openai.com/dall-e" },
      { name: "Stable Diffusion", description: "Open-source AI image generation model", url: "https://stablediffusion.com" },
      { name: "Adobe Firefly", description: "Generative fill and text-to-image by Adobe", url: "https://firefly.adobe.com" },
      { name: "Canva AI", description: "AI design tools built into Canva", url: "https://canva.com" },
      { name: "Photoshop Generative Fill", description: "AI-powered content generation in Photoshop", url: "https://adobe.com/products/photoshop" },
      { name: "Leonardo.ai", description: "AI image generation for creators", url: "https://leonardo.ai" },
      { name: "Runway", description: "AI tools for video and image creation", url: "https://runwayml.com" },
    ],
    "Video & Audio": [
      { name: "Synthesia", description: "Create videos with AI avatars and voices", url: "https://synthesia.io" },
      { name: "Descript", description: "AI video and podcast editing tool", url: "https://descript.com" },
      { name: "Eleven Labs", description: "AI voice generation and cloning", url: "https://elevenlabs.io" },
      { name: "Murf", description: "AI voice generator for videos", url: "https://murf.ai" },
      { name: "Runway ML", description: "AI video editing and generation", url: "https://runwayml.com" },
      { name: "HeyGen", description: "Create AI avatar videos easily", url: "https://heygen.com" },
      { name: "Fliki", description: "Convert text to video with AI", url: "https://fliki.ai" },
      { name: "Loom", description: "Screen recording with AI features", url: "https://loom.com" },
    ],
    "Coding & Development": [
      { name: "GitHub Copilot", description: "AI code suggestions while you write", url: "https://github.com/features/copilot" },
      { name: "Tabnine", description: "AI code completion for faster coding", url: "https://tabnine.com" },
      { name: "Replit", description: "AI-powered collaborative coding platform", url: "https://replit.com" },
      { name: "CodePal", description: "AI code generation and debugging", url: "https://codepal.ai" },
      { name: "Ghostwriter", description: "Code suggestions by Replit", url: "https://replit.com/ghostwriter" },
      { name: "Amazon CodeWhisperer", description: "ML-powered coding companion", url: "https://aws.amazon.com/codewhisperer" },
      { name: "Mintlify", description: "AI documentation generator", url: "https://mintlify.com" },
      { name: "Cursor", description: "AI-first code editor", url: "https://cursor.com" },
    ],
    "Learning & Education": [
      { name: "Khan Academy", description: "AI-powered personalized learning", url: "https://khanacademy.org" },
      { name: "Duolingo", description: "AI language learning app", url: "https://duolingo.com" },
      { name: "Coursera", description: "Online courses with AI recommendations", url: "https://coursera.org" },
      { name: "Udemy", description: "Thousands of courses powered by AI search", url: "https://udemy.com" },
      { name: "Turnitin", description: "AI plagiarism detection tool", url: "https://turnitin.com" },
      { name: "Chegg", description: "AI-powered homework help platform", url: "https://chegg.com" },
      { name: "Brilliant.org", description: "Interactive learning with AI tutoring", url: "https://brilliant.org" },
      { name: "AlgoExpert", description: "AI interview prep and coding practice", url: "https://algoexpert.io" },
    ],
    "Research & Analysis": [
      { name: "Consensus", description: "AI research paper search engine", url: "https://consensus.app" },
      { name: "Connected Papers", description: "AI visualization of research networks", url: "https://connectedpapers.com" },
      { name: "SciSpace", description: "AI paper reading and research tool", url: "https://scispace.com" },
      { name: "Elicit", description: "AI research assistant for literature review", url: "https://elicit.org" },
      { name: "Perplexity AI", description: "AI search engine for research", url: "https://perplexity.ai" },
      { name: "ResearchGate", description: "AI-powered research network", url: "https://researchgate.net" },
      { name: "Semantic Scholar", description: "AI-powered academic search", url: "https://semanticscholar.org" },
      { name: "Scopus", description: "Abstract and citation database with AI", url: "https://scopus.com" },
    ],
    "Design & Creativity": [
      { name: "Figma AI", description: "AI design tools in Figma", url: "https://figma.com" },
      { name: "Adobe Creative Cloud", description: "Generative AI across design apps", url: "https://adobe.com/creativecloud" },
      { name: "Looka", description: "AI logo and brand generator", url: "https://looka.com" },
      { name: "Brandmark", description: "AI branding and logo design", url: "https://brandmark.io" },
      { name: "DesignWizard", description: "AI design templates and editor", url: "https://designwizard.com" },
      { name: "Visme", description: "AI-powered design platform", url: "https://visme.co" },
      { name: "Picasso", description: "AI image editor and enhancer", url: "https://picasso.app" },
      { name: "Remove.bg", description: "AI background removal tool", url: "https://remove.bg" },
    ],
    "Business & Productivity": [
      { name: "Microsoft Copilot", description: "AI assistant across Microsoft 365", url: "https://copilot.microsoft.com" },
      { name: "Notion AI", description: "AI writing and task automation in Notion", url: "https://notion.so" },
      { name: "Zapier AI", description: "AI workflow automation", url: "https://zapier.com" },
      { name: "HubSpot", description: "CRM with AI-powered insights", url: "https://hubspot.com" },
      { name: "Slack", description: "AI search and summarization in Slack", url: "https://slack.com" },
      { name: "Asana AI", description: "AI project management assistant", url: "https://asana.com" },
      { name: "Monday.com", description: "AI workflow automation platform", url: "https://monday.com" },
      { name: "Salesforce Einstein", description: "AI CRM capabilities", url: "https://salesforce.com/einstein" },
    ],
    "Math & Science": [
      { name: "Wolfram Alpha", description: "AI computational knowledge engine", url: "https://wolframalpha.com" },
      { name: "Photomath", description: "AI math problem solver with steps", url: "https://photomath.app" },
      { name: "Microsoft Math Solver", description: "AI math problem solver", url: "https://mathsolver.microsoft.com" },
      { name: "Symbolab", description: "Math problem solver with AI", url: "https://symbolab.com" },
      { name: "ChatGPT Math", description: "Advanced math problem solving", url: "https://chatgpt.com" },
      { name: "GeoGebra", description: "Interactive geometry with AI help", url: "https://geogebra.org" },
      { name: "Desmos", description: "Graphing calculator with AI features", url: "https://desmos.com" },
      { name: "MATLAB", description: "Scientific computing with AI tools", url: "https://mathworks.com/matlab" },
    ],
    "Translation & Language": [
      { name: "Google Translate", description: "AI-powered language translation", url: "https://translate.google.com" },
      { name: "DeepL", description: "High-quality neural machine translation", url: "https://deepl.com" },
      { name: "Microsoft Translator", description: "Multi-language AI translation", url: "https://translator.microsoft.com" },
      { name: "Papago", description: "Neural machine translation by Naver", url: "https://papago.naver.com" },
      { name: "Baidu Translate", description: "AI translation with OCR", url: "https://fanyi.baidu.com" },
      { name: "iTranslate", description: "AI translation app with voice", url: "https://itranslate.com" },
      { name: "Claude", description: "AI translation and language understanding", url: "https://claude.ai" },
      { name: "ChatGPT Languages", description: "Translate with conversational AI", url: "https://chatgpt.com" },
    ],
  };

  const allDomains = ["all", ...Object.keys(aiTools)];

  const filteredTools = selectedDomain === "all"
    ? Object.values(aiTools).flat()
    : aiTools[selectedDomain] || [];

  const searchResults = filteredTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
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
      marginBottom: "50px",
      marginTop: "20px",
    },
    filterBtn: {
      padding: "10px 20px",
      borderRadius: "25px",
      border: "2px solid rgba(6, 182, 212, 0.3)",
      background: "transparent",
      color: "#cbd5e1",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "14px",
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
    toolsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "25px",
      marginTop: "40px",
    },
    toolCard: {
      background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
      border: "2px solid rgba(6, 182, 212, 0.2)",
      borderRadius: "15px",
      padding: "25px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
    },
    toolCardHover: {
      borderColor: "rgba(6, 182, 212, 0.6)",
      boxShadow: "0 10px 40px rgba(6, 182, 212, 0.2)",
      transform: "translateY(-5px)",
    },
    toolName: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#f1f5f9",
      marginBottom: "10px",
      background: "linear-gradient(135deg, #06b6d4, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    toolDescription: {
      fontSize: "14px",
      color: "#cbd5e1",
      lineHeight: "1.6",
    },
    stats: {
      textAlign: "center",
      marginTop: "40px",
      padding: "20px",
      borderTop: "2px solid rgba(6, 182, 212, 0.2)",
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
        <h1 style={styles.title}>🤖 AI TOOLS LIBRARY</h1>
        <p style={styles.subtitle}>100+ AI Tools for Every Domain - Find the Perfect Tool for Your Needs</p>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search AI tools... (e.g., ChatGPT, Image Generation, Writing)"
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={(e) => e.target.style.boxShadow = "0 0 30px rgba(6, 182, 212, 0.3)"}
            onBlur={(e) => e.target.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.1)"}
          />
        </div>

        {/* Domain Filter */}
        <div style={styles.filterContainer}>
          {allDomains.map((domain) => (
            <button
              key={domain}
              style={{
                ...styles.filterBtn,
                ...(selectedDomain === domain ? styles.filterBtnActive : {}),
              }}
              onClick={() => {
                setSelectedDomain(domain);
                setSearchTerm("");
              }}
            >
              {domain === "all" ? "All Tools" : domain}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div style={styles.toolsGrid}>
          {searchResults.length > 0 ? (
            searchResults.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{...styles.toolCard, textDecoration: 'none'}}
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
                <h3 style={styles.toolName}>{tool.name}</h3>
                <p style={styles.toolDescription}>{tool.description}</p>
                <p style={{ fontSize: "12px", color: "#06b6d4", marginTop: "10px", fontWeight: "600" }}>VISIT TOOL →</p>
              </a>
            ))
          ) : (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px", color: "#cbd5e1" }}>
              <p style={{ fontSize: "18px" }}>No tools found. Try searching with different keywords!</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div style={styles.stats}>
          <p>📊 Showing {searchResults.length} of {Object.values(aiTools).flat().length} tools | {Object.keys(aiTools).length} domains covered</p>
        </div>
      </div>
    </div>
  );
}
