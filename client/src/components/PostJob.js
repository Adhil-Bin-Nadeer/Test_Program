import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostJob() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    desc: '',
    exp: '',
    profile: '',
    techs: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const jobData = {
        ...formData,
        exp: Number(formData.exp),
        techs: formData.techs.split(',').map(tech => tech.trim())
      };

      await axios.post('http://localhost:5001/api/jobs', jobData);
      navigate('/hire');
    } catch (err) {
      setError(err.response?.data?.message || 'Error posting job');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.desc}
              onChange={(e) => setFormData({...formData, desc: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience (years)</label>
            <input
              type="number"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.exp}
              onChange={(e) => setFormData({...formData, exp: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.profile}
              onChange={(e) => setFormData({...formData, profile: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Technologies (comma-separated)</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.techs}
              onChange={(e) => setFormData({...formData, techs: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;