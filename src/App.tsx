import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container relative">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member/:id" element={<Portfolio />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
