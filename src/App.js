import './App.css';
import About from './components/About';
import Curasol from './components/Curasol';
import Roadmap from './components/Roadmap';
import Starter from './components/Starter';
import Teams from './components/Teams';
import Timer from './components/Timer';
import FAQ from './components/FAQ';

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar bg="dark" variant="dark" margin="22px 33px"
          fixed="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={'/images/logo.jpg'} height='80px' />
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className='NavList'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#teams">Team</Nav.Link>
              <Nav.Link href="#mint">Mint</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className='connect'>
            CONNECT
          </div>
        </Navbar>
      </div>


      <Timer />
      <hr />
      <Starter />
      <hr />
      <About />
      <hr />
      <Curasol />
      <hr />
      <Roadmap />
      <hr />
      <FAQ />
      <hr />
      <Teams />
      <hr />


      <div className='Footer'>
        <div className="Footer_copyright">
          <p>©2021 CRYPTO.CHICKS</p>
        </div>

        <div className="Footer_navigator">
          <Nav>
            <Nav.Link active='active' href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#teams">Team</Nav.Link>
            <Nav.Link href="#mint">Mint</Nav.Link>
          </Nav>
        </div>


        <div className="Footer_social">
          <img src="/images/twitter.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          <img src="/images/discord.png" alt="" />
          <img src="/images/tik-tok.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
