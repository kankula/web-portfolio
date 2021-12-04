import './App.css';
import Background from './components/component/Background';
import Navbar from './components/component/Navbar';
import Home from './contents/Home';
import Skills from './contents/Skills';
import About from './contents/About';
import Projects from './contents/Projects';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename={"/web-portfolio"}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Background />

      </div>
    </Router>

  );
}

export default App;
