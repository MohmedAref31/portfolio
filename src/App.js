import logo from './logo.svg';
import './App.css';
import Nav from './componentes/Nav.js'
import Main from './componentes/Main.js'
import Skills from './componentes/Skills.js'
import Contact from './componentes/Contact.js';
import Footer from './componentes/footer.js';
import Projects from './componentes/project';

function App() {
  return (
   <div className=''>
    <Nav></Nav>
    <Main></Main>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
   </div>
  );
}

export default App;
