import './App.css';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
