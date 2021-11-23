import React from 'react';
import './Mint_content.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Mint_content() {
  return (
    <div className='container' id='mintPage'>
      <div className="navbar">
        <Navbar id="glass" variant="dark"
          fixed="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={'/images/logo.jpg'} height='80px' margin-left='40px' />
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className='NavList'>
              <Nav.Link id="HOVER" href="/"><Link to=''>Home</Link></Nav.Link>
              <Nav.Link id="HOVER" href="#about"><Link to=''>About</Link></Nav.Link>
              <Nav.Link id="HOVER" href="#faq"><Link to=''>FAQ</Link></Nav.Link>
              <Nav.Link id="HOVER" href="#roadmap"><Link to=''>Roadmap</Link></Nav.Link>
              <Nav.Link id="HOVER" href="#teams"><Link to=''>Team</Link></Nav.Link>
              <Nav.Link id="HOVER"><Link to='/'>Mint</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className='connect'>
            CONNECT
          </div>
        </Navbar>
      </div>

      <div className='mint_content'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!'
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!'
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto ut, nostrum ab doloremque est cum eos ipsum beatae nesciunt nulla sint velit ipsa soluta quasi eligendi eveniet fugit totam!'
        </p>
      </div>

      
    </div>

  )
}

export default Mint_content
