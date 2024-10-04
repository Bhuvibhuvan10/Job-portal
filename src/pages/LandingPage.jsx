import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-green-400 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-lg mb-6">Connecting talented individuals with top companies.</p>
          <div className="flex justify-center mt-6">
            <input
              type="text"
              className="px-4 py-2 rounded-l-lg text-black"
              placeholder="Search for jobs..."
            />
            <button className="px-4 py-2 bg-yellow-500 rounded-r-lg">Search</button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Job Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
              <p className="text-gray-600">TechCorp - Remote</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
            {/* Add more job cards as needed */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What People Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Testimonial */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "This platform helped me land my dream job. The process was seamless and quick!"
              </p>
              <p className="mt-4 font-semibold">- Jane Doe</p>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8">Join us and start applying to jobs or posting job listings today.</p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Job Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
