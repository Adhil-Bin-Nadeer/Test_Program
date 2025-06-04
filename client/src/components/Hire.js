import { useState, useEffect } from 'react';
import axios from 'axios';

function Hire() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchJobs = async (keyword = '') => {
    try {
      const url = keyword.trim()
        ? `http://localhost:5001/api/jobs/search?keyword=${keyword}`
        : 'http://localhost:5001/api/jobs';
      const response = await axios.get(url);
      setJobs(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching jobs');
    } finally {
      setLoading(false);
    }
  };

  // Load all jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Real-time search as user types
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchJobs(search);
    }, 300); // Wait 300ms after user stops typing

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    // This is now optional since search happens automatically
    fetchJobs(search);
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type to search jobs instantly..."
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setSearch('')}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Clear
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {jobs.map(job => (
            <div key={job._id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{job.profile}</h3>
              <p className="text-gray-600 mb-4">{job.desc}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Experience: {job.exp} years
                </div>
                <div className="flex gap-2">
                  {job.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hire;