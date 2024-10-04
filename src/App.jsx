import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';  // Import your Landing Page component
import JobListings from './pages/Job';  // Create a JobListings component
// import JobDetails from './JobDetails';    // Create a JobDetails component
import Navbar from './components/Navbar';            // Create a Navbar component for navigation
// import Footer from './Footer';            // Create a Footer component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={<LandingPage />} />
            

            {/* Job Listings Route */}
            <Route path="/jobs" element={<JobListings />} />

            {/* Job Details Route */}
            {/* <Route path="/jobs/:id" element={<JobDetails />} /> */}

            {/* Add more routes as necessary */}
          </Routes>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
