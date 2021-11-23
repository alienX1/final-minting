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
import { colors } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <Navbar id="glass" variant="dark"
            fixed="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
              <img src={'/images/logo.jpg'} height='80px' margin-left='40px' />
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav className='NavList'>
                <Nav.Link id="HOVER" href="/">Home</Nav.Link>
                <Nav.Link id="HOVER" href="#about">About</Nav.Link>
                <Nav.Link id="HOVER" href="#faq">FAQ</Nav.Link>
                <Nav.Link id="HOVER" href="#roadmap">Roadmap</Nav.Link>
                <Nav.Link id="HOVER" href="#teams">Team</Nav.Link>
                <Nav.Link id="HOVER" href="#mint">Mint</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <div className='connect'>
              CONNECT
            </div>
          </Navbar>
        </div>


        <Timer />

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
              <Nav.Link id="HOVE" href="#about">About</Nav.Link>
              <Nav.Link id="HOVE" href="#faq">FAQ</Nav.Link>
              <Nav.Link id="HOVE" href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link id="HOVE" href="#teams">Team</Nav.Link>
              <Nav.Link id="HOVE" href="#mint">Mint</Nav.Link>
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
    </div>
  );
}

export default App;
