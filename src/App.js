import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Author from './components/Author';
import Fact from './components/Fact';
import Fiction from './components/Fiction';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/the-amazing-incredible-brain/" element={<Home />} />
          <Route path="/the-amazing-incredible-brain/author" element={<Author />} />
          <Route path="/the-amazing-incredible-brain/fact" element={<Fact />} />
          <Route path="/the-amazing-incredible-brain/fiction" element={<Fiction />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
