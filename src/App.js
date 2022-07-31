import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Author from './components/Author';
import Fact from './components/Fact';
import Fiction from './components/Fiction';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/the-amazing-incredible-brain/" element={<Home />} />
          <Route
            path="/the-amazing-incredible-brain/author"
            element={<Author />}
          />
          <Route path="/the-amazing-incredible-brain/fact" element={<Fact />} />
          <Route
            path="/the-amazing-incredible-brain/fiction"
            element={<Fiction />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
