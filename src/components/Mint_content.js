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
                <Nav.Link id="HOVER"><Link to='/' collapseOnSelect>DeFi</Link></Nav.Link>
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

            <div className="mint_page_c">
              <div className="div1">
                <div className="div1_sec1">
                  <div className="moose_trax">
                    <p>Moose Trax</p>
                    <div className="moose_trax_img">
                      <img src="/images/discord.png" alt="" />
                      <p>M</p>
                      <img src="/images/twitter.png" alt="" />
                    </div>
                  </div>
                  <div className="wallet">
                    <b>Wallet</b>
                    <p>0 MOOSE</p>
                    <p>0.00 TRAX</p>

                    <b>Staking</b>
                    <p>0 MOOSE</p>
                    <p>0.000000 unclaimed TRAX</p>

                    <button>Stack to earn TRAX</button>
                  </div>
                </div>

                <div className="div1_sec2">
                  <img src="/images/pic1.png" alt="" />
                  <p>* This is a sample Moose. <br /> Newly minted Moose will have a unique set of traits</p>
                  <div className="sec2_data">
                    <section>
                      <b>Mint with ETH</b>
                      <p>0 / 0 ETH</p>
                    </section>
                    <section>
                      <b>Mint with TRAX</b>
                      <p>0 / 4 TRAX</p>
                    </section>
                  </div>
                  <div className="sec2_btn">
                    <button className="b1">Mint with ETH</button>
                    <button className="b2">Approve Token</button>
                  </div>
                </div>
              </div>

              <div className="div2">
                <p>10000 /10000<b>Minted</b></p>
                <p>5907<b>Stacked</b></p>
                <p>1827<b>In wallets</b></p>
                <p>2266<b>Burned</b></p>
              </div>

              <div className="div3">
                <div className="line1">
                  <img src="/images/arrow.jpg" alt="" />
                  <p>O Owned tokens</p>
                </div>
                <div className="line1">
                  <img src="/images/arrow.jpg" alt="" />
                  <p>O Stacked tokens</p>
                </div>

                <div className="line2">
                  <button className='btn_burn'>ID to burn</button>
                  <button className='btn_mint'>Burn for mint</button>
                </div>
                <div className="line3">
                  <button>Approve all</button>
                  <button>Unstake All</button>
                </div>

                <div className="line4">
                  <div className="line4btn1">
                    <button className='btn_burn'>IDs to stake</button>
                    <button className='btn_mint'>Stake Token IDs</button>
                  </div>
                  <div className="line4btn1">
                    <button className='btn_burn'>IDs to unstake</button>
                    <button className='btn_mint'>Unstake Token IDs</button>
                  </div>
                </div>
              </div>
              
              <div className="div4"></div>
            </div>
          </div>
        </Switch>


      </div>
    </Router>

  )
}

export default Mint_content
