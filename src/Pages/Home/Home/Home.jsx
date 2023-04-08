import React from "react";
import { Link } from "react-router-dom";
import JobPortalBanner from "./Banner";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Banner section */}
      <JobPortalBanner />

      {/* Service section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="rounded-lg shadow-lg p-8 bg-blue-500 text-white h-full">
                <h2 className="text-2xl font-bold mb-4">Search Jobs</h2>
                <p className="text-gray-100">
                  Find the perfect job that matches your skills and experience.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="rounded-lg shadow-lg p-8 bg-yellow-500 text-white h-full">
                <h2 className="text-2xl font-bold mb-4">Post Jobs</h2>
                <p className="text-gray-100">
                  Reach qualified candidates and get more applications.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="rounded-lg shadow-lg p-8 bg-green-500 text-white h-full">
                <h2 className="text-2xl font-bold mb-4">Get Hired</h2>
                <p className="text-gray-100">
                  Showcase your skills and experience to top employers.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
              <div className="rounded-lg shadow-lg p-8 bg-red-500 text-white h-full">
                <h2 className="text-2xl font-bold mb-4">Career Advice</h2>
                <p className="text-gray-100">
                  Get tips and advice on how to Rakibul Islam contineue build
                  your career and succeed in your job search.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Technology</h3>
                <p className="text-gray-700">
                  Find jobs in software development, IT, engineering, and more.
                </p>
                <Link
                  to="/category/technology"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  View Jobs
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Sales</h3>
                <p className="text-gray-700">
                  Find jobs in sales, marketing, and customer service.
                </p>
                <Link
                  to="/category/sales"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  View Jobs
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
                <p className="text-gray-700">
                  Find jobs in healthcare, nursing, and medical fields.
                </p>
                <Link
                  to="/category/healthcare"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  View Jobs
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Finance</h3>
                <p className="text-gray-700">
                  Find jobs in accounting, finance, and banking.
                </p>
                <Link
                  to="/category/finance"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  View Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top companies section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top Companies</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <img
                  src="/images/company-logo-1.png"
                  alt="Company Logo"
                  className="mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Acme Inc.</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  to="/company/acme-inc"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  View Company
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <img
                  src="/images/company-logo-2.png"
                  alt="Company Logo"
                  className="mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Widget Co.</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  to="/company/widget-co"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  View Company
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <img
                  src="/images/company-logo-3.png"
                  alt="Company Logo"
                  className="mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Gizmo Corp.</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  to="/company/gizmo-corp"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  View Company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra sections */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">More Job Portals</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Indeed</h3>
                <p className="text-gray-700">
                  Indeed is a leading job search engine with millions of job
                  listings from thousands of websites, including company career
                  sites and job boards.
                </p>
                <a
                  href="https://www.indeed.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  Visit Site
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Glassdoor</h3>
                <p className="text-gray-700">
                  Glassdoor is a website where current and former employees
                  anonymously review companies. Glassdoor also allows users to
                  anonymously submit and view salaries as well as search and
                  apply for jobs on its platform.
                </p>
                <a
                  href="https://www.glassdoor.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  Visit Site
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">LinkedIn Jobs</h3>
                <p className="text-gray-700">
                  LinkedIn Jobs is a platform for job seekers and employers. It
                  allows employers to post jobs and find the right candidates,
                  while job seekers can search for and apply to open positions.
                </p>
                <a
                  href="https://www.linkedin.com/jobs/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  Visit Site
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">Monster</h3>
                <p className="text-gray-700">
                  Monster is a global employment website that offers job
                  listings, resume posting, career advice, and recruiting
                  services to employers and job seekers.
                </p>
                <a
                  href="https://www.monster.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-bold mt-6"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
