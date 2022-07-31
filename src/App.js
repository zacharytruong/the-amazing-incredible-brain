import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Author from './components/Author';
import Fact from './components/Fact';
import Fiction from './components/Fiction';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/fact" element={<Fact />} />
          <Route path="/fiction" element={<Fiction />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
