import React from 'react';
import './Mint_content.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FAQ from './FAQ';
import About from './About';
import Roadmap from './Roadmap';
import Teams from './Teams';
import Home from './Home';


function Mint_content() {
  return (
    <Router>
      <div className='container' id='mintPage'>
        <div className="navbar">
          <Navbar id="glass" variant="dark"
            fixed="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
              <img src={'/images/logo.jpg'} height='80px' margin-left='40px' />
            </Navbar.Brand>
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse collapseOnSelect>
              <Nav className='NavList'>
                <Nav.Link id="HOVER" href="/"><Link to='/Home'>Home</Link></Nav.Link>
                <Nav.Link id="HOVER" href="#about"><Link to='/About'>About</Link></Nav.Link>
                <Nav.Link id="HOVER" href="#faq"><Link to='/FAQ'>FAQ</Link></Nav.Link>
                <Nav.Link id="HOVER" href="#roadmap"><Link to='/Roadmap'>Roadmap</Link></Nav.Link>
                <Nav.Link id="HOVER" href="#teams"><Link to='/Teams'>Team</Link></Nav.Link>
                <Nav.Link id="HOVER"><Link to='/' collapseOnSelect>Mint</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <div className='connect'>
              CONNECT
            </div>
          </Navbar>
        </div>

        <Switch>
          <Route exact path='/Home' component={Home}>
            <Home />
          </Route>
          <Route exact path='/FAQ' component={FAQ}>
            <FAQ />
          </Route>
          <Route exact path='/About' component={About}>
            <About />
          </Route>
          <Route exact path='/Roadmap' component={Roadmap}>
            <Roadmap />
          </Route>
          <Route exact path='/Teams' component={Teams}>
            <Teams />
          </Route>

          <div className='mint_content'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!'
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!'
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!'
            </p>
          </div>
        </Switch>


      </div>
    </Router>

  )
}

export default Mint_content
