import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostJob from './components/PostJob';
import Hire from './components/Hire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </Router>
  );
}

export default App;