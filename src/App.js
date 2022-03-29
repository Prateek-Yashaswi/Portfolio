import './App.css';
import MyNav from './components/Navbar/Navbar';
//import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Technical from './components/Technical/Technical';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div>

      <MyNav></MyNav>
        <Header
          title="Header"
          to="home"
          dark={true}
          id="Header"
        />
        <About
          title="About"
          to="about"
          dark={true}
          id="About"
        />

        <Experience
          title="Experience"
          to="experience"
          dark={true}
          id="experience"
        />

      <Technical
          title="Technical"
          to="technical"
          dark={false}
          id="technical"
        />

        <Projects
        title="projects"
        to="projects"
        dark={false}
        id="projects"
        />

        <Contact
        title = "contact"
        to="contact"
        dark={false}
        id="contact"
        />

    </div>
  );
}

export default App;
