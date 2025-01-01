import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
    </div>
  );
}

export default App;
