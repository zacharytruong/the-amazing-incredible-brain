import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
