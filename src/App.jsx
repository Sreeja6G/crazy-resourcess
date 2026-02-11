import { useState } from "react";
import Home from "./pages/Home_new";
import Hackathons from "./pages/Hackathons";
import Internships from "./pages/Internships";
import EnglishCommunication from "./pages/EnglishCommunication";
import AITools from "./pages/AITools";
import FreeCourses from "./pages/FreeCourses";
import FreshJobs from "./pages/FreshJobs";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedInternship, setSelectedInternship] = useState(null);

  return (
    <>
      {currentPage === "home" && (
        <Home setCurrentPage={setCurrentPage} setSelectedInternship={setSelectedInternship} />
      )}
      {currentPage === "hackathons" && (
        <Hackathons setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "internships" && (
        <Internships 
          setCurrentPage={setCurrentPage}
          initialSelectedInternship={selectedInternship}
          setSelectedInternship={setSelectedInternship}
        />
      )}
      {currentPage === "english-communication" && (
        <EnglishCommunication setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "ai-tools" && (
        <AITools setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "free-courses" && (
        <FreeCourses setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "fresh-jobs" && (
        <FreshJobs setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}



