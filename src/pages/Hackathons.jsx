import { useState } from "react";

const hackathonsData = [
  {
    id: 1,
    name: "HACKMoR 2026",
    date: "Jan 28 - 30, 2026",
    prize: "₹45,000",
    participants: "200+",
    category: "General",
    description: "Hackathon at Manav Rachna University with real projects",
    link: "https://unstop.com/hackathons/hackmor-2026-manav-rachna-university-faridabad-1627233",
    icon: "🎓",
  },
  {
    id: 2,
    name: "HackRU 2026",
    date: "Feb 01 - 03, 2026",
    prize: "₹50,00,000+",
    participants: "500+",
    category: "Web Development",
    description: "One of the largest hackathons in North America",
    link: "https://hackru.org/",
    icon: "💻",
  },
  {
    id: 3,
    name: "Hack@Brown 2026",
    date: "Feb 05 - 07, 2026",
    prize: "₹25,00,000+",
    participants: "800+",
    category: "AI/ML",
    description: "Design and ship innovative AI projects",
    link: "https://hackatbrown.org/",
    icon: "🤖",
  },
  {
    id: 4,
    name: "HackPrinceton 2026",
    date: "Feb 10 - 12, 2026",
    prize: "₹40,00,000+",
    participants: "1000+",
    category: "Full Stack",
    description: "Build amazing full-stack applications",
    link: "https://www.hackprinceton.com/",
    icon: "🏆",
  },
  {
    id: 5,
    name: "UofTHacks 2026",
    date: "Feb 15 - 17, 2026",
    prize: "₹60,00,000+",
    participants: "1200+",
    category: "Open Innovation",
    description: "University of Toronto's massive annual hackathon",
    link: "https://uofthacks.com/",
    icon: "🌟",
  },
  {
    id: 6,
    name: "HackDuke 2026",
    date: "Feb 20 - 22, 2026",
    prize: "₹30,00,000+",
    participants: "600+",
    category: "Mobile Development",
    description: "Duke University's flagship hackathon experience",
    link: "https://hackduke.org/",
    icon: "📱",
  },
  {
    id: 7,
    name: "Hack NYU 2026",
    date: "Feb 25 - 27, 2026",
    prize: "₹45,00,000+",
    participants: "900+",
    category: "Innovation",
    description: "New York University's largest student-run hackathon",
    link: "https://www.hacknyu.org/",
    icon: "⚡",
  },
  {
    id: 8,
    name: "HackMIT 2026",
    date: "Mar 05 - 07, 2026",
    prize: "₹55,00,000+",
    participants: "1500+",
    category: "General",
    description: "MIT's premier hackathon bringing creative minds together",
    link: "https://hackmit.org/",
    icon: "🚀",
  },
  {
    id: 9,
    name: "Electrothon 2026",
    date: "Mar 10 - 12, 2026",
    prize: "₹35,00,000+",
    participants: "700+",
    category: "Creative Tech",
    description: "India's largest student hackathon from NIT Hamirpur",
    link: "https://electrothon.nith.ac.in/",
    icon: "💡",
  },
  {
    id: 10,
    name: "BoilerMake 2026",
    date: "Mar 15 - 17, 2026",
    prize: "₹20,00,000+",
    participants: "400+",
    category: "Cloud Computing",
    description: "Purdue University's premier hardware hackathon",
    link: "https://boilermake.org/",
    icon: "☁️",
  },
  {
    id: 11,
    name: "Cal Hacks 2026",
    date: "Mar 20 - 22, 2026",
    prize: "₹10,00,000+",
    participants: "250+",
    category: "Game Development",
    description: "The largest student-run hackathon in the world at UC Berkeley",
    link: "https://hackberkeley.org/",
    icon: "🎮",
  },
  {
    id: 12,
    name: "Hacklytics 2026",
    date: "Mar 25 - 27, 2026",
    prize: "₹32,00,000+",
    participants: "680+",
    category: "Data Science",
    description: "Georgia Tech's data science hackathon",
    link: "https://hacklytics.io/",
    icon: "📊",
  },
  {
    id: 13,
    name: "PennApps 2026",
    date: "Apr 01 - 03, 2026",
    prize: "₹28,00,000+",
    participants: "550+",
    category: "Cybersecurity",
    description: "One of the oldest and most prestigious college hackathons",
    link: "https://www.pennapps.com/",
    icon: "🔒",
  },
  {
    id: 14,
    name: "TAMUhack 2026",
    date: "Apr 05 - 07, 2026",
    prize: "₹38,00,000+",
    participants: "800+",
    category: "Web Development",
    description: "Biggest hackathon in Texas with amazing prizes",
    link: "https://tamuhack.org/",
    icon: "🧙",
  },
  {
    id: 15,
    name: "Rose Hack 2026",
    date: "Apr 10 - 12, 2026",
    prize: "₹24,00,000+",
    participants: "480+",
    category: "IoT",
    description: "UC Riverside's women-centered hackathon",
    link: "https://www.rosehack.com/",
    icon: "📡",
  },
  {
    id: 16,
    name: "Hack The North 2026",
    date: "Apr 15 - 17, 2026",
    prize: "₹26,00,000+",
    participants: "420+",
    category: "Artificial Intelligence",
    description: "Canada's largest hackathon with incredible opportunities",
    link: "https://hackthenorth.com/",
    icon: "🧠",
  },
  {
    id: 17,
    name: "HackHarvard 2026",
    date: "Apr 20 - 22, 2026",
    prize: "₹33,00,000+",
    participants: "750+",
    category: "Blockchain",
    description: "Harvard's premier hackathon for building world-class projects",
    link: "https://www.hackharvard.io/",
    icon: "⛓️",
  },
  {
    id: 18,
    name: "McHacks 2026",
    date: "Apr 25 - 27, 2026",
    prize: "₹19,00,000+",
    participants: "340+",
    category: "Mobile Development",
    description: "McGill University's largest hackathon event",
    link: "https://mchacks.ca/",
    icon: "📲",
  },
  {
    id: 19,
    name: "HackRIT 2026",
    date: "May 01 - 03, 2026",
    prize: "₹22,00,000+",
    participants: "450+",
    category: "Creative Tech",
    description: "Rochester Institute of Technology's creative hackathon",
    link: "https://brickhack.io/",
    icon: "🎨",
  },
  {
    id: 20,
    name: "HooHacks 2026",
    date: "May 05 - 07, 2026",
    prize: "₹18,00,000+",
    participants: "360+",
    category: "Sustainability",
    description: "University of Virginia's annual hackathon",
    link: "https://hoohacks.io/",
    icon: "🌱",
  },
  {
    id: 21,
    name: "HackerEarth Challenges",
    date: "May 10 - 12, 2026",
    prize: "₹25,00,000+",
    participants: "520+",
    category: "Virtual Reality",
    description: "Virtual and augmented reality showcase",
    link: "https://www.hackerearth.com/",
    icon: "🥽",
  },
  {
    id: 22,
    name: "GitHub Hackathon",
    date: "May 15 - 17, 2026",
    prize: "₹31,00,000+",
    participants: "720+",
    category: "Robotics",
    description: "Robotics and automation challenge",
    link: "https://devpost.com/",
    icon: "🤖",
  },
  {
    id: 23,
    name: "Unstop Hackathons",
    date: "May 20 - 22, 2026",
    prize: "₹28,00,000+",
    participants: "650+",
    category: "Healthcare Tech",
    description: "Healthcare technology innovation",
    link: "https://unstop.com/",
    icon: "🏥",
  },
  {
    id: 24,
    name: "MLH Hackathons",
    date: "May 25 - 27, 2026",
    prize: "₹29,00,000+",
    participants: "680+",
    category: "FinTech",
    description: "Financial technology hackathon",
    link: "https://mlh.io/",
    icon: "💰",
  },
  {
    id: 25,
    name: "Hackathon.com Events",
    date: "Jun 01 - 03, 2026",
    prize: "₹23,00,000+",
    participants: "450+",
    category: "Education Tech",
    description: "Educational technology solutions",
    link: "https://www.hackathon.com/",
    icon: "📚",
  },
  {
    id: 26,
    name: "SheHacks 2026",
    date: "Jun 05 - 07, 2026",
    prize: "₹20,00,000+",
    participants: "400+",
    category: "Social Good",
    description: "Technology for social impact",
    link: "https://shehacks.ca/",
    icon: "🤝",
  },
  {
    id: 27,
    name: "Pearl Hacks 2026",
    date: "Jun 10 - 12, 2026",
    prize: "₹22,00,000+",
    participants: "350+",
    category: "Women in Tech",
    description: "Women-focused innovation hackathon",
    link: "https://pearlhacks.com/",
    icon: "👩‍💻",
  },
  {
    id: 28,
    name: "Sustainable Tech Challenge",
    date: "Jun 15 - 17, 2026",
    prize: "₹15,00,000+",
    participants: "320+",
    category: "Green Technology",
    description: "Sustainable green technology innovations",
    link: "https://www.eventshigh.com/",
    icon: "♻️",
  },
  {
    id: 29,
    name: "Google Cloud Hackathons",
    date: "Jun 20 - 22, 2026",
    prize: "₹27,00,000+",
    participants: "620+",
    category: "Smart Cities",
    description: "Smart city technology solutions",
    link: "https://cloud.google.com/",
    icon: "🏙️",
  },
  {
    id: 30,
    name: "AWS Hackathon Series",
    date: "Jun 25 - 27, 2026",
    prize: "₹20,00,000+",
    participants: "380+",
    category: "Media Tech",
    description: "Media and entertainment technology",
    link: "https://aws.amazon.com/",
    icon: "🎬",
  },
  {
    id: 31,
    name: "Open Source Events",
    date: "Jul 01 - 03, 2026",
    prize: "₹10,00,000+",
    participants: "250+",
    category: "Open Source",
    description: "Open source software development",
    link: "https://opensource.org/",
    icon: "🔓",
  },
  {
    id: 32,
    name: "Azure Developer Challenge",
    date: "Jul 05 - 07, 2026",
    prize: "₹25,00,000+",
    participants: "530+",
    category: "DevOps",
    description: "DevOps and infrastructure automation",
    link: "https://azure.microsoft.com/",
    icon: "⚙️",
  },
  {
    id: 33,
    name: "IBM Quantum Hackathon",
    date: "Jul 10 - 12, 2026",
    prize: "₹35,00,000+",
    participants: "700+",
    category: "Quantum Computing",
    description: "Quantum computing innovation challenge",
    link: "https://quantum.ibm.com/",
    icon: "⚛️",
  },
  {
    id: 34,
    name: "HackerRank Competitions",
    date: "Jul 15 - 17, 2026",
    prize: "₹28,00,000+",
    participants: "650+",
    category: "Travel Tech",
    description: "Travel and tourism technology solutions",
    link: "https://www.hackerrank.com/",
    icon: "✈️",
  },
  {
    id: 35,
    name: "CodeForces Programming",
    date: "Jul 20 - 22, 2026",
    prize: "₹26,00,000+",
    participants: "580+",
    category: "FoodTech",
    description: "Food technology innovation showcase",
    link: "https://www.codeforces.com/",
    icon: "🍔",
  },
  {
    id: 36,
    name: "Red Bull Hack Challenge",
    date: "Jul 25 - 27, 2026",
    prize: "₹22,00,000+",
    participants: "450+",
    category: "Sports Tech",
    description: "Sports technology and fitness innovations",
    link: "https://www.redbull.com/",
    icon: "⚽",
  },
  {
    id: 37,
    name: "Splice Music Hackathon",
    date: "Aug 01 - 03, 2026",
    prize: "₹18,00,000+",
    participants: "360+",
    category: "Music Tech",
    description: "Music technology and audio innovation",
    link: "https://splice.com/",
    icon: "🎵",
  },
  {
    id: 38,
    name: "Vogue Fashion Tech",
    date: "Aug 05 - 07, 2026",
    prize: "₹24,00,000+",
    participants: "500+",
    category: "Fashion Tech",
    description: "Fashion and wearable technology",
    link: "https://www.vogue.com/",
    icon: "👗",
  },
  {
    id: 39,
    name: "AgriTech Solutions",
    date: "Aug 10 - 12, 2026",
    prize: "₹30,00,000+",
    participants: "700+",
    category: "Agriculture Tech",
    description: "Agricultural technology solutions",
    link: "https://www.agritech.org/",
    icon: "🌾",
  },
  {
    id: 40,
    name: "Ocean Foundation Challenge",
    date: "Aug 15 - 17, 2026",
    prize: "₹20,00,000+",
    participants: "420+",
    category: "Marine Tech",
    description: "Ocean and marine technology innovation",
    link: "https://www.oceanfoundation.org/",
    icon: "🌊",
  },
  {
    id: 41,
    name: "NREL Energy Solutions",
    date: "Aug 20 - 22, 2026",
    prize: "₹25,00,000+",
    participants: "530+",
    category: "Energy Tech",
    description: "Renewable energy and power solutions",
    link: "https://www.nrel.gov/",
    icon: "⚡",
  },
  {
    id: 42,
    name: "Shopify Retail Hackathon",
    date: "Aug 25 - 27, 2026",
    prize: "₹19,00,000+",
    participants: "380+",
    category: "Retail Tech",
    description: "Retail and e-commerce innovation",
    link: "https://www.shopify.com/",
    icon: "🛍️",
  },
  {
    id: 43,
    name: "Stripe Developer Summit",
    date: "Sep 01 - 03, 2026",
    prize: "₹23,00,000+",
    participants: "480+",
    category: "Developer Experience",
    description: "Developer experience and tools innovation",
    link: "https://www.stripe.com/",
    icon: "👨‍🔧",
  },
  {
    id: 44,
    name: "Cybereason Security Challenge",
    date: "Sep 05 - 07, 2026",
    prize: "₹21,00,000+",
    participants: "420+",
    category: "Cybersecurity",
    description: "Advanced cybersecurity solutions",
    link: "https://www.cybereason.com/",
    icon: "🛡️",
  },
  {
    id: 45,
    name: "Mozilla Privacy Challenge",
    date: "Sep 10 - 12, 2026",
    prize: "₹20,00,000+",
    participants: "400+",
    category: "Privacy Tech",
    description: "Privacy-focused technology innovations",
    link: "https://www.mozilla.org/",
    icon: "🔐",
  },
  {
    id: 46,
    name: "Unstop Global Challenge",
    date: "Sep 15 - 17, 2026",
    prize: "₹32,00,000+",
    participants: "720+",
    category: "General",
    description: "Global hackathon connecting worldwide developers",
    link: "https://www.unstop.com/",
    icon: "🌍",
  },
  {
    id: 47,
    name: "TensorFlow Machine Learning",
    date: "Sep 20 - 22, 2026",
    prize: "₹28,00,000+",
    participants: "640+",
    category: "Deep Learning",
    description: "Neural networks and deep learning challenge",
    link: "https://www.tensorflow.org/",
    icon: "🧠",
  },
  {
    id: 48,
    name: "5G Alliance Connectivity",
    date: "Sep 25 - 27, 2026",
    prize: "₹24,00,000+",
    participants: "500+",
    category: "5G/6G Tech",
    description: "Next-gen connectivity and networking",
    link: "https://www.5gaa.org/",
    icon: "📶",
  },
  {
    id: 49,
    name: "Heroku Full Stack Challenge",
    date: "Oct 01 - 03, 2026",
    prize: "₹26,00,000+",
    participants: "550+",
    category: "Full Stack",
    description: "Modern full-stack development showcase",
    link: "https://www.heroku.com/",
    icon: "💻",
  },
  {
    id: 50,
    name: "GitHub Developer Summit",
    date: "Oct 05 - 07, 2026",
    prize: "₹30,00,000+",
    participants: "700+",
    category: "General",
    description: "Final grand hackathon of 2026",
    link: "https://www.github.com/",
    icon: "👑",
  },
  {
    id: 51,
    name: "RPA Automation Masters",
    date: "Oct 10 - 12, 2026",
    prize: "₹29,00,000+",
    participants: "680+",
    category: "Automation",
    description: "Industrial automation and robotics",
    link: "https://www.uipath.com/",
    icon: "🤖",
  },
  {
    id: 52,
    name: "NCBI Bioinformatics Challenge",
    date: "Oct 15 - 17, 2026",
    prize: "₹24,00,000+",
    participants: "500+",
    category: "BioTech",
    description: "Biotechnology and bioinformatics innovation",
    link: "https://www.ncbi.nlm.nih.gov/",
    icon: "🧬",
  },
  {
    id: 53,
    name: "NASA Space Innovation",
    date: "Oct 20 - 22, 2026",
    prize: "₹27,00,000+",
    participants: "620+",
    category: "Space Tech",
    description: "Space technology and satellite innovation",
    link: "https://www.nasa.gov/",
    icon: "🚀",
  },
  {
    id: 54,
    name: "NOAA Weather Technology",
    date: "Oct 25 - 27, 2026",
    prize: "₹20,00,000+",
    participants: "380+",
    category: "Climate Tech",
    description: "Climate and weather prediction technology",
    link: "https://www.weather.gov/",
    icon: "🌦️",
  },
  {
    id: 55,
    name: "DroneForces Challenge",
    date: "Nov 01 - 03, 2026",
    prize: "₹32,00,000+",
    participants: "720+",
    category: "Drone Technology",
    description: "Drone and UAV innovation challenge",
    link: "https://www.droneforces.org/",
    icon: "🛸",
  },
  {
    id: 56,
    name: "SmartHome USA Summit",
    date: "Nov 05 - 07, 2026",
    prize: "₹25,00,000+",
    participants: "530+",
    category: "Smart Home",
    description: "Smart home and IoT ecosystem",
    link: "https://www.smarthomeusa.com/",
    icon: "🏠",
  },
  {
    id: 57,
    name: "Unreal Game Development",
    date: "Nov 10 - 12, 2026",
    prize: "₹35,00,000+",
    participants: "700+",
    category: "Game Development",
    description: "Professional game development showcase",
    link: "https://www.unrealengine.com/",
    icon: "🎮",
  },
  {
    id: 58,
    name: "Tesla Vehicle Technology",
    date: "Nov 15 - 17, 2026",
    prize: "₹28,00,000+",
    participants: "650+",
    category: "Automotive Tech",
    description: "Autonomous vehicles and car technology",
    link: "https://www.tesla.com/",
    icon: "🚗",
  },
  {
    id: 59,
    name: "Headspace Mental Wellness",
    date: "Nov 20 - 22, 2026",
    prize: "₹26,00,000+",
    participants: "580+",
    category: "Mental Health Tech",
    description: "Mental health and wellness technology",
    link: "https://www.headspace.com/",
    icon: "💭",
  },
  {
    id: 60,
    name: "SafetyBelt Innovation",
    date: "Nov 25 - 27, 2026",
    prize: "₹22,00,000+",
    participants: "450+",
    category: "Safety Tech",
    description: "Safety and emergency response technology",
    link: "https://www.safetybelt.org/",
    icon: "🚨",
  },
  {
    id: 61,
    name: "W3C Web Accessibility",
    date: "Dec 01 - 03, 2026",
    prize: "₹18,00,000+",
    participants: "360+",
    category: "Accessibility",
    description: "Technology for accessibility and inclusion",
    link: "https://www.w3.org/WAI/",
    icon: "♿",
  },
  {
    id: 62,
    name: "Freedom of Press Challenge",
    date: "Dec 05 - 07, 2026",
    prize: "₹24,00,000+",
    participants: "500+",
    category: "Community",
    description: "Community-driven development projects",
    link: "https://www.freedomofpress.org/",
    icon: "👥",
  },
  {
    id: 63,
    name: "LawTech Innovation Summit",
    date: "Dec 10 - 12, 2026",
    prize: "₹30,00,000+",
    participants: "700+",
    category: "Legal Tech",
    description: "Legal technology and smart contracts",
    link: "https://www.lawtech.org/",
    icon: "⚖️",
  },
  {
    id: 64,
    name: "Zillow Real Estate Tech",
    date: "Dec 15 - 17, 2026",
    prize: "₹20,00,000+",
    participants: "420+",
    category: "PropTech",
    description: "Real estate technology solutions",
    link: "https://www.zillow.com/",
    icon: "🏘️",
  },
  {
    id: 65,
    name: "Logistics.org Supply Chain",
    date: "Dec 20 - 22, 2026",
    prize: "₹25,00,000+",
    participants: "530+",
    category: "Supply Chain",
    description: "Logistics and supply chain innovation",
    link: "https://www.logistics.org/",
    icon: "📦",
  },
  {
    id: 66,
    name: "Uber TransportTech",
    date: "Dec 25 - 27, 2026",
    prize: "₹19,00,000+",
    participants: "380+",
    category: "Transportation",
    description: "Future of transportation technologies",
    link: "https://www.uber.com/",
    icon: "🚌",
  },
  {
    id: 67,
    name: "OpenAI AI Summit",
    date: "Dec 28 - 30, 2026",
    prize: "₹23,00,000+",
    participants: "480+",
    category: "AI/Human Interaction",
    description: "Human-centered AI systems",
    link: "https://www.openai.com/",
    icon: "🤝",
  },
  {
    id: 68,
    name: "Devpost Year End Blitz",
    date: "Dec 31 - Jan 02, 2027",
    prize: "₹21,00,000+",
    participants: "420+",
    category: "General",
    description: "Year-end grand challenge closing 2026",
    link: "https://www.devpost.com/",
    icon: "🎉",
  },
  {
    id: 69,
    name: "MLH Grand Championship",
    date: "Dec 15 - 31, 2026",
    prize: "₹40,00,000+",
    participants: "1500+",
    category: "General",
    description: "Mega hackathon spanning entire end of year",
    link: "https://www.mlh.io/",
    icon: "🏆",
  },
];

export default function Hackathons({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Compute filtered hackathons directly instead of using state
  const getFilteredHackathons = () => {
    let filtered = [...hackathonsData];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (hackathon) =>
          hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hackathon.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (hackathon) => hackathon.category === selectedCategory
      );
    }

    return filtered;
  };

  const filteredHackathons = getFilteredHackathons();

  const categories = [
    "All",
    ...new Set(hackathonsData.map((h) => h.category)),
  ];

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar} className="navbar">
        <button
          onClick={() => setCurrentPage("home")}
          style={styles.backBtn}
        >
          ← Back
        </button>
        <h1 style={styles.navTitle} className="nav-logo">🚀 Crazy Resources</h1>
        <div className="mobile-hide" style={{ width: "100px" }}></div>
      </nav>

      {/* Header */}
      <div style={styles.header} className="section-padding">
        <h1 style={styles.title} className="section-title">🏆 Hackathons for Students</h1>
        <p style={styles.subtitle}>
          Discover and participate in amazing hackathons
        </p>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="🔍 Search hackathons by name or description..."
          style={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div style={styles.categoryContainer}>
        <p style={styles.filterLabel}>Filter by Category:</p>
        <div style={styles.categoryButtons}>
          {categories.map((category) => (
            <button
              key={category}
              style={{
                ...styles.categoryBtn,
                ...(selectedCategory === category
                  ? styles.categoryBtnActive
                  : {}),
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Hackathons Grid */}
      <div style={styles.grid} className="responsive-grid">
        {filteredHackathons.length > 0 ? (
          filteredHackathons.map((hackathon) => (
            <div key={hackathon.id} style={styles.card} data-animate className="card-base">
              <div style={styles.cardHeader}>
                <span style={styles.icon}>{hackathon.icon}</span>
                <span style={styles.badge}>{hackathon.category}</span>
              </div>

              <h3 style={styles.cardTitle}>{hackathon.name}</h3>

              <p style={styles.description}>{hackathon.description}</p>

              <div style={styles.info}>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>📅 Date:</span>
                  <span style={styles.infoValue}>{hackathon.date}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>🏅 Prize:</span>
                  <span style={styles.infoValue}>{hackathon.prize}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>👥 Participants:</span>
                  <span style={styles.infoValue}>{hackathon.participants}</span>
                </div>
              </div>

              <a href={hackathon.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                <button style={styles.btn}>
                  🚀 Register Now
                </button>
              </a>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>
            <p style={styles.noResultsText}>
              ❌ No hackathons found. Try a different search!
            </p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={styles.statsSection} className="responsive-grid grid-cols-mobile-1">
        <div style={styles.statCard}>
          <h3>🎯 70</h3>
          <p>Total Hackathons</p>
        </div>
        <div style={styles.statCard}>
          <h3>💰 ₹16+ Cr</h3>
          <p>Total Prizes</p>
        </div>
        <div style={styles.statCard}>
          <h3>👥 36000+</h3>
          <p>Total Participants</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px min(60px, 5%)",
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    color: "#f1f5f9",
  },
  navbar: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 5%",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 62, 0.95))",
    backdropFilter: "blur(10px)",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    zIndex: 100,
    marginBottom: "20px",
  },
  navTitle: {
    margin: 0,
    fontSize: "24px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
  backBtn: {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#cbd5e1",
  },
  searchContainer: {
    maxWidth: "700px",
    margin: "0 auto 40px",
  },
  searchInput: {
    width: "100%",
    padding: "16px 20px",
    fontSize: "16px",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "12px",
    background: "rgba(6, 182, 212, 0.1)",
    color: "#f1f5f9",
    transition: "all 0.3s ease",
    outline: "none",
  },
  categoryContainer: {
    marginBottom: "40px",
    textAlign: "center",
  },
  filterLabel: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#cbd5e1",
    marginBottom: "15px",
  },
  categoryButtons: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryBtn: {
    padding: "10px 20px",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "20px",
    background: "transparent",
    color: "#cbd5e1",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    fontSize: "14px",
  },
  categoryBtnActive: {
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    border: "2px solid rgba(6, 182, 212, 0.8)",
    color: "#ffffff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },
  card: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "15px",
    padding: "25px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "40px",
  },
  badge: {
    background: "linear-gradient(135deg, rgba(132, 204, 22, 0.3), rgba(6, 182, 212, 0.3))",
    border: "1px solid rgba(132, 204, 22, 0.5)",
    borderRadius: "20px",
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#84cc16",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#06b6d4",
  },
  description: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    background: "rgba(6, 182, 212, 0.05)",
    padding: "15px",
    borderRadius: "10px",
  },
  infoItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
  },
  infoLabel: {
    color: "#06b6d4",
    fontWeight: "600",
  },
  infoValue: {
    color: "#f1f5f9",
  },
  link: {
    textDecoration: "none",
  },
  btn: {
    width: "100%",
    padding: "12px 20px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(6, 182, 212, 0.3)",
  },
  noResults: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: "60px 20px",
  },
  noResultsText: {
    fontSize: "18px",
    color: "#cbd5e1",
  },
  statsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "50px",
    padding: "30px",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
    borderRadius: "15px",
    border: "2px solid rgba(6, 182, 212, 0.2)",
  },
  statCard: {
    textAlign: "center",
    padding: "20px",
  },
};
