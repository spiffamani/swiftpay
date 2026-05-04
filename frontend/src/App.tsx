import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/PostJob";
import BrowseJobs from "./pages/BrowseJobs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/browse" element={<BrowseJobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;