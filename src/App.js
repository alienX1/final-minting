import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { colors } from '@material-ui/core';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Mint_content from './components/Mint_content';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="Container">
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
                  <Nav.Link id="HOVER" href="#timer">Mint</Nav.Link>
                  <Nav.Link id="HOVER"><Link to='/Mint_content'>DeFi</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <div className='connect'>
                <div className="bindi"></div>
                CONNECT
              </div>
            </Navbar>
          </div>
          <Switch>
            <Route exact path='/' component={Home}>
              <Home/>
            </Route>
            <Route exact path='/Mint_content' component={Mint_content}>
              <Mint_content/>
            </Route>
          </Switch>

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
                <Nav.Link id="HOVE" href="#timer">Mint</Nav.Link>
                <Nav.Link id="HOVE" href="#mint">DeFi</Nav.Link>
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
      </Router>
    </div>
  );
}

export default App;
