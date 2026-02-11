import { useState } from "react";

const internshipsData = [
  {
    id: 1,
    company: "TCS",
    role: "Associate Software Developer",
    location: "India / Remote",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹10,000 - 15,000/month",
    category: "Software Development",
    description: "Learn software development fundamentals while working on real projects",
    link: "https://www.tcs.com/careers",
    icon: "💼",
    fullDescription: "Join TCS as a fresher and kickstart your IT career. No prior experience needed! You'll learn programming basics, work with experienced mentors, and develop real applications. Perfect for B-tech students looking for their first opportunity.",
    requirements: "B-tech degree in CS/IT or equivalent, Basic programming knowledge, Willingness to learn",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Junior Developer Intern",
    location: "India / Remote",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹12,000 - 18,000/month",
    category: "Software Development",
    description: "Start your programming journey with Infosys",
    link: "https://www.infosys.com/careers",
    icon: "🔧",
    fullDescription: "Infosys welcomes freshers! This internship focuses on training you in Java, Python, and web development. Work on beginner-friendly projects and learn industry practices. Mentorship included.",
    requirements: "B-tech student (any branch), Basic C/C++ knowledge, Eager to learn",
  },
  {
    id: 3,
    company: "Wipro",
    role: "Trainee Developer",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Software Development",
    description: "Get trained and hands-on experience in development",
    link: "https://www.wipro.com/careers",
    icon: "💻",
    fullDescription: "Perfect internship for college students! Wipro offers comprehensive training programs for freshers. Learn coding, databases, and software development practices. Zero experience required.",
    requirements: "B-tech student, Any stream welcome, Interest in IT",
  },
  {
    id: 4,
    company: "HCL Technologies",
    role: "Junior Software Engineer",
    location: "India / Remote",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹11,000 - 16,000/month",
    category: "Software Development",
    description: "Learn and grow with HCL's mentorship program",
    link: "https://www.hcl.com/careers",
    icon: "🚀",
    fullDescription: "HCL welcomes B-tech freshers with no experience! Work on real projects under senior developer mentorship. Learn full-stack development, databases, and industry tools.",
    requirements: "B-tech degree, Any branch, No prior experience needed",
  },
  {
    id: 5,
    company: "Accenture",
    role: "Associate Software Developer",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹12,000 - 17,000/month",
    category: "Web Development",
    description: "Perfect first step into the IT industry",
    link: "https://www.accenture.com/in-en/careers",
    icon: "🌟",
    fullDescription: "Accenture's graduate program for fresh B-tech students. No experience required! Get trained in web technologies, SQL, and software development lifecycle. Great learning environment.",
    requirements: "B-tech student, Any specialization, Basic programming interest",
  },
  {
    id: 6,
    company: "Cognizant",
    role: "Programmer Intern",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹10,000 - 15,000/month",
    category: "Software Development",
    description: "Your gateway to a tech career",
    link: "https://www.cognizant.com/en/careers",
    icon: "📊",
    fullDescription: "Cognizant actively hires freshers! Perfect for students looking to break into the tech industry. Learn Java, Python, and database concepts. Structured training + hands-on work.",
    requirements: "B-tech degree (any stream), Beginner-level coding, Eager learner",
  },
  {
    id: 7,
    company: "Tech Mahindra",
    role: "Junior Developer",
    location: "India / Remote",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹11,000 - 16,000/month",
    category: "Full Stack",
    description: "Build your tech skills from scratch",
    link: "https://www.techmahindra.com/careers",
    icon: "⚙️",
    fullDescription: "Tech Mahindra offers comprehensive internships for freshers. Learn HTML, CSS, JavaScript, and backend development. Mentorship + real project exposure.",
    requirements: "B-tech student, Any branch, No experience needed",
  },
  {
    id: 8,
    company: "NIIT",
    role: "Junior Developer Trainee",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹8,000 - 12,000/month",
    category: "Software Development",
    description: "Training-focused internship for freshers",
    link: "https://www.niit.com/careers",
    icon: "🎓",
    fullDescription: "NIIT is perfect for freshers! Comprehensive training in Java, web development, and databases. No prior experience required. Learn and earn.",
    requirements: "B-tech student, Any background, Willingness to learn",
  },
  {
    id: 9,
    company: "Capgemini",
    role: "Assistant Software Engineer",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Software Development",
    description: "Learn with industry-leading experts",
    link: "https://www.capgemini.com/careers",
    icon: "🔧",
    fullDescription: "Capgemini welcomes freshers from all backgrounds. Structured training program in programming, databases, and web technologies. Mentorship included.",
    requirements: "B-tech degree (any stream), Basic C/C++/Java knowledge",
  },
  {
    id: 10,
    company: "NCS (NIIT Technologies)",
    role: "Junior Software Developer",
    location: "India / Remote",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "Web Development",
    description: "Start your IT career with NCS",
    link: "https://www.ncs.com.sg/careers",
    icon: "💻",
    fullDescription: "NCS offers excellent training for college students with zero experience. Learn Python, JavaScript, databases, and web development.",
    requirements: "B-tech student, Any specialization, No prior experience needed",
  },
  {
    id: 11,
    company: "Mindtree",
    role: "Fresher Developer",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹12,000 - 16,000/month",
    category: "Full Stack",
    description: "Perfect entry-level opportunity",
    link: "https://www.mindtree.com/careers",
    icon: "🚀",
    fullDescription: "Mindtree actively recruits freshers. Get trained in multiple programming languages, databases, and full-stack development.",
    requirements: "B-tech degree, Any branch, Beginner level OK",
  },
  {
    id: 12,
    company: "Deloitte",
    role: "Internship Program",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Software Development",
    description: "Global company, fresh talent welcome",
    link: "https://www.deloitte.com/careers",
    icon: "🌟",
    fullDescription: "Deloitte's intern program for B-tech freshers. Learn programming, database management, and consulting fundamentals.",
    requirements: "B-tech student, Any stream, Interest in IT",
  },
  {
    id: 13,
    company: "KPMG",
    role: "Technology Intern",
    location: "India / Remote",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹9,000 - 13,000/month",
    category: "Software Development",
    description: "Learn cutting-edge technologies",
    link: "https://home.kpmg/in/en/home/careers.html",
    icon: "📊",
    fullDescription: "KPMG offers internships for freshers to learn modern tech stack. Training + hands-on projects. No experience required.",
    requirements: "B-tech degree, Any specialization, Basic programming interest",
  },
  {
    id: 14,
    company: "PwC",
    role: "Intern - Technology",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "Web Development",
    description: "Great stepping stone for freshers",
    link: "https://www.pwc.in/careers",
    icon: "💼",
    fullDescription: "PwC welcomes B-tech freshers. Learn cloud technologies, programming, and web development in a supportive environment.",
    requirements: "B-tech student, Any branch, No prior experience needed",
  },
  {
    id: 15,
    company: "Bajaj Auto",
    role: "Summer Intern",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹8,000 - 11,000/month",
    category: "Software Development",
    description: "Work at India's leading automobile company",
    link: "https://www.bajajauto.com/careers",
    icon: "⚙️",
    fullDescription: "Bajaj offers internships for engineering students. Learn embedded systems, automation, and manufacturing software. Fresher-friendly.",
    requirements: "B-tech student (Mech/Auto/ECE), Any level of experience",
  },
  {
    id: 16,
    company: "Maruti Suzuki",
    role: "Graduate Engineering Intern",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Software Development",
    description: "Learn automotive technology",
    link: "https://www.marutisuzuki.com/careers",
    icon: "🚗",
    fullDescription: "Maruti welcomes engineering freshers. Gain exposure to automotive software development, manufacturing, and quality systems.",
    requirements: "B-tech student, Any branch, Fresher-focused",
  },
  {
    id: 17,
    company: "Reliance Industries",
    role: "Graduate Trainee",
    location: "India / Remote",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹12,000 - 17,000/month",
    category: "Full Stack",
    description: "Opportunity with India's largest company",
    link: "https://www.ril.com/careers",
    icon: "🏢",
    fullDescription: "Reliance offers excellent internships for engineering students. Learn industry practices, work on real projects, mentorship provided.",
    requirements: "B-tech degree, Any specialization, Fresher OK",
  },
  {
    id: 18,
    company: "BHEL",
    role: "Trainee Engineer",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹9,000 - 13,000/month",
    category: "Software Development",
    description: "Learn from public sector leader",
    link: "https://www.bhel.in/en/careers",
    icon: "🔋",
    fullDescription: "BHEL (Bharat Heavy Electricals Limited) offers internships for freshers in electrical, mechanical, and software engineering.",
    requirements: "B-tech student, Any engineering branch, No experience needed",
  },
  {
    id: 19,
    company: "Godrej",
    role: "Fresher Program",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Software Development",
    description: "Learn with leading consumer goods company",
    link: "https://www.godrej.com/careers",
    icon: "🏭",
    fullDescription: "Godrej welcomes B-tech freshers. Learn supply chain, manufacturing, and IT systems. Mentorship + practical training.",
    requirements: "B-tech student, Any specialization, Fresher-friendly",
  },
  {
    id: 20,
    company: "L&T Technology",
    role: "Graduate Engineer Trainee",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "Software Development",
    description: "Learn from engineering leader",
    link: "https://www.ltts.com/careers",
    icon: "🏢",
    fullDescription: "L&T Technology Services offers excellent internship programs for freshers. Learn CAD, programming, and engineering design.",
    requirements: "B-tech degree, Any engineering branch, No prior experience",
  },
  {
    id: 21,
    company: "Sun Pharma",
    role: "IT Intern",
    location: "India",
    duration: "Jan 28 - Apr 28, 2026",
    salary: "₹9,000 - 12,000/month",
    category: "Software Development",
    description: "Work in pharmaceutical IT sector",
    link: "https://www.sunpharma.com/careers",
    icon: "💊",
    fullDescription: "Sun Pharma offers IT internships for B-tech students. Learn enterprise systems, databases, and healthcare IT.",
    requirements: "B-tech student, Any stream, No experience needed",
  },
  {
    id: 22,
    company: "UPL Limited",
    role: "Intern Program",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹10,000 - 13,000/month",
    category: "Software Development",
    description: "Opportunity with agro-chemical leader",
    link: "https://www.upl-ltd.com/careers",
    icon: "🌾",
    fullDescription: "UPL welcomes engineering freshers. Learn manufacturing IT, process automation, and ERP systems.",
    requirements: "B-tech degree, Any specialization, Beginner OK",
  },
  {
    id: 23,
    company: "Axis Bank",
    role: "Technology Intern",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹12,000 - 16,000/month",
    category: "FinTech",
    description: "Learn banking technology",
    link: "https://www.axisbank.com/careers",
    icon: "🏦",
    fullDescription: "Axis Bank offers IT internships for freshers. Learn banking systems, database management, and network security.",
    requirements: "B-tech student, Any branch, No prior experience needed",
  },
  {
    id: 24,
    company: "ICICI Bank",
    role: "Graduate Intern",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "FinTech",
    description: "Work in India's leading bank",
    link: "https://www.icicibank.com/careers",
    icon: "💳",
    fullDescription: "ICICI welcomes B-tech freshers. Learn banking IT, core systems, and fintech solutions. Training + mentorship included.",
    requirements: "B-tech degree, Any stream, Fresher-focused",
  },
  {
    id: 25,
    company: "HDFC Bank",
    role: "IT Intern",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "FinTech",
    description: "Learn from banking giant",
    link: "https://www.hdfcbank.com/careers",
    icon: "🏛️",
    fullDescription: "HDFC Bank offers internship programs for engineering students. Learn banking software, networks, and IT operations.",
    requirements: "B-tech student, Any specialization, No experience needed",
  },
  {
    id: 26,
    company: "Amazon India",
    role: "Intern - India Operations",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹13,000 - 18,000/month",
    category: "Full Stack",
    description: "Opportunity with global e-commerce giant",
    link: "https://www.amazon.jobs/en-in/",
    icon: "📦",
    fullDescription: "Amazon India offers internships for B-tech freshers. Learn about logistics systems, databases, and e-commerce technology.",
    requirements: "B-tech degree, Any stream, Basic coding knowledge",
  },
  {
    id: 27,
    company: "Flipkart",
    role: "Developer Intern",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹12,000 - 17,000/month",
    category: "Web Development",
    description: "Opportunity with leading Indian e-commerce",
    link: "https://www.flipkart.careers/",
    icon: "🛍️",
    fullDescription: "Flipkart welcomes freshers to learn e-commerce tech stack. Web development, databases, and scalable systems.",
    requirements: "B-tech student, Any branch, No prior experience needed",
  },
  {
    id: 28,
    company: "OLX India",
    role: "Junior Developer",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Web Development",
    description: "Work at marketplace platform",
    link: "https://www.olx.in/careers",
    icon: "🏪",
    fullDescription: "OLX offers internships for B-tech students. Learn full-stack development, databases, and marketplace technology.",
    requirements: "B-tech degree, Basic JavaScript/Python, Fresher OK",
  },
  {
    id: 29,
    company: "MakeMyTrip",
    role: "Technology Intern",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "Web Development",
    description: "Learn travel tech with India's leader",
    link: "https://www.makemytrip.com/careers",
    icon: "✈️",
    fullDescription: "MakeMyTrip welcomes engineering freshers. Learn web development, booking systems, and travel tech.",
    requirements: "B-tech student, Any stream, No experience needed",
  },
  {
    id: 30,
    company: "Swiggy",
    role: "Intern - Engineering",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹12,000 - 16,000/month",
    category: "Software Development",
    description: "Work at food delivery unicorn",
    link: "https://www.swiggycareers.com/",
    icon: "🍔",
    fullDescription: "Swiggy offers internships for B-tech freshers. Learn logistics software, real-time systems, and mobile technology.",
    requirements: "B-tech degree, Basic programming, Fresher-friendly",
  },
  {
    id: 31,
    company: "Zomato",
    role: "Developer Intern",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "Full Stack",
    description: "Opportunity with restaurant platform",
    link: "https://www.zomato.com/careers",
    icon: "🍕",
    fullDescription: "Zomato welcomes freshers. Learn full-stack development, real-time features, and scalable systems.",
    requirements: "B-tech student, Any branch, No prior experience needed",
  },
  {
    id: 32,
    company: "OYO Rooms",
    role: "Technology Intern",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Web Development",
    description: "Learn from hospitality tech startup",
    link: "https://www.oyorooms.com/careers",
    icon: "🏨",
    fullDescription: "OYO offers internships for B-tech students. Learn hospitality systems, booking platforms, and web development.",
    requirements: "B-tech degree, Basic coding skills, Fresher OK",
  },
  {
    id: 33,
    company: "Desi QA",
    role: "QA Intern",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹8,000 - 11,000/month",
    category: "Quality Assurance",
    description: "Start QA testing career",
    link: "https://www.desiqa.com/",
    icon: "✅",
    fullDescription: "Desi QA provides internships for beginners in software testing. Learn manual and automation testing. No experience required.",
    requirements: "B-tech student, Any background, Interest in QA",
  },
  {
    id: 34,
    company: "Xperi",
    role: "Intern - IT",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 13,000/month",
    category: "Software Development",
    description: "Learn cutting-edge tech",
    link: "https://www.xperi.com/careers",
    icon: "🔬",
    fullDescription: "Xperi offers internships for B-tech freshers in software development and IT. Learn modern tech stack.",
    requirements: "B-tech degree, Basic programming, Fresher-focused",
  },
  {
    id: 35,
    company: "Persistent",
    role: "Graduate Intern",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "Software Development",
    description: "Join leading IT company",
    link: "https://www.persistent.com/careers",
    icon: "💼",
    fullDescription: "Persistent actively hires B-tech freshers. Learn software development, databases, and IT practices.",
    requirements: "B-tech degree, Any stream, No prior experience",
  },
  {
    id: 36,
    company: "Sameer",
    role: "IT Intern",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹9,000 - 12,000/month",
    category: "Software Development",
    description: "Opportunity with industrial tech",
    link: "https://www.sameer.in/",
    icon: "🏭",
    fullDescription: "Sameer welcomes engineering freshers. Learn industrial automation, software, and IT systems.",
    requirements: "B-tech student, Any specialization, Fresher OK",
  },
  {
    id: 37,
    company: "Coforge",
    role: "Associate Software Engineer",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 14,000/month",
    category: "Software Development",
    description: "Learn digital transformation tech",
    link: "https://www.coforge.com/careers",
    icon: "🌐",
    fullDescription: "Coforge offers great internships for B-tech students. Learn software development, cloud, and digital tech.",
    requirements: "B-tech degree, Basic programming, No experience needed",
  },
  {
    id: 38,
    company: "Ness",
    role: "Intern - Engineering",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 13,000/month",
    category: "Full Stack",
    description: "Learn enterprise solutions",
    link: "https://www.ness.com/careers",
    icon: "🚀",
    fullDescription: "Ness (NTT DATA) welcomes freshers. Learn full-stack development, databases, and enterprise systems.",
    requirements: "B-tech student, Any branch, Basic coding OK",
  },
  {
    id: 39,
    company: "EY (Ernst & Young)",
    role: "IT Intern",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 15,000/month",
    category: "Software Development",
    description: "Learn consulting IT",
    link: "https://www.ey.com/en_in/careers",
    icon: "📊",
    fullDescription: "EY offers internships for B-tech freshers. Learn IT consulting, software development, and business tech.",
    requirements: "B-tech degree, Any specialization, Fresher-friendly",
  },
  {
    id: 40,
    company: "Grant Thornton",
    role: "Technology Intern",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 13,000/month",
    category: "Software Development",
    description: "Opportunity with global firm",
    link: "https://www.grantthornton.in/careers",
    icon: "💻",
    fullDescription: "Grant Thornton hires B-tech freshers for technology internships. Learn IT systems and software development.",
    requirements: "B-tech student, Any background, No prior experience",
  },
  {
    id: 41,
    company: "First Source",
    role: "Intern - IT",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹9,000 - 12,000/month",
    category: "Software Development",
    description: "Start with BPO-IT company",
    link: "https://www.firstsource.com/careers",
    icon: "📞",
    fullDescription: "First Source offers internships for engineering students in IT services. Learn customer support systems and tech.",
    requirements: "B-tech degree, Basic communication skills, Fresher OK",
  },
  {
    id: 42,
    company: "Waycup Technologies",
    role: "Junior Developer",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 14,000/month",
    category: "Web Development",
    description: "Learn from startup",
    link: "https://waycup.com/careers",
    icon: "🚀",
    fullDescription: "Waycup is a startup welcoming freshers. Learn web development, mobile apps, and startup culture.",
    requirements: "B-tech student, Basic HTML/CSS/JS, No experience needed",
  },
  {
    id: 43,
    company: "Zyxware",
    role: "Developer Intern",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹9,000 - 12,000/month",
    category: "Web Development",
    description: "Learn web development",
    link: "https://www.zyxware.com/careers",
    icon: "💻",
    fullDescription: "Zyxware is perfect for freshers. Learn modern web technologies, Python, and JavaScript development.",
    requirements: "B-tech degree, Basic programming interest, Fresher-focused",
  },
  {
    id: 44,
    company: "SysARC",
    role: "IT Trainee",
    location: "India",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 13,000/month",
    category: "Software Development",
    description: "Learn IT systems",
    link: "https://www.sysarc.com/careers",
    icon: "🖥️",
    fullDescription: "SysARC offers IT training internships for B-tech students. Learn systems administration and IT support.",
    requirements: "B-tech student, Any specialization, No prior experience",
  },
  {
    id: 45,
    company: "Webmentions",
    role: "Frontend Intern",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 14,000/month",
    category: "Web Development",
    description: "Learn frontend development",
    link: "https://webmentions.com/careers",
    icon: "🎨",
    fullDescription: "Webmentions welcomes freshers for frontend development. Learn React, Vue, and modern web technologies.",
    requirements: "B-tech student, Basic JavaScript knowledge, Fresher OK",
  },
  {
    id: 46,
    company: "ByteGrid",
    role: "Backend Developer Intern",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹12,000 - 15,000/month",
    category: "Backend",
    description: "Learn backend development",
    link: "https://bytegrid.com/careers",
    icon: "⚙️",
    fullDescription: "ByteGrid is perfect for freshers interested in backend. Learn Node.js, databases, and server development.",
    requirements: "B-tech degree, Basic JavaScript/Python, No experience needed",
  },
  {
    id: 47,
    company: "CloudStack",
    role: "Cloud Intern",
    location: "India / Remote",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 14,000/month",
    category: "Cloud Computing",
    description: "Learn cloud technologies",
    link: "https://cloudstack.tech/careers",
    icon: "☁️",
    fullDescription: "CloudStack offers internships for freshers in cloud computing. Learn AWS, Azure, and cloud infrastructure.",
    requirements: "B-tech student, Basic Linux knowledge, Fresher-friendly",
  },
  {
    id: 48,
    company: "DataFlow",
    role: "Data Analytics Intern",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹10,000 - 13,000/month",
    category: "Data Analytics",
    description: "Learn data science basics",
    link: "https://dataflow.io/careers",
    icon: "📊",
    fullDescription: "DataFlow welcomes B-tech freshers interested in data analytics. Learn Python, SQL, and data visualization.",
    requirements: "B-tech degree, Basic programming, Interest in data",
  },
  {
    id: 49,
    company: "SecureNet",
    role: "Security Intern",
    location: "India",
    duration: "Feb 01 - May 01, 2026",
    salary: "₹11,000 - 14,000/month",
    category: "Cybersecurity",
    description: "Learn cybersecurity basics",
    link: "https://securenet.io/careers",
    icon: "🔒",
    fullDescription: "SecureNet offers internships for freshers in cybersecurity. Learn network security, ethical hacking basics.",
    requirements: "B-tech student, Interest in security, No prior experience",
  },
  {
    id: 50,
    company: "BrainBox",
    role: "AI/ML Intern",
    location: "India / Remote",
    duration: "Feb 15 - May 15, 2026",
    salary: "₹12,000 - 15,000/month",
    category: "Artificial Intelligence",
    description: "Learn AI & Machine Learning",
    link: "https://brainbox.ai/careers",
    icon: "🤖",
    fullDescription: "BrainBox welcomes freshers to learn AI/ML. Learn Python, TensorFlow, and basic machine learning concepts.",
    requirements: "B-tech degree, Basic Python knowledge, No prior ML experience needed",
  },
];

export default function Internships({ setCurrentPage, initialSelectedInternship, setSelectedInternship }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedInternshipLocal, setSelectedInternshipLocal] = useState(initialSelectedInternship || null);

  const getFilteredInternships = () => {
    let filtered = [...internshipsData];

    if (searchTerm) {
      filtered = filtered.filter(
        (internship) =>
          internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          internship.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          internship.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (internship) => internship.category === selectedCategory
      );
    }

    return filtered;
  };

  const filteredInternships = getFilteredInternships();
  const categories = ["All", ...new Set(internshipsData.map((i) => i.category))];

  const memes = [
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem 💡",
    "Why do Java developers wear glasses? Because they don't C# 👓",
    "How many internships can you handle? We'll find out... 😅",
    "Intern: It works on my machine | Manager: Ship it! 🚀",
  ];

  const randomMeme = memes[Math.floor(Math.random() * memes.length)];

  // Detail View
  if (selectedInternshipLocal) {
    return (
      <div style={styles.container}>
        {/* Navigation Bar */}
        <nav style={styles.navbar} className="navbar">
          <button
            onClick={() => setSelectedInternshipLocal(null)}
            style={styles.backBtn}
          >
            ← Back
          </button>
          <h1 style={styles.navTitle} className="nav-logo">🚀 Crazy Resources</h1>
          <div className="mobile-hide" style={{ width: "100px" }}></div>
        </nav>

        {/* Detail Content */}
        <div style={styles.detailContainer}>
          <div style={styles.detailCard}>
            <div style={styles.detailHeader} className="flex-mobile-col">
              <div style={styles.detailIcon}>{selectedInternshipLocal.icon}</div>
              <div style={{ textAlign: "center" }}>
                <h1 style={styles.detailTitle}>{selectedInternshipLocal.company}</h1>
                <h2 style={styles.detailRole}>{selectedInternshipLocal.role}</h2>
              </div>
            </div>

            <div style={styles.detailInfo} className="responsive-grid">
              <div style={styles.infoBox}>
                <span style={styles.infoIcon}>📍</span>
                <div>
                  <p style={styles.infoLabel}>Location</p>
                  <p style={styles.infoValue}>{selectedInternshipLocal.location}</p>
                </div>
              </div>

              <div style={styles.infoBox}>
                <span style={styles.infoIcon}>📅</span>
                <div>
                  <p style={styles.infoLabel}>Duration</p>
                  <p style={styles.infoValue}>{selectedInternshipLocal.duration}</p>
                </div>
              </div>

              <div style={styles.infoBox}>
                <span style={styles.infoIcon}>💰</span>
                <div>
                  <p style={styles.infoLabel}>Stipend</p>
                  <p style={styles.infoValue}>{selectedInternshipLocal.salary}</p>
                </div>
              </div>

              <div style={styles.infoBox}>
                <span style={styles.infoIcon}>🏷️</span>
                <div>
                  <p style={styles.infoLabel}>Category</p>
                  <p style={styles.infoValue}>{selectedInternshipLocal.category}</p>
                </div>
              </div>
            </div>

            <div style={styles.detailSection}>
              <h3 style={styles.sectionTitle}>About This Internship</h3>
              <p style={styles.sectionContent}>{selectedInternshipLocal.fullDescription}</p>
            </div>

            <div style={styles.detailSection}>
              <h3 style={styles.sectionTitle}>Requirements</h3>
              <p style={styles.sectionContent}>{selectedInternshipLocal.requirements}</p>
            </div>

            <a
              href={selectedInternshipLocal.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              <button style={styles.applyBtn}>
                🚀 Apply on Company Website
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <button onClick={() => setCurrentPage("home")} style={styles.backBtn}>
          ← Back to Home
        </button>
        <h1 style={styles.navTitle}>🚀 Crazy Resources</h1>
        <div style={{ width: "120px" }}></div>
      </nav>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>💼 Engineering Internships 2026</h1>
        <p style={styles.subtitle}>
          Your gateway to top tech companies - Starting Jan 28, 2026
        </p>
      </div>

      {/* Meme Section */}
      <div style={styles.memeSection}>
        <p style={styles.memeText}>💡 {randomMeme}</p>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="🔍 Search by company or role..."
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

      {/* Internships Grid */}
      <div style={styles.grid}>
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <div
              key={internship.id}
              style={styles.card}
              onClick={() => setSelectedInternshipLocal(internship)}
            >
              <div style={styles.cardHeader}>
                <span style={styles.icon}>{internship.icon}</span>
                <span style={styles.badge}>{internship.category}</span>
              </div>

              <h3 style={styles.cardTitle}>{internship.company}</h3>
              <p style={styles.role}>{internship.role}</p>

              <p style={styles.description}>{internship.description}</p>

              <div style={styles.info}>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>📍 Location:</span>
                  <span style={styles.infoValue}>{internship.location}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>📅 Duration:</span>
                  <span style={styles.infoValue}>{internship.duration}</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>💰 Stipend:</span>
                  <span style={styles.infoValue}>{internship.salary}</span>
                </div>
              </div>

              <button style={styles.btn}>
                📖 View Details
              </button>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>
            <p style={styles.noResultsText}>
              ❌ No internships found. Try a different search!
            </p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={styles.statsSection} className="responsive-grid grid-cols-mobile-1">
        <div style={styles.statCard}>
          <h3>🎯 50</h3>
          <p>Top Companies</p>
        </div>
        <div style={styles.statCard}>
          <h3>💰 ₹11+ Cr</h3>
          <p>Total Stipends</p>
        </div>
        <div style={styles.statCard}>
          <h3>👨‍💼 Engineering</h3>
          <p>Focused Roles</p>
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
    marginBottom: "40px",
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
  memeSection: {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1))",
    border: "2px solid rgba(236, 72, 153, 0.3)",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "30px",
    textAlign: "center",
  },
  memeText: {
    fontSize: "18px",
    color: "#fbbf24",
    fontWeight: "600",
    margin: 0,
    fontStyle: "italic",
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
    width: "100%",
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
    marginBottom: "25px",
  },
  icon: {
    fontSize: "36px",
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
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#06b6d4",
  },
  role: {
    fontSize: "16px",
    color: "#fbbf24",
    fontWeight: "600",
    marginBottom: "10px",
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
    padding: "100px 20px",
  },
  noResultsText: {
    fontSize: "14px",
    color: "var(--text-grey)",
    textTransform: "uppercase",
    letterSpacing: "1px",
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
  },
  detailContainer: {
    maxWidth: "900px",
    margin: "40px auto",
  },
  detailCard: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "15px",
    padding: "min(40px, 5%)",
  },
  detailHeader: {
    display: "flex",
    gap: "30px",
    marginBottom: "40px",
    alignItems: "flex-start",
  },
  detailIcon: {
    fontSize: "80px",
  },
  detailTitle: {
    fontSize: "min(48px, 10vw)",
    fontWeight: "900",
    margin: "0 0 10px 0",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  detailRole: {
    fontSize: "24px",
    color: "#fbbf24",
    fontWeight: "600",
    margin: 0,
  },
  detailInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  infoBox: {
    background: "rgba(6, 182, 212, 0.05)",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    display: "flex",
    gap: "15px",
  },
  infoIcon: {
    fontSize: "28px",
  },
  detailSection: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#06b6d4",
    marginBottom: "15px",
  },
  sectionContent: {
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: "1.8",
    margin: 0,
  },
};
