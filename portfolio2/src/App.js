import './App.css';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import About from './components/aboutMe/About';
import Project from './components/projects/Project';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
