import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-x-4">
        <Link
          to="/post-job"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Post Job
        </Link>
        <Link
          to="/hire"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Hire
        </Link>
      </div>
    </div>
  );
}

export default Home;